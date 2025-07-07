import { useEffect, useState } from 'react';

function ListNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);

  return (
    <section>
      <h2>Self-published articles</h2><br />

      {news.length === 0 ? (
        <p>No articles created yet.</p>
      ) : (
        <ul className="news-list">
          {news.map((article) => (
            <li key={article.id} className="news-item">
              <h3>{article.title}</h3>
              <p><strong>Author:</strong> {article.author}</p>
              <p><strong>Category:</strong> {article.category || 'Uncategorized'}</p>
              <p>{article.content}</p>
              <small><em>{new Date(article.date).toLocaleString()}</em></small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListNews;
