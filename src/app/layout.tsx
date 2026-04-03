import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Google Fonts から Geist Sans / Mono を読み込み、CSS変数として定義 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ページ共通のメタ情報（<title> と <meta name="description">） */
export const metadata: Metadata = {
  title: "Hello Vercel",
  description: "Next.js + Vercel サンプルアプリ",
};

/**
 * ルートレイアウト
 * 全ページ共通の <html> / <body> を定義する
 * App Router では必須のコンポーネント
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja" /* 日本語ページとして設定 */
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
