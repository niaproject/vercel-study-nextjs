import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Google Fonts から Geist Sans を読み込み、CSS変数 `--font-geist-sans` として定義
 *
 * @see {@link https://vercel.com/font | Vercel Font}
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Google Fonts から Geist Mono を読み込み、CSS変数 `--font-geist-mono` として定義
 *
 * @see {@link https://vercel.com/font | Vercel Font}
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ページ共通のメタ情報
 *
 * @remarks
 * `<title>` と `<meta name="description">` を設定する。
 * App Router では layout / page から `metadata` を export することで自動的に `<head>` に反映される。
 */
export const metadata: Metadata = {
  title: "Hello Vercel",
  description: "Next.js + Vercel サンプルアプリ",
};

/**
 * ルートレイアウト — 全ページ共通の `<html>` / `<body>` を定義する
 *
 * @remarks
 * App Router では `app/layout.tsx` に必ず1つ必要なコンポーネント。
 * `children` にはネストされたレイアウトまたはページコンポーネントが渡される。
 *
 * @param props - レイアウトの props
 * @param props.children - 子ページ・レイアウトの React ノード
 * @returns ルート HTML 要素
 *
 * @example
 * ```tsx
 * // 引数の書き方パターン
 * export default function RootLayout(props: Readonly<Props>) {}          // ✅
 * export default function RootLayout({ children }: Readonly<Props>) {}   // ✅ 分割代入
 * ```
 */
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="ja" /* 日本語ページとして設定 */
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
