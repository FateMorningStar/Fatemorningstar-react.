const levels = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'];
const cells = Array.from({ length: 364 }, (_, index) => {
  // Deterministic decorative contribution pattern; not live GitHub activity data.
  const value = (index * 7 + Math.floor(index / 9) * 3 + 2) % 13;
  return value < 7 ? 0 : value < 9 ? 1 : value < 11 ? 2 : value === 11 ? 3 : 4;
});

export default function ContributionGraph() {
  return (
    <section className="contributions">
      <div className="contributions-heading"><h2>Contribution activity</h2><a href="https://github.com/FateMorningStar">Contribution settings</a></div>
      <div className="contribution-box">
        <div className="graph-topline"><strong>Contribution graph</strong><span>Past year</span></div>
        <div className="month-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
        <div className="graph-layout">
          <div className="weekday-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div>
          <div className="contribution-grid" aria-label="Decorative contribution graph">
            {cells.map((level, index) => <span key={index} className={levels[level]} />)}
          </div>
        </div>
        <div className="graph-legend"><span>Less</span>{levels.map((level) => <i key={level} className={level} />)}<span>More</span></div>
        <p className="graph-note">Illustrative graph for the React recreation — it does not show live contribution data.</p>
      </div>
    </section>
  );
}
