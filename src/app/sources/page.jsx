export default function SourcesPage() {
  const sources = [
    "MacRumors",
    "9to5Mac",
    "Cult of Mac",
    "Macworld"
  ];

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">News Sources</h1>
      <ul className="list-disc pl-5">
        {sources.map(src => <li key={src}>{src}</li>)}
      </ul>
    </main>
  );
}
