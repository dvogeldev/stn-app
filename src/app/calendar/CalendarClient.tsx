'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

interface CalendarClientProps {
  events: CalendarEvent[];
}

export default function CalendarClient({ events }: CalendarClientProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDay = (day: number) => {
    const dayDate = new Date(currentYear, currentMonth, day);
    return events.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === dayDate.toDateString();
    });
  };

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-32 border border-gray-200 bg-gray-50"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day);
      const cellDate = new Date(currentYear, currentMonth, day);
      const isToday = today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
      const isWeekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;
      
      days.push(
        <div 
          key={day} 
          className={`h-32 border p-2 transition-colors hover:bg-gray-50 ${
            isToday 
              ? 'bg-blue-50 border-blue-300 border-2' 
              : 'border-gray-200 ' + (isWeekend ? 'bg-gray-50' : 'bg-white')
          }`}
        >
          <div className={`text-sm font-bold mb-1 inline-flex items-center justify-center min-w-[24px] h-6 ${
            isToday 
              ? 'text-white bg-blue-600 rounded-full' 
              : isWeekend 
                ? 'text-gray-600' 
                : 'text-gray-800'
          }`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-sm truncate border-l-2 border-blue-400 cursor-pointer hover:bg-blue-200 transition-colors"
                title={`${event.title}${event.location ? ` - ${event.location}` : ''}`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-gray-500 font-medium">
                +{dayEvents.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="container mx-auto px-4 py-12 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-8 bg-white rounded-lg shadow-sm p-6">
          <Button
            variant="outline"
            onClick={() => navigateMonth('prev')}
            className="flex items-center space-x-2 border-teal-200 text-teal-700 hover:bg-teal-50"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous Month</span>
            <span className="sm:hidden">Prev</span>
          </Button>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          
          <Button
            variant="outline"
            onClick={() => navigateMonth('next')}
            className="flex items-center space-x-2 border-teal-200 text-teal-700 hover:bg-teal-50"
          >
            <span className="hidden sm:inline">Next Month</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-stone-200">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-stone-100 border-b border-stone-200">
            {dayNames.map((day, index) => (
              <div key={day} className="p-4 text-center font-semibold text-stone-700 border-r border-stone-200 last:border-r-0">
                <span className="hidden md:inline">{day}</span>
                <span className="md:hidden">{dayNamesShort[index]}</span>
              </div>
            ))}
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Events List for Current Month */}
        {events.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                Upcoming Events
              </h3>
              <p className="text-stone-600">
                {monthNames[currentMonth]} {currentYear} • {events.filter(event => {
                  const eventDate = new Date(event.start);
                  return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
                }).length} events
              </p>
            </div>
            
            <div className="grid gap-4 md:gap-6">
              {events
                .filter(event => {
                  const eventDate = new Date(event.start);
                  return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
                })
                .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
                .map((event, index) => (
                  <div key={`${event.id}-${index}`} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-stone-800 mb-2">{event.title}</h4>
                          {event.description && (
                            <p className="text-stone-600 mb-3 leading-relaxed">{event.description}</p>
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-stone-500">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>
                                {new Date(event.start).toLocaleDateString('en-US', { 
                                  weekday: 'long', 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>
                                {new Date(event.start).toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                                {event.end && new Date(event.end).getTime() !== new Date(event.start).getTime() && (
                                  <span> - {new Date(event.end).toLocaleTimeString([], { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}</span>
                                )}
                              </span>
                            </div>
                            {event.location && (
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <div className="bg-teal-50 rounded-lg p-3 text-center min-w-[80px]">
                            <div className="text-2xl font-bold text-teal-700">
                              {new Date(event.start).getDate()}
                            </div>
                            <div className="text-xs font-medium text-teal-600 uppercase">
                              {new Date(event.start).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* No Events Message */}
        {events.filter(event => {
          const eventDate = new Date(event.start);
          return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
        }).length === 0 && (
          <div className="mt-12 text-center py-16 bg-white rounded-lg shadow-sm">
            <CalendarIcon className="h-16 w-16 text-stone-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-600 mb-2">No Events This Month</h3>
            <p className="text-stone-500">
              Check back soon for upcoming parish events and services.
            </p>
          </div>
        )}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Event Details</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</h4>
                
                {/* Date and Time */}
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Clock className="h-5 w-5" />
                  <div>
                    <div className="font-medium">
                      {new Date(selectedEvent.start).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-sm">
                      {new Date(selectedEvent.start).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                      {selectedEvent.end && new Date(selectedEvent.end).getTime() !== new Date(selectedEvent.start).getTime() && (
                        <span> - {new Date(selectedEvent.end).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location */}
                {selectedEvent.location && (
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="h-5 w-5" />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}

                {/* Description */}
                {selectedEvent.description && (
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Description</h5>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {selectedEvent.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    // Add to calendar functionality could go here
                    const startDate = new Date(selectedEvent.start);
                    const endDate = selectedEvent.end ? new Date(selectedEvent.end) : startDate;
                    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(selectedEvent.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(selectedEvent.description || '')}&location=${encodeURIComponent(selectedEvent.location || '')}`;
                    window.open(googleCalendarUrl, '_blank');
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}