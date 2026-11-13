# Dungeon Desk

A React single-page application that provides quick reference for Dungeons & Dragons 5th Edition monsters, spells, and equipment using the official SRD data.

**Live Demo:** _[add your Vercel URL here after deployment]_

## Features

- Browse official SRD **Monsters**, **Spells**, and **Equipment**
- Dynamic detail pages for each item
- Responsive design (works on mobile and desktop)
- Favorites system using React Context + localStorage
- Loading and error states for API requests
- Clean component architecture

## Tech Stack

- React 18 + Vite
- React Router v6
- React Context API
- CSS Modules
- Vitest + React Testing Library
- Deployed on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

bash
git clone https://github.com/TheKillerMockingbird/Dungeon-Desk-MVP.git
cd Dungeon-Desk-MVP
npm install

# Run locally
Bash
npm run dev
Run tests
Bash
npm run test:run

# API
This project uses the free [D&D 5e SRD API](https://www.dnd5eapi.co/):

Base URL: https://www.dnd5eapi.co/api
No API key required
Design Patterns Used
React Context + Custom Hook (useFavorites) for global state
Clear separation between UI components, pages, and API services
Container/presentational style where appropriate

## Known Limitations (MVP)
 Favorites can be toggled but there is not yet a dedicated Favorites page
 No user authentication
 No search/filtering yet

## Future Plans
 Full Favorites page
 Campaign notes
 Search and filtering
 User accounts (later sprint)


Author
Judah Olson