import LiveScoresWidget from '@/components/LiveScoresWidget';

export default function LiveScores() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Live Scores</h1>
      <p className="mb-4">Demo scores from sample data. A live data provider is not connected yet.</p>
      <LiveScoresWidget />
    </section>
  );
}
