import { describe, it, expect } from 'vitest';
import { 
  categorizeEvent, 
  categorizeEvents, 
  getAvailableCategories, 
  getAllCategoryNames,
  EVENT_CATEGORIES,
  type CalendarEvent 
} from '../eventCategorization';

describe('eventCategorization', () => {
  describe('categorizeEvent', () => {
    it('should categorize Divine Liturgy events correctly', () => {
      const event = {
        title: 'Divine Liturgy',
        description: 'Sunday morning service'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should categorize Vespers events correctly', () => {
      const event = {
        title: 'Great Vespers',
        description: 'Evening prayer service'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Vespers');
    });

    it('should categorize Bible Study events correctly', () => {
      const event = {
        title: 'Weekly Bible Study',
        description: 'Study of scripture and Orthodox teachings'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Bible Study');
    });

    it('should categorize Fellowship events correctly', () => {
      const event = {
        title: 'Coffee Hour',
        description: 'Fellowship after Divine Liturgy'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Fellowship');
    });

    it('should categorize Youth events correctly', () => {
      const event = {
        title: 'Sunday School',
        description: 'Children and youth education'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Youth');
    });

    it('should categorize Choir events correctly', () => {
      const event = {
        title: 'Choir Rehearsal',
        description: 'Practice for Sunday chanting'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Choir');
    });

    it('should categorize Parish Meeting events correctly', () => {
      const event = {
        title: 'Parish Council Meeting',
        description: 'Monthly business meeting'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Parish Meeting');
    });

    it('should categorize Sacrament events correctly', () => {
      const event = {
        title: 'Baptism Service',
        description: 'Holy sacrament of baptism'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Sacraments');
    });

    it('should categorize Memorial events correctly', () => {
      const event = {
        title: 'Memorial Service',
        description: 'Trisagion for the departed'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Memorial');
    });

    it('should categorize Special Events correctly', () => {
      const event = {
        title: 'Nativity Celebration',
        description: 'Christmas feast day celebration'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Special Events');
    });

    it('should categorize Education events correctly', () => {
      const event = {
        title: 'Catechism Class',
        description: 'Orthodox education and teaching'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Education');
    });

    it('should categorize Matins events correctly', () => {
      const event = {
        title: 'Orthros Service',
        description: 'Morning prayer and matins'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Matins');
    });

    it('should handle case insensitive matching', () => {
      const event = {
        title: 'DIVINE LITURGY',
        description: 'SUNDAY SERVICE'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should handle partial keyword matching', () => {
      const event = {
        title: 'Pre-liturgy preparation',
        description: 'Getting ready for the service'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should assign multiple categories when applicable', () => {
      const event = {
        title: 'Youth Choir Practice',
        description: 'Children singing rehearsal'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Youth');
      expect(categories).toContain('Choir');
      expect(categories.length).toBeGreaterThan(1);
    });

    it('should return "Other" for events that do not match any category', () => {
      const event = {
        title: 'Building Maintenance',
        description: 'Fixing the roof'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toEqual(['Other']);
    });

    it('should handle events with no description', () => {
      const event = {
        title: 'Divine Liturgy'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should handle events with empty description', () => {
      const event = {
        title: 'Vespers',
        description: ''
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Vespers');
    });

    it('should handle complex event descriptions', () => {
      const event = {
        title: 'Sunday Services',
        description: 'Matins at 9:00 AM followed by Divine Liturgy at 10:00 AM. Coffee hour fellowship after service.'
      };
      
      const categories = categorizeEvent(event);
      expect(categories).toContain('Matins');
      expect(categories).toContain('Divine Liturgy');
      expect(categories).toContain('Fellowship');
    });
  });

  describe('categorizeEvents', () => {
    const mockEvents: CalendarEvent[] = [
      {
        id: '1',
        title: 'Divine Liturgy',
        start: new Date('2024-01-07T10:00:00'),
        end: new Date('2024-01-07T11:30:00'),
        description: 'Sunday morning service',
        categories: []
      },
      {
        id: '2',
        title: 'Coffee Hour',
        start: new Date('2024-01-07T11:30:00'),
        end: new Date('2024-01-07T12:30:00'),
        description: 'Fellowship after liturgy',
        categories: []
      },
      {
        id: '3',
        title: 'Building Committee Meeting',
        start: new Date('2024-01-10T19:00:00'),
        end: new Date('2024-01-10T20:00:00'),
        description: 'Monthly committee meeting',
        categories: []
      }
    ];

    it('should categorize all events in an array', () => {
      const categorizedEvents = categorizeEvents(mockEvents);
      
      expect(categorizedEvents[0].categories).toContain('Divine Liturgy');
      expect(categorizedEvents[1].categories).toContain('Fellowship');
      expect(categorizedEvents[2].categories).toContain('Parish Meeting');
    });

    it('should preserve existing categories if already present', () => {
      const eventsWithCategories: CalendarEvent[] = [
        {
          id: '1',
          title: 'Special Event',
          start: new Date('2024-01-07T10:00:00'),
          end: new Date('2024-01-07T11:30:00'),
          description: 'Custom event',
          categories: ['Custom Category']
        }
      ];

      const categorizedEvents = categorizeEvents(eventsWithCategories);
      expect(categorizedEvents[0].categories).toEqual(['Custom Category']);
    });

    it('should handle empty events array', () => {
      const categorizedEvents = categorizeEvents([]);
      expect(categorizedEvents).toEqual([]);
    });
  });

  describe('getAvailableCategories', () => {
    const mockCategorizedEvents: CalendarEvent[] = [
      {
        id: '1',
        title: 'Divine Liturgy',
        start: new Date('2024-01-07T10:00:00'),
        end: new Date('2024-01-07T11:30:00'),
        categories: ['Divine Liturgy']
      },
      {
        id: '2',
        title: 'Coffee Hour',
        start: new Date('2024-01-07T11:30:00'),
        end: new Date('2024-01-07T12:30:00'),
        categories: ['Fellowship']
      },
      {
        id: '3',
        title: 'Youth Event',
        start: new Date('2024-01-10T19:00:00'),
        end: new Date('2024-01-10T20:00:00'),
        categories: ['Youth', 'Fellowship']
      }
    ];

    it('should return unique categories from events', () => {
      const categories = getAvailableCategories(mockCategorizedEvents);
      
      expect(categories).toContain('Divine Liturgy');
      expect(categories).toContain('Fellowship');
      expect(categories).toContain('Youth');
      expect(categories.length).toBe(3);
    });

    it('should return sorted categories', () => {
      const categories = getAvailableCategories(mockCategorizedEvents);
      const sortedCategories = [...categories].sort();
      
      expect(categories).toEqual(sortedCategories);
    });

    it('should handle events with no categories', () => {
      const eventsWithoutCategories: CalendarEvent[] = [
        {
          id: '1',
          title: 'Event',
          start: new Date('2024-01-07T10:00:00'),
          end: new Date('2024-01-07T11:30:00'),
          categories: []
        }
      ];

      const categories = getAvailableCategories(eventsWithoutCategories);
      expect(categories).toEqual([]);
    });

    it('should handle empty events array', () => {
      const categories = getAvailableCategories([]);
      expect(categories).toEqual([]);
    });
  });

  describe('getAllCategoryNames', () => {
    it('should return all defined category names', () => {
      const categoryNames = getAllCategoryNames();
      
      expect(categoryNames).toContain('Divine Liturgy');
      expect(categoryNames).toContain('Vespers');
      expect(categoryNames).toContain('Matins');
      expect(categoryNames).toContain('Bible Study');
      expect(categoryNames).toContain('Fellowship');
      expect(categoryNames).toContain('Education');
      expect(categoryNames).toContain('Special Events');
      expect(categoryNames).toContain('Youth');
      expect(categoryNames).toContain('Choir');
      expect(categoryNames).toContain('Parish Meeting');
      expect(categoryNames).toContain('Sacraments');
      expect(categoryNames).toContain('Memorial');
      
      expect(categoryNames.length).toBe(Object.keys(EVENT_CATEGORIES).length);
    });
  });

  describe('EVENT_CATEGORIES', () => {
    it('should have all expected categories defined', () => {
      const expectedCategories = [
        'Divine Liturgy',
        'Vespers', 
        'Matins',
        'Bible Study',
        'Fellowship',
        'Education',
        'Special Events',
        'Youth',
        'Choir',
        'Parish Meeting',
        'Sacraments',
        'Memorial'
      ];

      expectedCategories.forEach(categoryName => {
        expect(EVENT_CATEGORIES).toHaveProperty(categoryName);
        expect(Array.isArray(EVENT_CATEGORIES[categoryName as keyof typeof EVENT_CATEGORIES])).toBe(true);
        expect(EVENT_CATEGORIES[categoryName as keyof typeof EVENT_CATEGORIES].length).toBeGreaterThan(0);
      });
    });

    it('should have meaningful keywords for each category', () => {
      Object.entries(EVENT_CATEGORIES).forEach(([, keywords]) => {
        expect(keywords.length).toBeGreaterThan(0);
        keywords.forEach(keyword => {
          expect(typeof keyword).toBe('string');
          expect(keyword.length).toBeGreaterThan(0);
        });
      });
    });
  });
});