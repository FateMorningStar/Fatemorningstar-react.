GitHub Profile Recreation (React)

A responsive GitHub-profile-inspired web application built using reusable React components.

This project uses React for its frontend and is organized into reusable components such as Navbar, ProfileHeader, ProfileSidebar, and RepositoryCard. It uses HTML and JSX for structuring the interface, CSS for styling, and JavaScript for application logic. Vite is used as the development and build tool.

Live Demo:
https://fatemorningstar.github.io/Fatemorningstar-react./

Run Locally

To run the project on your computer, use the following commands:

npm install
npm run dev

Build for Deployment

To create a production build and preview it locally:

npm run build
npm run preview

Component Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileHeader.jsx
│   ├── ProfileSidebar.jsx
│   ├── RepositoryCard.jsx
│   ├── RepositoryList.jsx
│   └── ContributionGraph.jsx
├── data/
│   └── repositories.js
├── App.jsx
├── main.jsx
└── style.css
