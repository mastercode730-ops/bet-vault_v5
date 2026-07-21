import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import { waLink } from '@/lib/whatsapp';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bet Vault`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsappUrl = waLink(`Hey Bet Vault, I just read "${post.title}" — can I get more info?`);

  return (
    <main>
      <Navbar />

      <article className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="wrap max-w-3xl">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 font-medium text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to the blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="chip-gold text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide">
              {post.icon} {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="display text-white mb-8" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', lineHeight: 0.98 }}>
            {post.title.toUpperCase()}
          </h1>

          <div className="relative w-full rounded-2xl overflow-hidden mb-10 bento" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="flex flex-col gap-6">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="display text-white mb-2 tracking-wide" style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)' }}>
                    {section.heading.toUpperCase()}
                  </h2>
                )}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 skew-band rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-4 border border-yellow-600/25">
            <h3 className="display text-white text-2xl sm:text-3xl">ALRIGHT, ENOUGH READING.</h3>
            <p className="text-gray-400 text-sm max-w-md relative z-10">
              If any of that was useful, your ID is one WhatsApp message away.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-full font-bold text-sm"
            >
              Message Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-14">
              <h3 className="display text-white mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)' }}>
                A FEW OTHER THINGS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="bento rounded-xl p-4 flex flex-col gap-2"
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-white font-semibold text-sm leading-snug">{p.title}</span>
                    <span className="text-yellow-400 text-xs font-bold">READ IT →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
