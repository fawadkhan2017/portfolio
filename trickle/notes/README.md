# Fiverr Portfolio Website

## Overview
A modern, responsive, single-page portfolio website designed for Fawad (@codinglab707), a Full Stack Laravel Developer on Fiverr. It highlights his Laravel/Livewire services, Figma to Tailwind conversions, past work, client testimonials, and provides an easy way for potential clients to get in contact or hire directly on his Fiverr gig pages.

## Architecture
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Structure**:
  - Navbar: Fixed header with smooth scrolling navigation.
  - Hero: High-impact introduction section.
  - Services: Cards detailing offerings and pricing.
  - Portfolio: Gallery of past projects.
  - Testimonials: Social proof from previous clients.
  - Contact: Form and quick call-to-action block.
  - Footer: Minimalist footer with social links.
  - Admin (`admin.html`): Secure dashboard with a simple login interface (passcode: "admin") to add or remove portfolio projects using Trickle Database.

## Maintenance Notes
- Update `trickle/assets` when introducing new media files.
- Keep `trickle/rules` updated with any newly identified coding or layout constraints.