import { useRouter } from 'next/router';
import { blogArticles } from '../../data/blogData';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const article = blogArticles.find(post => post.slug === slug);

  if (!article) return <p>Loading...</p>;

  return (
    <main className="blog-post" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>{article.title}</h1>
      <article>
        {article.content.split('\n').map((para, index) => (
          <p key={index} style={{ lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
        ))}
      </article>
    </main>
  );
}
