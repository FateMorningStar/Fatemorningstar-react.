export default function ProfileSidebar() {
  return (
    <aside className="sidebar">
      <p className="bio">Computer Science student learning to build useful things through code, projects, and experimentation.</p>
      <a className="follow-button" href="https://github.com/FateMorningStar">Follow</a>
      <div className="follower-line"><span>♟ <strong>—</strong> followers</span><span>·</span><span><strong>—</strong> following</span></div>
      <div className="sidebar-details">
        <p><span>▣</span> Tangub City Global College</p>
        <p><span>⌖</span> Tangub City, Philippines</p>
        <p><span>◉</span> <a href="https://github.com/FateMorningStar">github.com/FateMorningStar</a></p>
      </div>
      <div className="highlights-title">Highlights</div>
      <div className="highlight-pill">🎓 Student</div>
    </aside>
  );
}
