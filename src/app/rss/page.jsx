export default function RSSPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">FondPeace News RSS Feeds</h1>

      <p className="mb-4">
        FondPeace News provides RSS feeds for Apple technology updates,
        aggregated from trusted third-party publishers.
      </p>

      <ul className="list-disc pl-5">
        <li>
          <a href="/feed.xml" className="text-blue-600">
            Main Apple News Feed
          </a>
        </li>
      </ul>

      <p className="text-sm text-gray-600 mt-4">
        RSS feeds are provided for informational purposes only.
        All content belongs to its respective publishers.
      </p>
    </main>
  );
}
