# Design Document

## Overview

This design enhances the existing calendar page by removing the individual event listing section and adding calendar subscription functionality and comprehensive search/filtering capabilities. The implementation will maintain the current calendar grid as the primary interface while adding subscription buttons and search controls below the calendar navigation.

## Architecture

### Component Structure
```
CalendarPage
├── Header (existing)
├── Hero Section (existing)
├── CalendarClient (enhanced)
│   ├── Month Navigation (existing)
│   ├── Calendar Grid (existing)
│   ├── Calendar Subscription Section (new)
│   │   ├── Google Calendar Button
│   │   ├── Microsoft Outlook Button
│   │   └── iOS Calendar Button
│   ├── Search and Filter Section (new)
│   │   ├── Text Search Input
│   │   ├── Date Range Filters
│   │   └── Category Filters
│   └── Event Modal (existing)
└── Footer (existing)
```

### Data Flow
1. **Server-side**: ICS data fetched and parsed (existing)
2. **Client-side**: Events filtered based on search criteria
3. **Calendar Grid**: Displays filtered events with visual highlighting
4. **Subscription**: Generates platform-specific subscription URLs

## Components and Interfaces

### Enhanced CalendarClient Component

#### New State Management
```typescript
interface FilterState {
  textSearch: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  categories: string[];
}

interface CalendarClientState {
  currentDate: Date; // existing
  selectedEvent: CalendarEvent | null; // existing
  filters: FilterState; // new
  availableCategories: string[]; // new
}
```

#### Calendar Subscription Component
```typescript
interface SubscriptionButtonProps {
  platform: 'google' | 'outlook' | 'ios';
  calendarUrl: string;
  icon: React.ComponentType;
  label: string;
}
```

#### Search and Filter Components
```typescript
interface SearchFiltersProps {
  filters: FilterState;
  availableCategories: string[];
  onFiltersChange: (filters: FilterState) => void;
}
```

### Event Categorization System

#### Automatic Category Detection
Events will be automatically categorized based on keywords in titles and descriptions:

```typescript
const EVENT_CATEGORIES = {
  'Divine Liturgy': ['liturgy', 'divine liturgy', 'service'],
  'Vespers': ['vespers', 'evening prayer'],
  'Matins': ['matins', 'morning prayer'],
  'Bible Study': ['bible study', 'scripture', 'study'],
  'Fellowship': ['fellowship', 'social', 'coffee hour'],
  'Education': ['education', 'class', 'learning'],
  'Special Events': ['feast', 'celebration', 'special'],
  'Youth': ['youth', 'children', 'kids'],
  'Choir': ['choir', 'music', 'singing'],
  'Parish Meeting': ['meeting', 'council', 'assembly']
};

function categorizeEvent(event: CalendarEvent): string[] {
  const text = `${event.title} ${event.description || ''}`.toLowerCase();
  const categories: string[] = [];
  
  Object.entries(EVENT_CATEGORIES).forEach(([category, keywords]) => {
    if (keywords.some(keyword => text.includes(keyword))) {
      categories.push(category);
    }
  });
  
  return categories.length > 0 ? categories : ['Other'];
}
```

## Data Models

### Enhanced CalendarEvent Interface
```typescript
interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  categories: string[]; // new - auto-generated categories
}
```

### Filter State Interface
```typescript
interface FilterState {
  textSearch: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  categories: string[];
}
```

## Calendar Subscription Implementation

### ICS Feed Generation
The existing ICS URL will be used for subscriptions:
```typescript
const ICS_FEED_URL = 'https://outlook.office365.com/owa/calendar/c55660a74402441d9e2d1c089ae73b74@stnicholasgr.com/39e6ab6f452841aeb19a5c34fe53c690790102100021740189/calendar.ics';
```

### Platform-Specific Subscription URLs
```typescript
const generateSubscriptionUrls = (icsUrl: string) => ({
  google: `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(icsUrl)}`,
  outlook: `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(icsUrl)}`,
  ios: icsUrl // Direct ICS link for iOS
});
```

### Subscription Button Implementation
- **Google Calendar**: Opens Google Calendar with subscription prompt
- **Microsoft Outlook**: Opens Outlook web with subscription prompt  
- **iOS Calendar**: Direct download of ICS file for iOS Calendar app
- **Visual Design**: Platform-appropriate icons and colors

## Search and Filtering Logic

### Text Search Implementation
```typescript
function filterEventsByText(events: CalendarEvent[], searchText: string): CalendarEvent[] {
  if (!searchText.trim()) return events;
  
  const searchLower = searchText.toLowerCase();
  return events.filter(event => 
    event.title.toLowerCase().includes(searchLower) ||
    (event.description && event.description.toLowerCase().includes(searchLower)) ||
    (event.location && event.location.toLowerCase().includes(searchLower))
  );
}
```

### Date Range Filtering
```typescript
function filterEventsByDateRange(
  events: CalendarEvent[], 
  startDate: Date | null, 
  endDate: Date | null
): CalendarEvent[] {
  return events.filter(event => {
    const eventDate = new Date(event.start);
    if (startDate && eventDate < startDate) return false;
    if (endDate && eventDate > endDate) return false;
    return true;
  });
}
```

### Category Filtering
```typescript
function filterEventsByCategories(
  events: CalendarEvent[], 
  selectedCategories: string[]
): CalendarEvent[] {
  if (selectedCategories.length === 0) return events;
  
  return events.filter(event =>
    event.categories.some(category => selectedCategories.includes(category))
  );
}
```

### Combined Filtering
```typescript
function applyAllFilters(events: CalendarEvent[], filters: FilterState): CalendarEvent[] {
  let filteredEvents = events;
  
  // Apply text search
  filteredEvents = filterEventsByText(filteredEvents, filters.textSearch);
  
  // Apply date range
  filteredEvents = filterEventsByDateRange(
    filteredEvents, 
    filters.dateRange.start, 
    filters.dateRange.end
  );
  
  // Apply category filters
  filteredEvents = filterEventsByCategories(filteredEvents, filters.categories);
  
  return filteredEvents;
}
```

## Visual Design Updates

### Layout Changes
1. **Remove**: Individual event listing section below calendar
2. **Add**: Subscription buttons section below calendar grid
3. **Add**: Search and filter controls below subscription buttons
4. **Maintain**: Calendar grid as primary interface
5. **Maintain**: Event modal for detailed views

### Calendar Grid Enhancements
- **Filtered Events**: Highlighted with normal styling
- **Non-matching Events**: Dimmed with reduced opacity (opacity-30)
- **No Results**: Show message when no events match filters
- **Category Indicators**: Small colored dots for event categories

### Subscription Section Design
```typescript
// Visual layout for subscription buttons
<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
  <h3 className="text-lg font-semibold text-stone-800 mb-4">
    Subscribe to Calendar
  </h3>
  <div className="flex flex-col sm:flex-row gap-3">
    <SubscriptionButton platform="google" />
    <SubscriptionButton platform="outlook" />
    <SubscriptionButton platform="ios" />
  </div>
</div>
```

### Search Section Design
```typescript
// Visual layout for search and filters
<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
  <h3 className="text-lg font-semibold text-stone-800 mb-4">
    Search & Filter Events
  </h3>
  <div className="space-y-4">
    <TextSearchInput />
    <DateRangeFilters />
    <CategoryFilters />
  </div>
</div>
```

## Error Handling

### Subscription Errors
- Handle cases where subscription URLs fail to open
- Provide fallback instructions for manual subscription
- Display user-friendly error messages

### Search Performance
- Debounce text search input to avoid excessive filtering
- Optimize filtering algorithms for large event sets
- Handle edge cases in date parsing and comparison

### Filter State Management
- Persist filter state in URL parameters for bookmarking
- Handle invalid filter combinations gracefully
- Provide clear filter reset functionality

## Testing Strategy

### Subscription Testing
- Verify subscription URLs work with each platform
- Test ICS feed accessibility and format
- Confirm subscription buttons open correct applications

### Search and Filter Testing
- Test text search with various keywords and phrases
- Verify date range filtering with edge cases
- Confirm category filtering accuracy
- Test combined filter scenarios

### Visual Testing
- Verify calendar grid updates correctly with filters
- Test responsive design with new components
- Confirm event highlighting and dimming works properly

### Performance Testing
- Test search performance with large event datasets
- Verify filter application doesn't cause UI lag
- Confirm calendar grid rendering remains smooth

## Implementation Notes

### Backward Compatibility
- Maintain all existing calendar functionality
- Preserve event modal behavior
- Keep existing keyboard navigation

### Accessibility Considerations
- Ensure subscription buttons are keyboard accessible
- Provide proper ARIA labels for search controls
- Maintain screen reader compatibility for filtered results

### Mobile Responsiveness
- Stack subscription buttons vertically on mobile
- Optimize search controls for touch interfaces
- Ensure calendar grid remains usable with filters on mobile

### Performance Optimizations
- Implement search debouncing (300ms delay)
- Use React.memo for subscription button components
- Optimize filter functions for large event arrays