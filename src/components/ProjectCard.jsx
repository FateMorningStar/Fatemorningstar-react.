
export default function ProjectCard({ title, description, status, link }) {
  return (
    <article className="repo-card">
      <div className="repo-topline">
        <strong className="repo-name">{title}</strong>
        <span className="visibility">{status}</span>
      </div>

      <p className="repo-description">{description}</p>

      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  );
}
