import { Calendar as CalendarIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import CalendarClient from './CalendarClient';
import { type CalendarEvent } from '@/lib/eventCategorization';

// Server-side data fetching with ISR
async function getCalendarEvents(): Promise<CalendarEvent[]> {
  try {
    const icsUrl = 'https://outlook.office365.com/owa/calendar/c55660a74402441d9e2d1c089ae73b74@stnicholasgr.com/39e6ab6f452841aeb19a5c34fe53c690790102100021740189/calendar.ics';
    
    const response = await fetch(icsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Calendar-Parser/1.0)',
      },
      // ISR: Revalidate every 12 hours (43200 seconds)
      next: { revalidate: 43200 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status}`);
    }
    
    const icsData = await response.text();
    const events = parseICS(icsData);
    
    return events;
    
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return [];
  }
}

// Simple ICS parser function
function parseICS(icsData: string): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const lines = icsData.split('\n').map(line => line.trim());
  
  let currentEvent: Partial<CalendarEvent> = {};
  let inEvent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line === 'BEGIN:VEVENT') {
      inEvent = true;
      currentEvent = {};
    } else if (line === 'END:VEVENT' && inEvent) {
      if (currentEvent.title && currentEvent.start) {
        events.push({
          id: currentEvent.id || Math.random().toString(36).substring(2, 11),
          title: currentEvent.title,
          start: currentEvent.start,
          end: currentEvent.end || currentEvent.start,
          description: currentEvent.description,
          location: currentEvent.location,
          categories: [], // Will be populated by categorizeEvents in CalendarClient
        });
      }
      inEvent = false;
    } else if (inEvent) {
      if (line.startsWith('SUMMARY:')) {
        currentEvent.title = line.substring(8).replace(/\\n/g, '\n').replace(/\\,/g, ',');
      } else if (line.startsWith('DTSTART')) {
        const dateStr = line.split(':')[1];
        currentEvent.start = parseICSDate(dateStr);
      } else if (line.startsWith('DTEND')) {
        const dateStr = line.split(':')[1];
        currentEvent.end = parseICSDate(dateStr);
      } else if (line.startsWith('DESCRIPTION:')) {
        currentEvent.description = line.substring(12).replace(/\\n/g, '\n').replace(/\\,/g, ',');
      } else if (line.startsWith('LOCATION:')) {
        currentEvent.location = line.substring(9).replace(/\\n/g, '\n').replace(/\\,/g, ',');
      } else if (line.startsWith('UID:')) {
        currentEvent.id = line.substring(4);
      }
    }
  }
  
  return events;
}

function parseICSDate(dateStr: string): Date {
  // Handle different ICS date formats
  if (dateStr.includes('T')) {
    // DateTime format: YYYYMMDDTHHMMSS or YYYYMMDDTHHMMSSZ
    const cleanDate = dateStr.replace(/[TZ]/g, '');
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1; // Month is 0-indexed
    const day = parseInt(cleanDate.substring(6, 8));
    const hour = parseInt(cleanDate.substring(8, 10)) || 0;
    const minute = parseInt(cleanDate.substring(10, 12)) || 0;
    const second = parseInt(cleanDate.substring(12, 14)) || 0;
    
    return new Date(year, month, day, hour, minute, second);
  } else {
    // Date only format: YYYYMMDD
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1;
    const day = parseInt(dateStr.substring(6, 8));
    
    return new Date(year, month, day);
  }
}

export default async function CalendarPage() {
  // Fetch events server-side with ISR
  const events = await getCalendarEvents();

  return (
    <div className="bg-stone-50">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <CalendarIcon className="h-12 w-12 text-teal-100" />
              <h1 className="text-4xl md:text-5xl font-bold">Parish Calendar</h1>
            </div>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Stay connected with our parish community through upcoming services, events, and gatherings.
            </p>
          </div>
        </div>
      </div>

      <CalendarClient events={events} />

      <Footer />
    </div>
  );
}