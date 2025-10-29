/**
 * USAGE EXAMPLES for locationUtils
 * 
 * This file demonstrates how to use the location standardization utilities
 * throughout your portfolio application.
 */

import { standardizeLocation, locationIncludes, getPrimaryCity } from './locationUtils';

// ==================== EXAMPLE 1: Standardizing Locations ====================

// All these variations will be standardized to "Seattle, WA"
console.log(standardizeLocation('Seattle'));           // → "Seattle, WA"
console.log(standardizeLocation('seattle'));           // → "Seattle, WA"
console.log(standardizeLocation('SEATTLE'));           // → "Seattle, WA"
console.log(standardizeLocation('Seattle, WA'));       // → "Seattle, WA"
console.log(standardizeLocation('seattle, wa'));       // → "Seattle, WA"
console.log(standardizeLocation('Sesttle'));           // → "Seattle, WA" (typos caught!)
console.log(standardizeLocation('Seattle, Washington'));// → "Seattle, WA"

// Bellevue examples
console.log(standardizeLocation('Bellevue'));          // → "Bellevue, WA"
console.log(standardizeLocation('bellevue, wa'));      // → "Bellevue, WA"

// Redmond examples
console.log(standardizeLocation('Redmond'));           // → "Redmond, WA"
console.log(standardizeLocation('redmond, washington'));// → "Redmond, WA"

// San Jose examples
console.log(standardizeLocation('San Jose'));          // → "San Jose, CA"
console.log(standardizeLocation('san jose, ca'));      // → "San Jose, CA"

// Remote examples
console.log(standardizeLocation('Remote'));            // → "Remote"
console.log(standardizeLocation('remote'));            // → "Remote"

// ==================== EXAMPLE 2: Using in Work Experience ====================

const workExperience = [
  {
    company: 'Microsoft',
    location: 'redmond',  // Will be standardized
    role: 'Software Engineer'
  },
  {
    company: 'Amazon',
    location: 'Seattle, WA',  // Already standardized
    role: 'Product Manager'
  },
  {
    company: 'Google',
    location: 'san jose',  // Will be standardized
    role: 'UX Designer'
  }
];

// Standardize all locations
const standardizedExperience = workExperience.map(job => ({
  ...job,
  location: standardizeLocation(job.location)
}));

console.log(standardizedExperience);
// Output:
// [
//   { company: 'Microsoft', location: 'Redmond, WA', role: 'Software Engineer' },
//   { company: 'Amazon', location: 'Seattle, WA', role: 'Product Manager' },
//   { company: 'Google', location: 'San Jose, CA', role: 'UX Designer' }
// ]

// ==================== EXAMPLE 3: Using in React Component ====================

/* 
// Example React component
import React from 'react';
import { standardizeLocation } from '../utils/locationUtils';

const WorkExperienceCard = ({ job }) => {
  const standardizedLocation = standardizeLocation(job.location);
  
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p className="location">{standardizedLocation}</p>
    </div>
  );
};

export default WorkExperienceCard;
*/

// ==================== EXAMPLE 4: Checking if Location Contains City ====================

console.log(locationIncludes('Seattle, WA', 'seattle'));      // → true
console.log(locationIncludes('Bellevue, Washington', 'bellevue')); // → true
console.log(locationIncludes('Remote', 'seattle'));           // → false

// ==================== EXAMPLE 5: Getting Primary City ====================

console.log(getPrimaryCity('Seattle, WA'));          // → "Seattle"
console.log(getPrimaryCity('Bellevue, Washington')); // → "Bellevue"
console.log(getPrimaryCity('Remote'));               // → "Remote"

// ==================== EXAMPLE 6: Using with Project Data ====================

/*
// In allProjects.js, you can add location fields:
export const workHistory = [
  {
    company: 'Emerald Advisors',
    location: 'seattle',  // Auto-standardized to "Seattle, WA"
    role: 'Software Developer',
    duration: 'May 2025 – Aug 2025'
  },
  {
    company: 'University of Washington',
    location: 'Seattle, WA',
    role: 'Developer',
    duration: 'Jan 2025 – Present'
  }
].map(job => ({
  ...job,
  location: standardizeLocation(job.location)
}));
*/

export { standardizeLocation, locationIncludes, getPrimaryCity };

