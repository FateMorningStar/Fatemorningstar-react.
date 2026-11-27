import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProfileSidebar from './components/ProfileSidebar';
import RepositoryList from './components/RepositoryList';
import ContributionGraph from './components/ContributionGraph';
import { repositories } from './data/repositories';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <ProfileHeader />
        <div className="profile-layout">
          <ProfileSidebar />
          <div className="main-column">
            <RepositoryList repositories={repositories} />
            <ContributionGraph />
          </div>
        </div>
      </main>
      <footer className="footer"><span>© 2026 GitHub Profile Recreation</span><span>Built with React components</span></footer>
    </div>
  );
}
