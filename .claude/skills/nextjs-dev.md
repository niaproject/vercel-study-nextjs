# Next.js Dev Skill

このプロジェクト (Next.js 16 + React 19 + Tailwind CSS v4) の開発・ビルド・デプロイ操作を行う。

## TRIGGER

ユーザーが以下のいずれかを言ったとき:
- 「開発サーバー起動」「dev 起動」「dev サーバー」「npm run dev」
- 「ビルド」「build」「npm run build」
- 「起動」「サーバー起動」「start」「npm start」
- 「lint」「リント」「eslint」
- 「デプロイ」「deploy」「Vercel にデプロイ」

## ACTIONS

ユーザーの意図に応じて以下を実行する。

### 開発サーバー起動

```bash
npm run dev
```

- ポート: http://localhost:3000
- ホットリロード有効 (Turbopack)

### プロダクションビルド

```bash
npm run build
```

ビルド成功後、必要であれば続けてローカルで動作確認:

```bash
npm start
```

### Lint

```bash
npm run lint
```

### Vercel デプロイ手順

コードを GitHub にプッシュ済みであれば:
1. Vercel (vercel.com/new) でリポジトリをインポート
2. フレームワークは Next.js が自動検出される
3. 設定はデフォルトのまま「Deploy」をクリック

CLI でデプロイする場合:
```bash
npx vercel
```

## PROJECT CONTEXT

- `package.json` の scripts: `dev` / `build` / `start` / `lint`
- Next.js 16 App Router (`src/app/`)
- Tailwind CSS v4 (PostCSS 経由)
- TypeScript strict モード
