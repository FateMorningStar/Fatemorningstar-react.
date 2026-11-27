
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileSidebar from './components/ProfileSidebar';
import RepositoryList from './components/RepositoryList';
import ContributionGraph from './components/ContributionGraph';
import ProjectsSection from './components/ProjectsSection';
import EmptySection from './components/EmptySection';

import { repositories } from './data/repositories';

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

            {activeTab === 'Projects' && (
              <ProjectsSection />
            )}

            {activeTab === 'Packages' && (
              <EmptySection
                title="Packages"
                message="No packages published yet."
              />
            )}

            {activeTab === 'Stars' && (
              <EmptySection
                title="Starred Repositories"
                message="No starred repositories have been added yet."
              />
            )}

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
