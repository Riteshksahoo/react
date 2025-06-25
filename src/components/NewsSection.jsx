import React from "react";

const dummyNews = [
  {
    id: 1,
    title: "🌡️ Extreme heat hits US, Greece, and UK",
    link: "https://www.reuters.com",
  },
  {
    id: 2,
    title: "❄️ Polar blast hits Australia",
    link: "https://www.news.com.au",
  },
  {
    id: 3,
    title: "🌏 Asia warming twice as fast as global avg",
    link: "https://timesofindia.indiatimes.com",
  },
  {
    id: 4,
    title: "🔥 Climate trends from Europe’s heatwave",
    link: "https://www.thetimes.co.uk",
  },
];

export default function NewsSection() {
  return (
    <section className="max-w-6xl px-4 mx-auto mt-16">
      <h2 className="mb-6 text-3xl font-bold text-white">📰 Weather Headlines</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {dummyNews.map((news) => (
          <a
            key={news.id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white/10 border border-white/20 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 text-white"
          >
            <p className="font-semibold text-md">{news.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
