import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-lg mb-10 sm:mb-14">
          <span className="chip-emerald inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
            Things worth reading
          </span>
          <h2 className="display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 0.95 }}>
            WE WRITE THESE<br />OURSELVES, ACTUALLY.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${i % 2 === 0 ? 'bento-gold' : 'bento-emerald'} rounded-2xl overflow-hidden flex flex-col group`}
            >
              <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500">{post.category}</span>
                  <span className="text-gray-600 text-xs">{post.readTime}</span>
                </div>
                <h3 className="display text-white text-lg leading-tight tracking-wide group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-yellow-400 font-bold text-xs pt-1">
                  READ IT
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
