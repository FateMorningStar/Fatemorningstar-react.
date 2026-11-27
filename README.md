GitHub Profile Recreation

A responsive web application inspired by the GitHub profile interface, built using React and reusable components.

Overview

This project recreates the visual layout of a GitHub profile page, featuring profile information, repository listings, navigation tabs, and a contribution graph.

The application is organized into reusable React components to maintain a clean, modular, and maintainable codebase.

Live Demo: "View Live Project" (https://fatemorningstar.github.io/Fatemorningstar-react./)

Technologies Used

- React – Frontend library for building the user interface.
- JavaScript – Application logic and functionality.
- HTML / JSX – Structure of the application.
- CSS – Styling and responsive layout.
- Vite – Development server and build tool.
- GitHub Pages – Website hosting and deployment.

Project Structure

Fatemorningstar-react./
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── avatar.jpg
│
├── src/
│   ├── components/
│   │   ├── ContributionGraph.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── ProfileSidebar.jsx
│   │   ├── RepositoryCard.jsx
│   │   └── RepositoryList.jsx
│   │
│   ├── data/
│   │   └── repositories.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js

Getting Started

Follow these steps to run the project locally.

Prerequisites

- Node.js
- npm
- Git

Installation

1. Clone the repository:
   
   git clone https://github.com/FateMorningStar/Fatemorningstar-react./

2. Navigate to the project directory:
   
   cd Fatemorningstar-react.

3. Install the dependencies:
   
   npm install

4. Start the development server:
   
   npm run dev

5. Open the local URL displayed in your terminal.

Build and Preview

Generate a production-ready build:

npm run build

Preview the production build locally:

npm run preview

Components

Component| Description
Navbar| Displays the navigation bar and handles tab selection.
ProfileHeader| Presents the profile header and information.
ProfileSidebar| Displays profile details in the sidebar.
RepositoryCard| Represents an individual repository.
RepositoryList| Organizes and displays repositories.
ContributionGraph| Displays the contribution activity graph.

Project Information

- Project Name: GitHub Profile Recreation
- Framework: React
- Build Tool: Vite
- Language: JavaScript
- Deployment: GitHub Pages
