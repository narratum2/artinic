import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts([
      { title: 'Art Trends 2025', content: 'Explore vivid glows and sustainable designs shaping the art world.' },
      { title: 'Generational Art Legacy', content: 'How Artinic preserves family collections for centuries.' },
      { title: 'AI in Art Curation', content: 'Leveraging AI for personalized art recommendations.' },
    ]);
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog - Artinic</title>
        <meta name="description" content="Insights on art trends, investments, and legacy management." />
        <meta name="keywords" content="art trends, art investment, art legacy, Swiss art consultancy" />
      </Helmet>
      <section className="blog">
        <h2>Blog & Insights</h2>
        {posts.map((post, i) => (
          <article key={i} className="card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <a href="#" aria-label={`Read more about ${post.title}`}>Read More</a>
          </article>
        ))}
      </section>
    </>
  );
};

export default Blog;