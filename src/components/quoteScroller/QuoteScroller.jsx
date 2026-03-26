import { useState, useEffect } from 'react';
import blogQuotes from '../../utils/blogQuotes';
import './QuoteScroller.css';

const QuoteScroller = () => {
  const [displayQuotes, setDisplayQuotes] = useState([]);

  useEffect(() => {
    // Shuffle and select random quotes from the blog quotes array
    const shuffled = [...blogQuotes].sort(() => Math.random() - 0.5);
    // Use first 5 quotes (or all if less than 5)
    setDisplayQuotes(shuffled.slice(0, 5));
  }, []);

  // Duplicate quotes for seamless scrolling
  const scrollingQuotes = [...displayQuotes, ...displayQuotes];

  return (
    <div className="quote-scroller">
      <div className="quotes-track">
        {scrollingQuotes.map((quote, index) => (
          <div key={index} className="quote-item">
            <span className="quote-text">✨ {quote} ✨</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteScroller;
