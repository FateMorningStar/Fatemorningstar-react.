import React from 'react';
const navItems = [
  ['Overview', '◉'],
  ['Repositories', '▤'],
  ['Projects', '▦'],
  ['Packages', '⬡'],
  ['Stars', '☆'],
];

export default function Navbar({ active, onTabChange }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="github-mark" href="https://github.com">⌘</a>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            ☰ <span>Menu</span>
          </button>
          <div className="topbar-crumb">
            <strong>FateMorningStar</strong>
          </div>
          <div className="topbar-spacer" />
          <a className="topbar-link" href="https://github.com/notifications">
            Notifications
          </a>
          <img
            className="mini-avatar"
            src={`${import.meta.env.BASE_URL}avatar.jpg`}
            alt="Profile"
          />
        </div>
      </header>

      <nav className={`profile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="profile-nav-inner">
          {navItems.map(([label, icon]) => (
            <button
              key={label}
              className={`profile-nav-item ${active === label ? 'active' : ''}`}
              onClick={() => {
                onTabChange(label);
                setMenuOpen(false);
              }}
            >
              <span className="nav-icon">{icon}</span>
              {label}
              {label === 'Repositories' && (
                <span className="nav-count">4</span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
