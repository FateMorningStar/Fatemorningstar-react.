export default function ProfileHeader() {
  return (
    <section className="profile-heading">
      <div className="avatar-wrap">
        <img className="profile-avatar" src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Andrei Vincent P. Padillo profile" />
        <span className="status-emoji" title="Learning and building">☕</span>
      </div>
      <div className="profile-names">
        <h1>Andrei Vincent P. Padillo</h1>
        <p>FateMorningStar</p>
      </div>
      <button className="edit-profile" type="button" onClick={() => window.open('https://github.com/settings/profile', '_blank', 'noopener,noreferrer')}>Edit profile</button>
    </section>
  );
}
