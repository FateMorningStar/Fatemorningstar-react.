
export default function RepositoryCard({ repository }) {
  return (
    <article className="repo-card">
      <div className="repo-topline">
        {repository.url ? (
          <a
            className="repo-name"
            href={repository.url}
            target="_blank"
            rel="noreferrer"
          >
            {repository.name}
          </a>
        ) : (
          <span className="repo-name">
            {repository.name}
          </span>
        )}

        <span className="visibility">
          {repository.visibility}
        </span>
      </div>

      <p className="repo-description">
        {repository.description}
      </p>

      <div className="repo-meta">
        <span className="language">
          <i style={{ backgroundColor: repository.color }} />
          {repository.language}
        </span>

        <span>{repository.updated}</span>
      </div>
    </article>
  );
}
