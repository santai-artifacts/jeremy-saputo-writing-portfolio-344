import Hero from './components/Hero';
import WritingList from './components/WritingList';
import About from './components/About';
import Footer from './components/Footer';
import './styles/app.css';

export default function App() {
  return (
    <div className="app">
      <Hero />
      <WritingList />
      <About />
      <Footer />
    </div>
  );
}
