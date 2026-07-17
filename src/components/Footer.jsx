import LiveClock from './LiveClock';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-title">Contact</div>
          <a href="mailto:hello@example.com" className="footer-link">hello@example.com</a>
        </div>
        <div className="footer-section">
          <div className="footer-title">Links</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">Are.na</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section footer-time">
          <div className="footer-title">Time</div>
          <LiveClock />
        </div>
      </div>
      <div className="footer-bottom">
        <span className="mono">© 2024 Writing Portfolio</span>
      </div>
    </footer>
  );
}
