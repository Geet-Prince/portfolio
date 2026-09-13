import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import Section from "../../src/components/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Blog | Prince Raj",
  description:
    "Technical articles on backend engineering, scalable systems, React, and software architecture by Prince Raj.",
  alternates: {
    canonical: "https://geetprince.me/blog",
  },
  openGraph: {
    title: "Engineering Blog | Prince Raj",
    description:
      "Technical articles on backend engineering, scalable systems, React, and software architecture by Prince Raj.",
    url: "https://geetprince.me/blog",
    siteName: "Prince Raj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Prince Raj",
    description:
      "Technical articles on backend engineering, scalable systems, React, and software architecture by Prince Raj.",
  },
};

const posts = [
  {
    slug: "scaling-verse-music-sync",
    title: "How I scaled Verse Music Sync using Firebase",
    date: "July 24, 2026",
    excerpt: "Deep dive into the architecture behind synchronized real-time playback across multiple devices using Firebase Realtime Database and Media3.",
    readTime: "8 min read"
  },
  {
    slug: "building-competitive-programming-analytics",
    title: "Building a Live Leaderboard for Competitive Programming",
    date: "July 10, 2026",
    excerpt: "Why I chose Firestore over PostgreSQL for real-time analytics in Progex, and the architectural trade-offs involved.",
    readTime: "6 min read"
  },
  {
    slug: "zero-cost-event-management",
    title: "Zero-Cost Event Management Backend with Google Sheets",
    date: "June 15, 2026",
    excerpt: "A practical guide to leveraging Google Sheets API and OAuth2 as a free, non-technical-friendly database for college fests.",
    readTime: "5 min read"
  }
];

export default function BlogIndex() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <Section id="blog" className="pt-32 pb-24 w-full">
          <div className="space-y-4 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-(--fg)">
              Engineering Blog<span className="text-(--accent)">.</span>
            </h1>
            <p className="text-(--muted) text-lg max-w-xl">
              Technical deep dives, architectural decisions, and lessons learned from building scalable software.
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-8 rounded-3xl bg-(--card) border border-(--border-subtle) hover:border-(--accent) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-(--card-fg) group-hover:text-(--accent) transition-colors">{post.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-(--muted) font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="text-(--muted) leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-(--accent)">
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
