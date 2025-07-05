import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

function ListNews() {
  const { articles, loading } = useContext(NewsContext);

  return (
    <section>
      <h2>News List</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul className="news-list">
          {articles.map((article) => (
            <li key={article.url} className="news-item">
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListNews;
