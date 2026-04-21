---
type: guardrails
version: "1.0.0"
---

# Guardrails: axkantravel

> Guardrails de código, arquitectura y contenido para el sitio web de Axkan Travel / Disfruta Chiapas

---

## Guardrails Activos

### Code Quality

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| must-code-001 | must | TypeScript estricto en todo el proyecto | `tsc --noEmit` sin errores | RF-01 a RF-10 |
| must-code-002 | must | Lint sin errores (ESLint + Next.js rules) | `next lint` pasa | RF-01 a RF-10 |
| must-code-003 | must | Sin secrets en código fuente | grep por API keys, tokens en CI | Seguridad |

### Performance

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| must-perf-001 | must | Lighthouse Performance > 90 en mobile | Lighthouse CI | RF-01 |
| must-perf-002 | must | Imágenes en formato AVIF/WebP con fallback | Verificar formatos en build | PDF §4 |
| should-perf-003 | should | First Contentful Paint < 1.5s | Lighthouse | RF-01 |
| should-perf-004 | should | Total page weight < 500KB (sin imágenes lazy) | Bundle analyzer | RF-01 |

### SEO

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| must-seo-001 | must | Meta tags (title, description, og:image) en cada página | Verificación en build | RF-08 |
| must-seo-002 | must | Sitemap.xml y robots.txt generados automáticamente | next-sitemap | RF-08 |
| should-seo-003 | should | Structured data (JSON-LD) para organización y FAQ | Schema.org validator | RF-07, RF-08 |

### Seguridad

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| must-sec-001 | must | HTTPS obligatorio (Vercel + Cloudflare) | Verificar redirect 301 | Seguridad |
| must-sec-002 | must | Sanitización de inputs en formularios | Validación client + server | RF-04 |
| must-sec-003 | must | Aviso de privacidad conforme a LFPDPPP | Revisión legal | RF-10 |

### Accesibilidad

| ID | Level | Guardrail | Verification | Derived from |
|----|-------|-----------|--------------|--------------|
| should-a11y-001 | should | Contraste WCAG AA en textos sobre fondos | axe-core | UX |
| should-a11y-002 | should | Alt text en todas las imágenes | Lint rule | UX |
