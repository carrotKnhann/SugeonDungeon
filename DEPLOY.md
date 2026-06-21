# Hướng dẫn đưa lên GitHub Pages

Repo local đã commit sẵn tại `d:\server_AI\SugeonDungeon` (branch `main`).

## Bước 1 — Đăng nhập GitHub (một lần)

Mở **PowerShell** và chạy:

```powershell
gh auth login
```

Chọn:
- GitHub.com
- HTTPS
- **Login with a web browser** (hoặc paste token nếu bạn có)

Đăng nhập bằng tài khoản gắn email `khainhan1606.20@gmail.com`.

## Bước 2 — Tạo repo và push

```powershell
cd d:\server_AI\SugeonDungeon

gh repo create SugeonDungeon --public --source=. --remote=origin --push
```

Nếu repo **đã tạo tay** trên github.com rồi, dùng lệnh này thay thế (đổi `TEN-GITHUB` thành username thật):

```powershell
cd d:\server_AI\SugeonDungeon
git remote add origin https://github.com/TEN-GITHUB/SugeonDungeon.git
git push -u origin main
```

## Bước 3 — Bật GitHub Pages

1. Vào repo trên GitHub → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main** · Folder: **/ (root)**
4. **Save**

Sau 1–3 phút, site tại:

**https://TEN-GITHUB.github.io/SugeonDungeon/**

## Cập nhật sau này

```powershell
cd d:\server_AI\SugeonDungeon
git add .
git commit -m "Cap nhat noi dung"
git push
```

GitHub Pages tự deploy lại trong ~1 phút.

## Lưu ý

- Ảnh quái nằm trong `images/` — đã trỏ local trong `index.html`.
- File PNG lớn (~300–430 KB/mob) vẫn OK cho Pages; nếu muốn load nhanh hơn có thể nén sang WebP sau.
- Username GitHub có thể khác email — xem tại https://github.com/settings/profile
