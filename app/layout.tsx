import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmojiPulse – Slack Emoji Reaction Analytics",
  description: "Track team sentiment through Slack emoji reactions. Analyze emoji usage patterns across channels to gauge team morale and engagement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="93ae4585-a95e-47f6-b08c-8715ffe7793e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
