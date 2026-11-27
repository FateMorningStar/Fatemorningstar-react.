import { useMemo, useState } from 'react';
import RepositoryCard from './RepositoryCard';

export default function RepositoryList({ repositories }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => repositories.filter((repo) =>
    `${repo.name} ${repo.description} ${repo.language}`.toLowerCase().includes(query.toLowerCase())
  ), [repositories, query]);

  return (
    <section className="repositories-section">
      <div className="repo-toolbar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a repository…" aria-label="Find a repository" />
        <button className="filter-button" type="button">Type ▾</button>
        <button className="filter-button" type="button">Language ▾</button>
        <button className="new-button" type="button" onClick={() => window.open('https://github.com/new', '_blank', 'noopener,noreferrer')}>＋ New</button>
      </div>
      <div className="repo-count">{filtered.length} repositories</div>
      <div className="repo-list">
        {filtered.map((repository) => <RepositoryCard key={repository.name} repository={repository} />)}
        {filtered.length === 0 && <p className="empty-state">No repositories match “{query}”.</p>}
      </div>
    </section>
  );
}
