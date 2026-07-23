import React from 'react';

export default function SchemaRenderer() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://geetprince.me/#person",
        "name": "Prince Raj",
        "alternateName": ["geetprince", "geet-prince"],
        "url": "https://geetprince.me/",
        "jobTitle": ["Software Engineer", "Data Scientist", "Backend Engineer"],
        "sameAs": [
          "https://github.com/Geet-Prince/",
          "https://www.linkedin.com/in/geetprince/",
          "https://leetcode.com/u/geet-prince/"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://geetprince.me/#profile",
        "url": "https://geetprince.me/",
        "mainEntity": {
          "@id": "https://geetprince.me/#person"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://geetprince.me/#website",
        "url": "https://geetprince.me/",
        "name": "Prince Raj (geetprince) | Software Engineer",
        "description": "Portfolio of Prince Raj (geetprince), a software engineer specializing in backend systems and scalable architecture.",
        "publisher": {
          "@id": "https://geetprince.me/#person"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://geetprince.me/#progex",
        "name": "Progex",
        "author": { "@id": "https://geetprince.me/#person" },
        "description": "A competitive programming analytics and social platform.",
        "programmingLanguage": ["Flask", "Python"]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://geetprince.me/#academiapro",
        "name": "Academia Pro",
        "author": { "@id": "https://geetprince.me/#person" },
        "description": "A robust college and student management portal.",
        "programmingLanguage": ["Node.js", "Express", "MongoDB", "React"]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://geetprince.me/#eventify",
        "name": "Eventify",
        "author": { "@id": "https://geetprince.me/#person" },
        "description": "A secure event management platform with dynamic QR code generation.",
        "programmingLanguage": ["Flask", "Python", "Pandas"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
