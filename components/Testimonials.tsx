const voices = [
  {
    name: 'Rohit M.',
    location: 'Mumbai',
    text: "Switched over after a bad run with another platform. My ID took maybe eight minutes, which felt suspiciously fast until I realized that's just how it works here.",
    tag: 'Cricket',
  },
  {
    name: 'Arjun K.',
    location: 'Chennai',
    text: "One withdrawal took a bit longer than usual during IPL — but they messaged ME to explain why before I even asked. That mattered more than if it had gone perfectly.",
    tag: 'IPL',
  },
  {
    name: 'Priya S.',
    location: 'Hyderabad',
    text: "Was nervous about the whole thing honestly. Someone walked me through it like a normal question, not like I was new to something they'd judge me for.",
    tag: 'Football',
  },
  {
    name: 'Vikram D.',
    location: 'Bangalore',
    text: "Three months in and I still just message them for everything — deposits, questions, whatever. Never felt the need to look anywhere else.",
    tag: 'Casino',
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-lg mb-10 sm:mb-14">
          <span className="chip-emerald inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
            Straight from the chat
          </span>
          <h2 className="display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 0.95 }}>
            WHAT PEOPLE<br /><span className="emerald-text">ACTUALLY SAY.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-md">
            Real conversations, lightly trimmed. One of these mentions something going slightly
            wrong — because pretending nothing ever does would be the stranger claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {voices.map((v, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 display text-sm"
                style={{ background: 'linear-gradient(135deg,#16E37D,#0B9C55)', color: '#04170D' }}
              >
                {v.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-white font-semibold text-sm">{v.name}</span>
                  <span className="text-gray-500 text-xs">· {v.location}</span>
                </div>
                <div className="chat-bubble p-4">
                  <p className="text-gray-200 text-sm leading-relaxed">{v.text}</p>
                </div>
                <span className="inline-block mt-2 chip-emerald text-xs px-2.5 py-0.5 rounded-full">{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
