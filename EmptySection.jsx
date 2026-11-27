
export default function EmptySection({ title, message }) {
  return (
    <section className="empty-section">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
