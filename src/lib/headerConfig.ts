// src/lib/headerConfig.ts

export interface HeaderConfig {
  showTopBar: boolean;
  topBarMessage?: string;
}

// Default header configuration
export const defaultHeaderConfig: HeaderConfig = {
  showTopBar: true,
  topBarMessage: "Welcome to St. Nicholas Orthodox Church, Grand Rapids, Michigan."
};

// Alternative configuration without TopBar for cleaner look
export const cleanHeaderConfig: HeaderConfig = {
  showTopBar: false
};

// Configuration with custom message
export const customMessageConfig: HeaderConfig = {
  showTopBar: true,
  topBarMessage: "Join us for worship and fellowship at St. Nicholas Orthodox Church."
};

// Utility function to get header configuration
export function getHeaderConfig(variant: 'default' | 'clean' | 'custom' = 'default'): HeaderConfig {
  switch (variant) {
    case 'clean':
      return cleanHeaderConfig;
    case 'custom':
      return customMessageConfig;
    default:
      return defaultHeaderConfig;
  }
}