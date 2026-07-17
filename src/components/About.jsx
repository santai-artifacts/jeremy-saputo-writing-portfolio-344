import '../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h2>About</h2>
        <p>
          I write about design, culture, and the spaces between intention and outcome.
          My work has appeared in <em>Design Observer</em>, <em>Eye Magazine</em>, and <em>Print</em>.
        </p>
        <p>
          I'm interested in typography, editorial systems, and the ways constraint breeds
          creativity. Currently based in New York, working independently and collaborating
          with studios on long-form content and publication design.
        </p>
        <div className="about-meta">
          <span className="serif-italic">Occasionally teaching at SVA &amp; Parsons</span>
        </div>
      </div>
    </section>
  );
}
