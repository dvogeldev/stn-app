/**
 * Calendar subscription utility functions
 * Generates platform-specific subscription URLs for calendar feeds
 */

// The ICS feed URL from the existing calendar API
export const ICS_FEED_URL = 'https://outlook.office365.com/owa/calendar/c55660a74402441d9e2d1c089ae73b74@stnicholasgr.com/39e6ab6f452841aeb19a5c34fe53c690790102100021740189/calendar.ics';

/**
 * Generate subscription URLs for different calendar platforms
 */
export const generateSubscriptionUrls = (icsUrl: string = ICS_FEED_URL) => ({
  google: `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(icsUrl)}`,
  outlook: `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(icsUrl)}`,
  ios: icsUrl // Direct ICS link for iOS Calendar app
});

/**
 * Open subscription URL in new window/tab
 */
export const openSubscriptionUrl = (platform: 'google' | 'outlook' | 'ios') => {
  const urls = generateSubscriptionUrls();
  const url = urls[platform];
  
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch (error) {
    console.error(`Failed to open ${platform} calendar subscription:`, error);
    // Fallback: copy URL to clipboard or show manual instructions
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    }
  }
};