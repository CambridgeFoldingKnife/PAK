/**
 * 生成 sitemap.xml（写入 dist/）。
 * 在 `vite build` 之后运行（package.json postbuild）。
 */
import { writeFileSync } from "fs"
import { resolve } from "path"

const SITE_URL = "https://icak.com.cn"

const ROUTES = [
  "/",
  "/course",
  "/pak-union",
  "/faq",
  "/contact",
  "/research",
  "/student-scenes",
  "/course-center",
  "/knowledge",
]

const today = new Date().toISOString().split("T")[0]

const urls = ROUTES.map(
  (route) =>
    `  <url>\n` +
    `    <loc>${SITE_URL}${route}</loc>\n` +
    `    <lastmod>${today}</lastmod>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n` +
    `  </url>`
).join("\n")

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`

const out = resolve(process.cwd(), "dist", "sitemap.xml")
writeFileSync(out, xml, "utf-8")
console.log(`sitemap.xml 已生成：${out}（${ROUTES.length} 条路由）`)
