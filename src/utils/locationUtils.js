/**
 * Standardizes location names to consistent formats
 * @param {string} location - The location string to standardize
 * @returns {string} - The standardized location
 */
export const standardizeLocation = (location) => {
  if (!location || typeof location !== 'string') {
    return location;
  }

  const normalized = location.trim();
  const lowerCase = normalized.toLowerCase();

  // Seattle variations
  if (lowerCase.includes('seattle')) {
    return 'Seattle, WA';
  }

  // Bellevue variations
  if (lowerCase.includes('bellevue')) {
    return 'Bellevue, WA';
  }

  // Redmond variations
  if (lowerCase.includes('redmond')) {
    return 'Redmond, WA';
  }

  // San Jose variations
  if (lowerCase.includes('san jose')) {
    return 'San Jose, CA';
  }

  // Remote variations
  if (lowerCase.includes('remote')) {
    return 'Remote';
  }

  // Return original if no match
  return normalized;
};

/**
 * Checks if a location contains a specific city name
 * @param {string} location - The location string to check
 * @param {string} city - The city name to search for
 * @returns {boolean} - Whether the location contains the city name
 */
export const locationIncludes = (location, city) => {
  if (!location || !city) return false;
  return location.toLowerCase().includes(city.toLowerCase());
};

/**
 * Gets the primary city from a location string
 * @param {string} location - The location string
 * @returns {string} - The primary city name
 */
export const getPrimaryCity = (location) => {
  const standardized = standardizeLocation(location);
  
  const cityMatch = standardized.match(/^([^,]+)/);
  return cityMatch ? cityMatch[1].trim() : standardized;
};

