import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching news articles:', error));
  }, []);

  return (
    <>
      <Helmet>
        <title>{articles.length > 0 ? articles[0].title : 'News - Valor Career Website'}</title>
        <meta name="description" content={articles.length > 0 ? articles[0].excerpt : "Stay updated with the latest news and announcements from Valor."} />
        <meta property="og:title" content={articles.length > 0 ? articles[0].title : 'News - Valor Career Website'} />
        <meta property="og:description" content={articles.length > 0 ? articles[0].excerpt : "Stay updated with the latest news and announcements from Valor."}/>
        <meta property="og:image" content="URL_TO_NEWS_PAGE_IMAGE"/>
        <link rel="canonical" href="https://jdm297.github.io/valor-career-website/news"/>
      </Helmet>
      
      <main id="content" className="p-8" role="main">
        <div className="page-content">
          <section className="text-center mb-8" role="region" aria-labelledby="news-section">
            <h1 id="news-section" className="text-4xl font-bold mb-4">Latest News</h1>
            <div className="space-y-4">
              {articles.map(article => (
                <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">
                    <a href={`/news/${article.id}`} className="hover:underline">{article.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-2">{new Date(article.date).toLocaleDateString()}</p>
                  <p className="text-gray-800">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default NewsPage;
