# Hello Vercel

Next.js + Vercel デプロイ学習用のサンプルアプリです。

## 技術スタック

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)

## ローカル開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## ビルド

```bash
npm run build
npm start
```

## ドキュメント生成

[TypeDoc](https://typedoc.org/) で TSDoc コメントから API ドキュメント（HTML）を生成できます。

```bash
npx typedoc --entryPoints src/app/layout.tsx --out docs --skipErrorChecking
```

`docs/index.html` をブラウザで開くと確認できます。

## Vercel へのデプロイ

1. このリポジトリを GitHub にプッシュ
2. [Vercel](https://vercel.com/new) でリポジトリをインポート
3. 設定はデフォルトのまま「Deploy」をクリック

詳細は [Next.js デプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
