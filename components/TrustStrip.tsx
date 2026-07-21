const items = [
  'CRICKET', 'FOOTBALL', 'CASINO', 'LIVE ODDS', 'INSTANT PAYOUTS', 'REAL PEOPLE',
  'IPL', 'T20 LEAGUES', 'UPI IN SECONDS', 'NO NONSENSE',
];

export default function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-content display text-yellow-500/90 text-lg sm:text-xl tracking-wider">
        {loop.map((item, i) => (
          <span key={i} className="mx-5 sm:mx-7 inline-flex items-center gap-5 sm:gap-7">
            {item}
            <span className="text-yellow-700 text-sm">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
