import '../styles/writing-list.css';

const writings = [
  {
    id: 1,
    title: 'The Case for Silence in Design',
    publication: 'Design Observer',
    date: '2024',
    category: 'Essay',
    excerpt: 'Exploring how negative space has become undervalued in contemporary design practice.',
  },
  {
    id: 2,
    title: 'Margins and Mindfulness',
    publication: 'Eye Magazine',
    date: '2023',
    category: 'Feature',
    excerpt: 'A deep dive into editorial design practices that prioritize reader experience.',
  },
  {
    id: 3,
    title: 'Typography at Scale',
    publication: 'A List Apart',
    date: '2023',
    category: 'Technical',
    excerpt: 'Building scalable type systems for multi-platform design.',
  },
  {
    id: 4,
    title: 'The Brutalism Revival',
    publication: 'Depth',
    date: '2024',
    category: 'Criticism',
    excerpt: 'Why digital brutalism matters in an age of algorithmic design.',
  },
  {
    id: 5,
    title: 'On Legibility and Intent',
    publication: 'Print Magazine',
    date: '2023',
    category: 'Essay',
    excerpt: 'How designers navigate the tension between readability and experimentation.',
  },
  {
    id: 6,
    title: 'Working with Constraints',
    publication: 'Designer Hangout',
    date: '2024',
    category: 'Interview',
    excerpt: 'A conversation about creative limitation and its unexpected freedoms.',
  },
];

export default function WritingList() {
  return (
    <section className="writing-list">
      <div className="writing-list-header">
        <h2 className="writing-list-title">Selected Writings</h2>
      </div>

      <div className="writing-items">
        {writings.map((item) => (
          <article key={item.id} className="writing-item">
            <div className="writing-number">{String(item.id).padStart(2, '0')}</div>
            <div className="writing-content">
              <h3 className="writing-title">
                <a href="#" title={item.title}>
                  {item.title}
                </a>
              </h3>
              <p className="writing-excerpt">{item.excerpt}</p>
              <div className="writing-meta">
                <span className="meta">{item.publication}</span>
                <span className="meta-divider">—</span>
                <span className="meta">{item.date}</span>
                <span className="meta-divider">—</span>
                <span className="meta">{item.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
