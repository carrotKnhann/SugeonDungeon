# Deploy dungeon.sugeonarea.com

## DNS

Đã có sẵn (không đổi):

| Loại  | Tên     | Nội dung               |
|-------|---------|------------------------|
| CNAME | dungeon | carrotknhann.github.io |

## Publish

1. Trong monorepo: `cd SugeonDungeon/site && npm run build`
2. Đẩy nội dung `dist/` lên `carrotKnhann/SugeonDungeon` branch `main` (root)
3. Pages: branch `main` → `/` · CNAME `dungeon.sugeonarea.com`
