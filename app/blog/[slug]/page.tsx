import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import Section from "../../../src/components/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock database function for dynamic params in Next.js
function getPost(slug: string) {
  const posts: Record<string, any> = {
    "scaling-verse-music-sync": {
      title: "How I scaled Verse Music Sync using Firebase",
      date: "July 24, 2026",
      readTime: "8 min read",
      content: `
        <h2>The Challenge of Real-Time Sync</h2>
        <p>Building Verse required seamless synchronization across multiple devices. When one user pauses a track, the other listeners in the jam session need to experience that pause within milliseconds. Standard REST polling was too slow and resource-heavy.</p>
        
        <h2>Why Firebase Realtime Database?</h2>
        <p>I chose Firebase Realtime Database over Firestore for this specific feature because of its low-latency, WebSockets-based architecture. While Firestore is great for user data (and what I used in Progex), Realtime Database excels at syncing small, ephemeral state changes rapidly.</p>
        
        <h2>Implementation with Media3</h2>
        <p>Integrating this with Android's Media3 ExoPlayer required careful state management. We had to account for network latency by syncing timestamps relative to a global NTP clock rather than local device time. This ensured that even if a packet was delayed by 50ms, the audio playback remained perfectly in phase.</p>
      `
    }
  };
  return posts[slug] || null;
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Prince Raj Blog`,
    description: post.content.substring(0, 150).replace(/<[^>]+>/g, ''),
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <Section id="blog-post" className="pt-32 pb-24 w-full max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-(--muted) hover:text-(--accent) transition-colors mb-12 font-medium">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-(--fg) mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-(--muted) font-medium border-b border-(--border-subtle) pb-8">
              <span>Prince Raj</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <article 
            className="prose prose-invert prose-lg max-w-none text-(--muted) prose-headings:text-(--fg) prose-a:text-(--accent)"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
