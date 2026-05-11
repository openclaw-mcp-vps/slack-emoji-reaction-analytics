export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack Analytics for Remote Teams
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track Team Sentiment Through{" "}
          <span className="text-[#58a6ff]">Emoji Reactions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          EmojiPulse connects to your Slack workspace and turns emoji reaction data into actionable morale and engagement insights — no manual surveys needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to connect Slack.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["📊", "Channel Heatmaps", "See which channels radiate positivity or frustration at a glance."],
            ["📈", "Trend Timelines", "Track morale shifts week-over-week with emoji trend charts."],
            ["🔔", "Morale Alerts", "Get notified when sentiment drops below your custom threshold."]
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title}</div>
              <div className="text-xs text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Slack channels",
              "Real-time emoji reaction tracking",
              "Weekly morale digest emails",
              "Custom sentiment thresholds",
              "CSV data export",
              "Priority support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does EmojiPulse connect to Slack?",
              "You authorize EmojiPulse via Slack OAuth. We request read-only access to reaction events — we never read message content."
            ],
            [
              "What data is collected?",
              "Only emoji reaction metadata: which emoji was used, in which channel, and at what time. No message text is ever stored."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing portal at any time. Your data is retained for 30 days after cancellation."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} EmojiPulse. Built for remote engineering teams.
      </footer>
    </main>
  );
}
