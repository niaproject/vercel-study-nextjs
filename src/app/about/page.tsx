import Link from "next/link";
import "./page.css";

/**
 * About ページ
 */
export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <main className="about-content">
        <h1 className="about-title">
          📖 About
        </h1>
        <p className="about-description">
          これは About ページです。
          <br />
          App Router では <code className="about-code">app/about/page.tsx</code> を作るだけでルートが追加されます。
        </p>
        <Link href="/" className="about-back-link">
          ← トップへ戻る
        </Link>
      </main>
    </div>
  );
}
