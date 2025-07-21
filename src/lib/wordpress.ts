const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export interface SiteSettings {
  location: {
    address: string;
    address2?: string | null;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    email: string;
    website?: string;
    googleMapsUrl?: string;
    googleMapsEmbedUrl?: string;
    officeHours?: string;
  };
  homepageSettings: {
    welcomeMessage?: string;
    siteTitle?: string;
    siteTagline?: string;
  };
}

export interface WordPressResponse<T> {
  data: T;
  contentType: string | null;
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  // Return fallback data immediately if WordPress API URL is not configured
  if (!WORDPRESS_API_URL) {
    console.warn('WORDPRESS_API_URL not configured, using fallback data');
    return getFallbackSiteSettings();
  }

  const query = `
    query GetSiteSettings {
      siteSettings {
        location {
          address
          address2
          city
          state
          zipCode
          phone
          email
          website
          googleMapsUrl
          googleMapsEmbedUrl
          officeHours
        }
        homepageSettings {
          welcomeMessage
          siteTitle
          siteTagline
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Check if the response has the expected structure
    if (result?.data?.siteSettings) {
      return result.data.siteSettings;
    } else {
      console.warn('Unexpected GraphQL response structure:', result);
      return getFallbackSiteSettings();
    }
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return getFallbackSiteSettings();
  }
}

function getFallbackSiteSettings(): SiteSettings {
  return {
    location: {
      address: "2250 E. Paris SE",
      address2: null,
      city: "Grand Rapids",
      state: "MI",
      zipCode: "49546",
      phone: "(616) 954-2700",
      email: "info@stnicholasgr.com",
      website: "https://stnicholasgr.com",
      googleMapsUrl: "https://www.google.com/maps/dir//2250+E+Paris+Ave+SE,+Grand+Rapids,+MI+49546",
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=2250+E+Paris+Ave+SE,+Grand+Rapids,+MI+49546&t=&z=15&ie=UTF8&iwloc=&output=embed",
      officeHours: "Tuesday - Friday: 9:00 AM - 3:00 PM\nSaturday: 10:00 AM - 2:00 PM"
    },
    homepageSettings: {
      welcomeMessage: "Experience the beauty of ancient Orthodox worship in the heart of Grand Rapids. All are welcome to join our community.",
      siteTitle: "St. Nicholas Orthodox Church",
      siteTagline: "Grand Rapids, Michigan"
    }
  };
}

/**
 * Utility function to disable comments on WordPress posts
 * This can be used to bulk disable comments on existing posts
 */
export async function disableCommentsOnPosts(): Promise<boolean> {
  if (!WORDPRESS_API_URL) {
    console.warn('WORDPRESS_API_URL not configured, cannot disable comments');
    return false;
  }

  const mutation = `
    mutation DisableComments {
      updateSettings(input: {
        discussionSettingsDefaultCommentStatus: "closed"
        discussionSettingsDefaultPingStatus: "closed"
      }) {
        discussionSettings {
          defaultCommentStatus
          defaultPingStatus
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: mutation }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Comments disabled successfully:', result);
    return true;
  } catch (error) {
    console.error('Error disabling comments:', error);
    return false;
  }
}