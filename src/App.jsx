
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileSidebar from './components/ProfileSidebar';
import RepositoryList from './components/RepositoryList';
import ContributionGraph from './components/ContributionGraph';

import { repositories } from './data/repositories';

function ProjectsSection() {
  const projects = [
    {
      name: 'Photo Text Reader',
      description:
        'A browser-based OCR application that extracts editable text from images.',
      url: 'https://fatemorningstar.github.io/Photo-Text-Reader-OCR-/',
    },
    
    {
      name: 'RegexGame-DetectiveEdition',
      description:
        'An interactive regular expression game.',
      url: 'https://fatemorningstar.github.io/RegexGame-DetectiveEdition/',
    },
    {
      name: 'Sound-to-Binary-Converter',
      description:
        'A web project for converting sound into binary data.',
      url: 'https://fatemorningstar.github.io/Sound-to-Binary-Converter/',
    {
    name: 'GitHub Profile Recreation',
    description:
      'A responsive GitHub profile interface recreated using React and reusable components.',
    demo: 'https://fatemorningstar.github.io/Fatemorningstar-react./',
    },
  ];

  return (
    <section className="repositories-section">
      <h2>Projects</h2>

      <div className="repo-list">
        {projects.map((project) => (
          <article className="repo-card" key={project.name}>
            <h3>
              {project.url ? (
                <a
                  className="repo-name"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
              ) : (
                <span className="repo-name">{project.name}</span>
              )}
            </h3>

            <p className="repo-description">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="repositories-section">
      <h2>Packages</h2>
      <p>No packages published yet.</p>
    </section>
  );
}

function StarsSection() {
  return (
    <section className="repositories-section">
      <h2>Starred Repositories</h2>
      <p>No starred repositories have been added yet.</p>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="app-shell">
      <Navbar
        active={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="page-container">
        <ProfileHeader />

        <div className="profile-layout">
          <ProfileSidebar />

          <div className="main-column">
            {activeTab === 'Overview' && (
              <>
                <RepositoryList repositories={repositories} />
                <ContributionGraph />
              </>
            )}

            {activeTab === 'Repositories' && (
              <RepositoryList repositories={repositories} />
            )}

            {activeTab === 'Projects' && <ProjectsSection />}

            {activeTab === 'Packages' && <PackagesSection />}

            {activeTab === 'Stars' && <StarsSection />}
          </div>
        </div>
      </main>

      <footer className="footer">
        <span>© 2026 GitHub Profile Recreation</span>
        <span>Built with React components</span>
      </footer>
    </div>
  );
}
