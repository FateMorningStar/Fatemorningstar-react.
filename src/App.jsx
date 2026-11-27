
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileSidebar from './components/ProfileSidebar';
import RepositoryList from './components/RepositoryList';
import ContributionGraph from './components/ContributionGraph';
import { repositories } from './data/repositories';

function ProjectsSection() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="repo-list">
        <article className="repo-card">
          <h3>Photo Text Reader</h3>
          <p className="repo-description">
            A browser-based OCR application that extracts editable text
            from images.
          </p>
        </article>

        <article className="repo-card">
          <h3>Digital Lost & Found</h3>
          <p className="repo-description">
            A project concept for reporting and finding lost items.
          </p>
        </article>

        <article className="repo-card">
          <h3>Student Money Tracker</h3>
          <p className="repo-description">
            An application for recording and organizing student expenses.
          </p>
        </article>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section>
      <h2>Packages</h2>
      <p>No packages published yet.</p>
    </section>
  );
}

function StarsSection() {
  return (
    <section>
      <h2>Starred Repositories</h2>
      <p>No starred repositories have been added to this recreation yet.</p>
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
