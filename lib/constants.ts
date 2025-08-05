// Database connection constants
export const DB_CONNECTION = {
  SERVER_SELECTION_TIMEOUT_MS: 5000,
  SOCKET_TIMEOUT_MS: 45000,
  RETRY_ATTEMPTS: 3,
} as const;

// Form validation constants
export const VALIDATION = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 50,
  SUBJECT_MAX_LENGTH: 100,
  MESSAGE_MAX_LENGTH: 1000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// UI constants
export const UI = {
  TOAST_LIMIT: 1,
  TOAST_REMOVE_DELAY: 1000000,
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300,
} as const;

// API constants
export const API = {
  DEFAULT_TIMEOUT: 10000,
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
} as const;

// Cache constants
export const CACHE = {
  DEFAULT_TTL: 3600, // 1 hour in seconds
  STATIC_ASSETS_TTL: 31536000, // 1 year in seconds
  API_RESPONSE_TTL: 300, // 5 minutes in seconds
} as const;

// Pagination constants
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1,
} as const;

// File upload constants
export const FILE_UPLOAD = {
  MAX_SIZE_MB: 5,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp', '.pdf'],
} as const;

// Security constants
export const SECURITY = {
  JWT_EXPIRES_IN: '7d',
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  SESSION_TIMEOUT_MS: 24 * 60 * 60 * 1000, // 24 hours
} as const;

// Contact information
export const CONTACT_INFO = {
  WHATSAPP_NUMBER: '254746254055',
  EMAIL: 'info@muhsciencetechlabs.com',
  PHONE: '+254 746 254 055',
  ADDRESS: 'Nairobi, Kenya',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/muhsciencetech',
  LINKEDIN: 'https://linkedin.com/company/muhscience-tech-labs',
  GITHUB: 'https://github.com/muhsciencetech',
  FACEBOOK: 'https://facebook.com/muhsciencetechlabs',
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'An unexpected error occurred. Please try again.',
  NETWORK: 'Network error. Please check your connection and try again.',
  VALIDATION: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  DATABASE_CONNECTION: 'Failed to connect to database.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Form submitted successfully!',
  DATA_SAVED: 'Data saved successfully!',
  EMAIL_SENT: 'Email sent successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
} as const;
