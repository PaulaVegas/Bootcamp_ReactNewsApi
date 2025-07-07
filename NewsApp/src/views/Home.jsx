import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

function Home() {
  const { articles, loading } = useContext(NewsContext);

  return (
    <section>
      <h1>Top NYT Stories</h1>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="home-news">
          {articles.slice(0, 9).map((article) => (
            <div key={article.url} className="news-preview">
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
