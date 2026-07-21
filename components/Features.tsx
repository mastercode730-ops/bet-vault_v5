const points = [
  {
    title: 'REAL PEOPLE, ACTUAL REPLIES',
    desc: "Message us at 3am about a stuck withdrawal. A real person replies — not a script reading from a template.",
    icon: 'chat',
    big: true,
    tone: 'emerald',
  },
  {
    title: '5-MINUTE SETUP',
    desc: "No form with twenty fields. Just the essentials, then you're in.",
    icon: 'bolt',
  },
  {
    title: 'UPI IN, UPI OUT',
    desc: 'No mystery "processing" that takes three days.',
    icon: 'wallet',
  },
  {
    title: 'NO FINE-PRINT BONUSES',
    desc: 'The welcome bonus terms fit in one message, not a legal document.',
    icon: 'gift',
  },
  {
    title: 'ONE ID, EVERY MARKET',
    desc: 'Cricket, football, casino — same login, every time.',
    icon: 'grid',
  },
  {
    title: 'WE SAY THE QUIET PART',
    desc: "Betting isn't rent money. We'll tell you that straight, every time.",
    icon: 'shield',
    tone: 'gold',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="max-w-lg">
            <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
              Why people stay
            </span>
            <h2 className="display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 0.95 }}>
              NOTHING FANCY.<br />JUST DONE RIGHT.
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            We didn't reinvent betting — we just got tired of platforms making it harder than it needs to be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p, i) => (
            <div
              key={i}
              className={`${p.tone === 'emerald' ? 'bento-emerald' : p.tone === 'gold' ? 'bento-gold' : 'bento'} rounded-2xl p-6 flex flex-col gap-4 ${p.big ? 'lg:col-span-2' : ''}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: p.tone === 'emerald' ? 'rgba(22,227,125,0.14)' : 'rgba(212,175,55,0.14)' }}
              >
                <Icon name={p.icon} color={p.tone === 'emerald' ? '#16E37D' : '#D4AF37'} />
              </div>
              <div>
                <h3 className="display text-white text-lg sm:text-xl mb-1.5 tracking-wide">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name, color }: { name: string; color: string }) {
  const common = { width: 20, height: 20, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' };
  switch (name) {
    case 'chat':
      return <svg {...common}><path d="M4 4h16v12H8l-4 4V4Z" /><path d="M8 9h8M8 12h5" /></svg>;
    case 'bolt':
      return <svg {...common}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>;
    case 'wallet':
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1.4" /></svg>;
    case 'gift':
      return <svg {...common}><rect x="3" y="9" width="18" height="4" /><rect x="5" y="13" width="14" height="8" /><path d="M12 9v12M12 9C10 5 6 5 6 8s3 1 6 1ZM12 9c2-4 6-4 6-1s-3 1-6 1Z" /></svg>;
    case 'grid':
      return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.2" /><rect x="14" y="3" width="7" height="7" rx="1.2" /><rect x="3" y="14" width="7" height="7" rx="1.2" /><rect x="14" y="14" width="7" height="7" rx="1.2" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="M9 12l2 2 4-4" /></svg>;
    default:
      return null;
  }
}
