# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-01-08

### Added
- Interactive grid canvas background with mouse interaction
  - Animated grid pattern with wave effects
  - Mouse-responsive glow and repulsion effects
  - Dynamic connection lines between glowing points
  - Touch support for mobile devices
  - Smooth 60fps animations

### Changed
- Improved mouse scroll functionality for horizontal navigation
  - Fixed scroll issues with proper event handling
  - Implemented section-based scrolling with smooth transitions
  - Added debouncing to prevent rapid scrolling
  - Increased scroll responsiveness (lower threshold)
  
### Fixed
- Fixed CSS overflow conflicts preventing proper scrolling
- Fixed canvas gradient errors with non-finite values
- Added validation for all canvas calculations
- Implemented fallback rendering for edge cases

### Removed
- Removed header component completely
- Removed progress bar from top of page
- Removed all unnecessary page routes (about, contact, portfolio, blog)
- Removed default layout header and footer references
- Removed "Scroll Right" indicator from hero section
- Removed particle animation system (replaced with interactive grid)
- Removed gradient backgrounds from sections (unified with grid background)

### Technical Improvements
- Simplified app.vue to use NuxtPage directly without layout wrapper
- Optimized horizontal layout for single-page experience
- Cleaned up unused CSS animations and styles
- Improved z-index layering for proper component stacking