# Hello Vercel — アプリケーション仕様書

## 1. 概要

| 項目 | 内容 |
|------|------|
| アプリ名 | Hello Vercel |
| 目的 | Next.js + Vercel デプロイの学習用サンプル |
| バージョン | 0.1.0 |
| 作成日 | 2026-04-04 |

## 2. 技術スタック

| カテゴリ | 技術 | バージョン |
|----------|------|-----------|
| フレームワーク | Next.js (App Router) | 16.2.2 |
| UIライブラリ | React | 19.2.4 |
| CSSフレームワーク | Tailwind CSS | v4 |
| 言語 | TypeScript | 5.x |
| ホスティング | Vercel | — |

## 3. ディレクトリ構成

```
vercel-study-nextjs/
├── doc/                  # ドキュメント
│   └── specification.md  # 本仕様書
├── public/               # 静的ファイル
├── src/
│   └── app/
│       ├── layout.tsx    # ルートレイアウト
│       ├── page.tsx      # トップページ
│       └── globals.css   # グローバルCSS
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## 4. 画面仕様

### 4.1 トップページ (`/`)

| 項目 | 内容 |
|------|------|
| パス | `/` |
| レンダリング | サーバーコンポーネント（静的生成） |
| ファイル | `src/app/page.tsx` |

#### 画面構成

| # | 要素 | 説明 |
|---|------|------|
| 1 | 見出し | 「🚀 Hello, Vercel!」（テキスト、5xl、太字） |
| 2 | 説明文 | アプリの概要とサーバーコンポーネントである旨の説明 |
| 3 | ビルド日時カード | ビルド時の ISO 8601 タイムスタンプを表示するカード |
| 4 | リンクボタン (2つ) | 「Next.js Docs」「Vercel Docs」への外部リンク |

#### ダークモード対応

- `prefers-color-scheme: dark` に応じて自動切替
- 背景: ライト `blue-50 → white` / ダーク `gray-900 → black`
- テキスト・ボーダー・ボタンの配色も切替

### 4.2 レイアウト

| 項目 | 内容 |
|------|------|
| 言語 | `ja`（日本語） |
| フォント | Geist Sans / Geist Mono（Google Fonts） |
| ページタイトル | 「Hello Vercel」 |
| メタディスクリプション | 「Next.js + Vercel サンプルアプリ」 |

## 5. ビルド・デプロイ仕様

### 5.1 npm スクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動 (localhost:3000) |
| `npm run build` | プロダクションビルド |
| `npm start` | プロダクションサーバー起動 |
| `npm run lint` | ESLint 実行 |

### 5.2 デプロイ

- **プラットフォーム**: Vercel
- **方法**: GitHub リポジトリ連携による自動デプロイ
- **ビルド設定**: デフォルト（Vercel が Next.js を自動検出）
- **出力**: 静的生成（Static Generation）

## 6. 非機能要件

| 項目 | 内容 |
|------|------|
| レスポンシブ | Tailwind CSS によるモバイル対応 |
| アクセシビリティ | セマンティック HTML、`lang="ja"` 設定 |
| パフォーマンス | 静的生成により高速表示 |
| セキュリティ | 外部リンクに `rel="noopener noreferrer"` 付与 |
