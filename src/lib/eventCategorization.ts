/**
 * Event categorization utility for Orthodox church events
 * Automatically categorizes events based on keywords in titles and descriptions
 */

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  categories: string[];
}

/**
 * Orthodox church event categories with associated keywords
 * Keywords are matched case-insensitively against event titles and descriptions
 */
export const EVENT_CATEGORIES = {
  'Divine Liturgy': [
    'liturgy', 
    'divine liturgy', 
    'service', 
    'divine service',
    'eucharist',
    'communion'
  ],
  'Vespers': [
    'vespers', 
    'evening prayer', 
    'evening service',
    'great vespers',
    'small vespers'
  ],
  'Matins': [
    'matins', 
    'morning prayer', 
    'orthros',
    'morning service'
  ],
  'Bible Study': [
    'bible study', 
    'scripture', 
    'study', 
    'bible class',
    'scripture study',
    'biblical'
  ],
  'Fellowship': [
    'fellowship', 
    'social', 
    'coffee hour', 
    'potluck', 
    'meal',
    'dinner',
    'lunch',
    'breakfast',
    'gathering'
  ],
  'Education': [
    'education', 
    'class', 
    'learning', 
    'teaching', 
    'catechism',
    'lecture',
    'seminar',
    'workshop'
  ],
  'Special Events': [
    'feast', 
    'celebration', 
    'special', 
    'festival', 
    'holy day',
    'nativity',
    'pascha',
    'easter',
    'christmas',
    'theophany',
    'pentecost'
  ],
  'Youth': [
    'youth', 
    'children', 
    'kids', 
    'sunday school', 
    'teen',
    'teenager',
    'child',
    'young adult'
  ],
  'Choir': [
    'choir', 
    'music', 
    'singing', 
    'chant', 
    'rehearsal',
    'practice',
    'chanting'
  ],
  'Parish Meeting': [
    'meeting', 
    'council', 
    'assembly', 
    'parish council', 
    'board',
    'committee',
    'business meeting'
  ],
  'Sacraments': [
    'baptism', 
    'wedding', 
    'chrismation', 
    'confession', 
    'unction',
    'marriage',
    'holy unction',
    'sacrament'
  ],
  'Memorial': [
    'memorial', 
    'funeral', 
    'trisagion', 
    'remembrance',
    'memorial service',
    'panihida'
  ]
} as const;

/**
 * Categorizes a single event based on keywords in its title and description
 * @param event - The calendar event to categorize
 * @returns Array of category strings that match the event
 */
export function categorizeEvent(event: Pick<CalendarEvent, 'title' | 'description'>): string[] {
  const text = `${event.title} ${event.description || ''}`.toLowerCase();
  const categories: string[] = [];

  Object.entries(EVENT_CATEGORIES).forEach(([category, keywords]) => {
    if (keywords.some(keyword => text.includes(keyword.toLowerCase()))) {
      categories.push(category);
    }
  });

  return categories.length > 0 ? categories : ['Other'];
}

/**
 * Processes an array of events and adds categories to each event
 * @param events - Array of calendar events to process
 * @returns Array of events with categories added
 */
export function categorizeEvents(events: CalendarEvent[]): CalendarEvent[] {
  return events.map(event => ({
    ...event,
    categories: event.categories?.length > 0 ? event.categories : categorizeEvent(event)
  }));
}

/**
 * Gets all unique categories from an array of categorized events
 * @param events - Array of categorized calendar events
 * @returns Sorted array of unique category names
 */
export function getAvailableCategories(events: CalendarEvent[]): string[] {
  return Array.from(
    new Set(events.flatMap(event => event.categories))
  ).sort();
}

/**
 * Gets all possible category names from the EVENT_CATEGORIES definition
 * @returns Array of all defined category names
 */
export function getAllCategoryNames(): string[] {
  return Object.keys(EVENT_CATEGORIES);
}