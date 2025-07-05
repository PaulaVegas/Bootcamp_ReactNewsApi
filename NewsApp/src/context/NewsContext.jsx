import { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNYT = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNYT();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, loading }}>
      {children}
    </NewsContext.Provider>
  );
}
