import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import Section from "../../../src/components/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "https://geetprince.me";

// ─── Single source of truth for all blog posts ────────────────────────────────
type Post = {
  title: string;
  excerpt: string;
  date: string;        // ISO 8601 for schema
  dateDisplay: string; // human-readable for UI
  readTime: string;
  content: string;
};

const posts: Record<string, Post> = {
  "scaling-verse-music-sync": {
    title: "How I scaled Verse Music Sync using Firebase",
    excerpt:
      "Deep dive into the architecture behind synchronized real-time playback across multiple devices using Firebase Realtime Database and Media3.",
    date: "2026-07-24",
    dateDisplay: "July 24, 2026",
    readTime: "8 min read",
    content: `
      <h2>The Challenge of Real-Time Sync</h2>
      <p>Building Verse required seamless synchronization across multiple devices. When one user pauses a track, the other listeners in the jam session need to experience that pause within milliseconds. Standard REST polling was too slow and resource-heavy.</p>

      <h2>Why Firebase Realtime Database?</h2>
      <p>I chose Firebase Realtime Database over Firestore for this specific feature because of its low-latency, WebSockets-based architecture. While Firestore is great for user data (and what I used in Progex), Realtime Database excels at syncing small, ephemeral state changes rapidly.</p>

      <h2>Implementation with Media3</h2>
      <p>Integrating this with Android's Media3 ExoPlayer required careful state management. We had to account for network latency by syncing timestamps relative to a global NTP clock rather than local device time. This ensured that even if a packet was delayed by 50ms, the audio playback remained perfectly in phase.</p>
    `,
  },
  "building-competitive-programming-analytics": {
    title: "Building a Live Leaderboard for Competitive Programming",
    excerpt:
      "Why I chose Firestore over PostgreSQL for real-time analytics in Progex, and the architectural trade-offs involved.",
    date: "2026-07-10",
    dateDisplay: "July 10, 2026",
    readTime: "6 min read",
    content: `
      <h2>The Need for Real-Time Rankings</h2>
      <p>Progex needed to display live leaderboard updates as contest submissions came in. Traditional relational databases require complex polling or triggers to push updates — Firestore's onSnapshot listener made this trivial.</p>

      <h2>Why Firestore over PostgreSQL?</h2>
      <p>For Progex's analytics layer, Firestore won on three axes: built-in real-time listeners, horizontal scaling without a DBA, and generous free tier for a student project. The trade-off was loss of JOINs and strong consistency — acceptable for a leaderboard where eventual consistency within 100ms is imperceptible.</p>

      <h2>Architectural Lessons</h2>
      <p>Denormalising the leaderboard document (storing rank, score, and display name together) eliminated read-time fan-out and kept latency under 30ms for 99th percentile reads during peak contest hours. This is a pattern I now apply consistently in any real-time ranked list.</p>
    `,
  },
  "zero-cost-event-management": {
    title: "Zero-Cost Event Management Backend with Google Sheets",
    excerpt:
      "A practical guide to leveraging Google Sheets API and OAuth2 as a free, non-technical-friendly database for college fests.",
    date: "2026-06-15",
    dateDisplay: "June 15, 2026",
    readTime: "5 min read",
    content: `
      <h2>The Problem: No Budget, Real Stakes</h2>
      <p>Eventify had to manage ticket registrations and QR-code check-ins for 1,200+ attendees across two college fests with zero infrastructure budget. A managed database would cost money the organizing committee didn't have.</p>

      <h2>Google Sheets as a Database</h2>
      <p>The Google Sheets API v4 with a service account gives you a fully hosted, zero-cost tabular store with a familiar spreadsheet UI for non-technical coordinators. Write throughput is limited (~60 writes/min per sheet), but batching registrations into groups of 10 kept us well under quota.</p>

      <h2>QR Code Ticketing Flow</h2>
      <p>On registration, the backend generates a signed JWT containing the attendee ID, encodes it as a QR code, and emails it. At check-in, a volunteer scans the QR on a mobile device; the app validates the JWT signature, marks the row as checked-in atomically using Sheets' conditional update, and prevents double-entry. Total infrastructure cost: ₹0.</p>
    `,
  },
};

// ─── generateStaticParams so Next.js pre-renders all slugs at build time ──────
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

// ─── Per-post metadata: unique title, description, OG, Twitter, canonical ─────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found | Prince Raj Blog",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} | Prince Raj Blog`,
    description: post.excerpt,
    authors: [{ name: "Prince Raj", url: BASE_URL }],
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: "Prince Raj",
      type: "article",
      publishedTime: post.date,
      authors: ["Prince Raj"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  // Article JSON-LD — unique per post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${slug}`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Prince Raj",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Prince Raj",
    },
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog`,
      name: "Prince Raj Engineering Blog",
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Article JSON-LD injected in <head> via script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <Section id="blog-post" className="pt-32 pb-24 w-full max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-(--muted) hover:text-(--accent) transition-colors mb-12 font-medium"
          >
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
              <time dateTime={post.date}>{post.dateDisplay}</time>
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
