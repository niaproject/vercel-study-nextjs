import "./page.css";

/**
 * トップページ（サーバーコンポーネント）
 * ビルド時に静的生成され、ビルド日時を表示する
 */
export default function Home() {
  /* ビルド時のタイムスタンプ（日本時間で表示） */
  const deployedAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return (
    <div className="page-wrapper">
      <main className="main-content">
        {/* タイトル */}
        <h1 className="page-title">🚀 Hello, Vercel!</h1>

        {/* 説明文 */}
        <p className="page-description">
          Next.js + Vercel のサンプルアプリです。
          <br />
          このページは
          <span className="font-semibold">サーバーコンポーネント</span>
          で描画されています。
        </p>

        {/* ビルド日時カード */}
        <div className="build-card">
          <p className="build-card-label">ビルド日時</p>
          <p className="build-card-value">{deployedAt}</p>
        </div>

        {/* 外部リンクボタン */}
        <div className="link-group">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Next.js Docs
          </a>
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Vercel Docs
          </a>
        </div>
      </main>
    </div>
  );
}
