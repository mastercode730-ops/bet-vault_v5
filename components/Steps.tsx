import { waLink } from '@/lib/whatsapp';

const steps = [
  { n: '01', title: 'SAY HI', desc: 'Tap the button, send a message. That\'s the whole first step.' },
  { n: '02', title: 'SHARE THE BASICS', desc: 'Name, platform, rough deposit amount. Nothing you wouldn\'t tell a shopkeeper.' },
  { n: '03', title: 'GET YOUR ID', desc: 'Lands right in the same chat. No separate app or email.' },
  { n: '04', title: 'DEPOSIT & PLAY', desc: 'UPI, net banking, or a wallet — pick one and you\'re in.' },
];

export default function Steps() {
  const whatsappUrl = waLink("Hey Bet Vault, let's get started — walk me through it.");

  return (
    <section id="steps" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-lg mb-12 sm:mb-16">
          <span className="chip-emerald inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
            How it goes
          </span>
          <h2 className="display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 0.95 }}>
            FOUR STEPS.<br />WE COUNTED.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-6 h-px stepper-line" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full stepper-dot flex items-center justify-center relative z-10 bg-[#08090B]">
                  <span className="display text-lg text-yellow-400">{s.n}</span>
                </div>
                <div>
                  <h3 className="display text-white text-xl mb-1.5 tracking-wide">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-7 py-4 rounded-full text-sm sm:text-base"
          >
            Start Step One
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
