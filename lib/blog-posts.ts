export type BlogSection = {
  heading?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'pitch-report-cheat-sheet',
    category: 'Cricket',
    icon: '🏏',
    title: 'The pitch report cheat sheet',
    excerpt:
      'No magic formula — just the handful of things our sharpest members check before an IPL bet, in the order they check them.',
    image: '/blog/cricket.svg',
    readTime: '6 min read',
    sections: [
      {
        body: "Every season someone asks for \"the system.\" There isn't one. But there's a rough checklist a lot of our regulars run through before backing an IPL match, and it's simple enough to write down in five minutes.",
      },
      {
        heading: 'Toss before team sheet',
        body: "Check the toss decision before you look at who's playing. A captain choosing to bowl first at a dew-heavy ground is telling you something. A captain batting first on a cracked, worn pitch is telling you something else entirely.",
      },
      {
        heading: 'Powerplay numbers over season averages',
        body: "A team's overall run rate hides a lot. Some sides explode in the first six overs and fade; others build and accelerate late. Powerplay-specific stats tell you more about how a match opens up than any season-long number.",
      },
      {
        heading: 'Match-ups beat form',
        body: "A team's best batter can look very ordinary against the right bowling variation. Head-to-head records between specific players are often more predictive than either team's overall form.",
      },
      {
        heading: 'Fix your bet size before the season starts',
        body: "Pick a number you're comfortable with and stay there, win or lose. Increasing bets to chase a bad week is the fastest way to turn a good season sour.",
      },
      {
        heading: 'Live odds reward patience',
        body: "Pre-match prices already account for everything public. They can't account for a pitch playing flatter than expected, or an opening over that shows a bowler isn't quite right. Wait a few overs before going live.",
      },
      {
        body: "None of this guarantees a win — cricket has a habit of humbling anyone who thinks they've cracked it. But a process beats a hunch, and if you need your ID sorted before the next toss, we're one message away.",
      },
    ],
  },
  {
    slug: 'five-minute-id',
    category: 'Guides',
    icon: '⚡',
    title: 'The five-minute ID, timed',
    excerpt:
      "We actually time ourselves on this. Here's exactly what happens between your first message and your first bet.",
    image: '/blog/id-setup.svg',
    readTime: '4 min read',
    sections: [
      {
        body: '"How long does this actually take?" is the question we get asked most, so here\'s the entire process, laid out step by step, no rounding up.',
      },
      {
        heading: 'You say hi',
        body: "Tap the WhatsApp button and send whatever feels natural — \"hi\" works fine. No form behind it, you're talking to a person from message one.",
      },
      {
        heading: 'We ask a few normal things',
        body: "Name, which platform, roughly how much you're planning to deposit. That's it. We never ask for banking passwords or OTPs in chat — if someone does, it isn't us.",
      },
      {
        heading: 'Your login shows up in the same chat',
        body: 'Within minutes you get an ID and password, right there in WhatsApp. One login covers cricket, football, casino, and everything else on the platform.',
      },
      {
        heading: 'Deposit, then play',
        body: "UPI, net banking, or a wallet — whichever you prefer. Funds usually land almost instantly, so there's no gap between signing up and placing your first bet.",
      },
      {
        body: "That's the whole process. \"Five minutes\" sounds like a marketing line until you actually time it.",
      },
    ],
  },
  {
    slug: 'the-withdrawal-truth',
    category: 'Payments',
    icon: '💰',
    title: 'The withdrawal truth',
    excerpt:
      'Slow withdrawals are the single biggest complaint about betting platforms in general. Here is what actually causes the delay — and how to dodge it.',
    image: '/blog/payments.svg',
    readTime: '5 min read',
    sections: [
      {
        body: "If you've used another platform before, there's a decent chance a withdrawal has sat there doing nothing. Here's what's actually happening behind the scenes, and why ours tends not to.",
      },
      {
        heading: 'What happens when you hit withdraw',
        body: 'Your request gets checked against your account details, then sent out through whichever method you used to deposit. Most clear within minutes; a packed match day might push that to a couple of hours.',
      },
      {
        heading: 'What we actually support',
        body: "UPI, net banking, and the major wallets. UPI is consistently fastest — rarely more than fifteen minutes once approved.",
      },
      {
        heading: 'What causes delays',
        body: "Almost every delay we've investigated comes down to a mismatched account detail, or a request landing right when everyone cashes out after a big match. Double-check your details first — it solves most of it.",
      },
      {
        heading: 'On security',
        body: "Every transaction runs through standard bank-level encryption. We don't store payment credentials in plain text, and we can check a withdrawal's status live, not \"within 24-48 hours.\"",
      },
      {
        body: "If a withdrawal ever feels slow, don't just wait — message us. A person looks at it immediately, not a ticket queue.",
      },
    ],
  },
  {
    slug: 'football-markets-decoded',
    category: 'Football',
    icon: '⚽',
    title: 'Football markets, decoded',
    excerpt:
      'Match winner, over/under, both teams to score — the handful of markets worth knowing before your first football bet.',
    image: '/blog/football.svg',
    readTime: '5 min read',
    sections: [
      {
        body: "Football markets look intimidating at first, mostly because of the jargon. Here's the plain-English version.",
      },
      {
        heading: 'Match winner (1X2)',
        body: 'Home win, draw, or away win. The simplest bet there is, and the right place to start before anything more complex.',
      },
      {
        heading: 'Over/under goals',
        body: "Not about who wins — about total goals scored. A common line is 2.5, and you're betting whether the combined score lands above or below it.",
      },
      {
        heading: 'Both teams to score',
        body: 'A yes or no on whether both sides find the net at some point, regardless of the final result.',
      },
      {
        heading: 'Asian handicap',
        body: 'Gives a virtual head start (or deficit) to one side, evening things out when there\'s a clear favourite. Often better value than a plain match-winner bet.',
      },
      {
        heading: 'Correct score and accumulators',
        body: 'Bigger payouts for bigger risk — every leg of an accumulator needs to land, so the odds stack up fast.',
      },
      {
        body: 'Start with match winner and over/under while you build a feel for the game, then branch out. All of it is live the moment your ID is active.',
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
