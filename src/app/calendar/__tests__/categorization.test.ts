import { describe, it, expect } from 'vitest';
import { categorizeEvent, type CalendarEvent } from '../../../lib/eventCategorization';

describe('Event Categorization', () => {
  describe('categorizeEvent', () => {
    it('should categorize Divine Liturgy events correctly', () => {
      const event: CalendarEvent = {
        id: '1',
        title: 'Divine Liturgy',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should categorize Vespers events correctly', () => {
      const event: CalendarEvent = {
        id: '2',
        title: 'Evening Prayer Service',
        description: 'Join us for Vespers',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Vespers');
    });

    it('should categorize Bible Study events correctly', () => {
      const event: CalendarEvent = {
        id: '3',
        title: 'Weekly Bible Study',
        description: 'Study of Scripture with Father John',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Bible Study');
    });

    it('should categorize Fellowship events correctly', () => {
      const event: CalendarEvent = {
        id: '4',
        title: 'Parish Potluck',
        description: 'Fellowship meal after liturgy',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Fellowship');
    });

    it('should categorize Youth events correctly', () => {
      const event: CalendarEvent = {
        id: '5',
        title: 'Sunday School',
        description: 'Children and youth education',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Youth');
    });

    it('should categorize Choir events correctly', () => {
      const event: CalendarEvent = {
        id: '6',
        title: 'Choir Rehearsal',
        description: 'Practice for Sunday chanting',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Choir');
    });

    it('should categorize Parish Meeting events correctly', () => {
      const event: CalendarEvent = {
        id: '7',
        title: 'Parish Council Meeting',
        description: 'Monthly board meeting',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Parish Meeting');
    });

    it('should categorize Sacrament events correctly', () => {
      const event: CalendarEvent = {
        id: '8',
        title: 'Wedding Ceremony',
        description: 'Marriage of John and Mary',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Sacraments');
    });

    it('should categorize Memorial events correctly', () => {
      const event: CalendarEvent = {
        id: '9',
        title: 'Memorial Service',
        description: 'Trisagion for the departed',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Memorial');
    });

    it('should categorize Special Events correctly', () => {
      const event: CalendarEvent = {
        id: '10',
        title: 'Feast of St. Nicholas',
        description: 'Special celebration for our patron saint',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Special Events');
    });

    it('should categorize Education events correctly', () => {
      const event: CalendarEvent = {
        id: '11',
        title: 'Catechism Class',
        description: 'Learning about Orthodox teaching',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Education');
    });

    it('should assign multiple categories when event matches multiple keywords', () => {
      const event: CalendarEvent = {
        id: '12',
        title: 'Divine Liturgy and Fellowship Meal',
        description: 'Service followed by potluck',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
      expect(categories).toContain('Fellowship');
    });

    it('should assign "Other" category when no keywords match', () => {
      const event: CalendarEvent = {
        id: '13',
        title: 'Building Maintenance',
        description: 'Repair work on church building',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toEqual(['Other']);
    });

    it('should be case insensitive', () => {
      const event: CalendarEvent = {
        id: '14',
        title: 'DIVINE LITURGY',
        description: 'SUNDAY SERVICE',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Divine Liturgy');
    });

    it('should handle events with no description', () => {
      const event: CalendarEvent = {
        id: '15',
        title: 'Matins',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toContain('Matins');
    });

    it('should handle empty title and description', () => {
      const event: CalendarEvent = {
        id: '16',
        title: '',
        description: '',
        start: new Date(),
        end: new Date(),
        categories: []
      };

      const categories = categorizeEvent(event);
      expect(categories).toEqual(['Other']);
    });
  });
});