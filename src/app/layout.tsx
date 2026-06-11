import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "../utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TextShine.ai",
  description: "AI Support for your writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames("bg-neutral-800", inter.className)}>
        {children}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "20px 12px", marginTop: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 16px", maxWidth: "900px", margin: "0 auto", fontSize: "13px", lineHeight: 1.6 }}>
            <a href="https://7-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>7-0 Game</a>
            <a href="https://17-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>17-0 Game</a>
            <a href="https://23-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>23-0 Game</a>
            <a href="https://27-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>27-0 Game</a>
            <a href="https://38-0-game.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>38-0 Game</a>
            <a href="https://82-0-challenge.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#9aa0a6", textDecoration: "none" }}>82-0 Challenge</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
