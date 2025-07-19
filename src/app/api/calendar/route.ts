import { NextResponse } from 'next/server';

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
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
          id: currentEvent.id || Math.random().toString(36).substr(2, 9),
          title: currentEvent.title,
          start: currentEvent.start,
          end: currentEvent.end || currentEvent.start,
          description: currentEvent.description,
          location: currentEvent.location,
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

export async function GET() {
  try {
    const icsUrl = 'https://outlook.office365.com/owa/calendar/c55660a74402441d9e2d1c089ae73b74@stnicholasgr.com/39e6ab6f452841aeb19a5c34fe53c690790102100021740189/calendar.ics';
    
    const response = await fetch(icsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Calendar-Parser/1.0)',
      },
      // Add cache control to avoid hitting the API too frequently
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status}`);
    }
    
    const icsData = await response.text();
    const events = parseICS(icsData);
    
    return NextResponse.json({ 
      events,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Calendar API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch calendar data',
        events: []
      },
      { status: 500 }
    );
  }
}