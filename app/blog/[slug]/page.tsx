import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import Section from "../../../src/components/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "https://geetprince.me";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  content: string;
};

const posts: Record<string, Post> = {
  "progex-competitive-analytics": {
    title: "Progex: Competitive Programming Analytics",
    excerpt: "A robust Flask application offering analytics for competitive programmers, deployed via Docker and Render.",
    date: "2026-08-25",
    dateDisplay: "August 25, 2026",
    readTime: "5 min read",
    content: `
      <h2>Analytics for Coders</h2>
      <p>Progex was built to provide competitive programmers with insightful analytics on their performance. Tracking progress and identifying weak spots is crucial for improving coding skills.</p>
      <h2>Flask Application Factory</h2>
      <p>The backend is built using Python and Flask, structured around the Application Factory pattern for better scalability and testing. It keeps the configuration and routing clean and maintainable.</p>
      <h2>Containerized Deployment</h2>
      <p>To ensure consistent environments from development to production, Progex is containerized using Docker. It includes a Procfile and render.yaml, making it ready for seamless deployment on platforms like Render.</p>
    `,
  },
  "building-verse-music-player": {
    title: "Building Verse: A Real-time Jamming Music Player",
    excerpt: "Developing a modern Android music player featuring a classic iPod-style click wheel and real-time synchronized playback.",
    date: "2026-08-20",
    dateDisplay: "August 20, 2026",
    readTime: "7 min read",
    content: `
      <h2>A Nostalgic Yet Modern UI</h2>
      <p>Verse combines the nostalgic feel of a classic iPod click wheel with a modern, translucent glassmorphism design. The click wheel isn't just for show; it's a fully functional rotational navigation interface.</p>
      <h2>Real-time Jam Sessions</h2>
      <p>The standout feature is 'Jam Sessions', allowing users to create or join real-time chat rooms. When one person plays, pauses, or changes a track, it syncs instantly across all devices in the room using Firebase Realtime Database.</p>
      <h2>Technical Implementation</h2>
      <p>Built as a native Android application using Kotlin, Verse utilizes Media3/ExoPlayer and a Foreground Service for uninterrupted media playback, ensuring smooth performance even when the app is minimized or the screen is locked.</p>
    `,
  },
  "comprehensive-sql-journey": {
    title: "My Comprehensive Journey Through SQL",
    excerpt: "Over 40 documented SQL scripts ranging from basic queries to advanced window functions.",
    date: "2026-08-15",
    dateDisplay: "August 15, 2026",
    readTime: "6 min read",
    content: `
      <h2>From SELECT to Complex Joins</h2>
      <p>I documented every step of my SQL learning process. It started with simple SELECT statements and WHERE clauses, then naturally progressed into aggregations using GROUP BY and HAVING.</p>
      <h2>Advanced Querying Techniques</h2>
      <p>The real power of SQL unlocked when I mastered JOINS (Inner, Left, Right, and Self Joins). I then pushed further into Window Functions (OVER) and various types of Subqueries, including Scalar and Correlated Subqueries.</p>
      <h2>Practical Problem Solving</h2>
      <p>The repository contains dozens of practice queries and edge-case explorations, acting as a personal knowledge base for optimizing database queries.</p>
    `,
  },
  "mastering-java-fundamentals": {
    title: "Mastering Java from Scratch",
    excerpt: "A structured journey through Java fundamentals, covering core concepts, build tools, and testing.",
    date: "2026-08-10",
    dateDisplay: "August 10, 2026",
    readTime: "5 min read",
    content: `
      <h2>Building a Strong Foundation</h2>
      <p>My Java journey started with the absolute basics: understanding Data Types, Operators, and OOP Classes. Building a strong conceptual foundation was critical before moving on to advanced frameworks.</p>
      <h2>Modern Build Tools: Maven and Gradle</h2>
      <p>I quickly realized that managing dependencies manually isn't scalable. I spent significant time learning both Maven and Gradle to understand how enterprise Java applications are built and packaged.</p>
      <h2>Database Connectivity and Testing</h2>
      <p>Connecting to databases via JDBC opened up backend possibilities, while learning Unit Testing ensured my code remained robust and bug-free. This repo also includes my preparation materials for TCS interviews.</p>
    `,
  }
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

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
