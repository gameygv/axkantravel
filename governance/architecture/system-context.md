---
type: architecture_context
project: "axkantravel"
status: active
tech_stack:
  framework: "Next.js 15 (App Router, SSG)"
  language: "TypeScript"
  styling: "Tailwind CSS"
  hosting: "Vercel"
  dns: "Cloudflare"
  domain: "axkantravel.dockerapps.top"
  images: "fal.ai (generación), next/image (optimización)"
external_dependencies:
  - "Vercel (hosting + edge)"
  - "Cloudflare (DNS)"
  - "Google Maps Embed API"
  - "WhatsApp Business (deep link)"
  - "fal.ai (generación de imágenes)"
users:
  - "Viajeros interesados en Chiapas"
  - "Parejas, familias, grupos"
  - "Equipo de ventas Disfruta Chiapas"
governed_by:
  - "governance/prd.md"
  - "governance/guardrails.md"
---

# System Context: axkantravel

> C4 Level 1 — Sitio web estático de Axkan Travel / Disfruta Chiapas

## Overview

Sitio web estático (SSG) construido con Next.js 15 y desplegado en Vercel. Sirve como vitrina digital de los paquetes turísticos de Disfruta Chiapas. Los visitantes navegan paquetes, leen testimonios y FAQ, y envían formularios de cotización que llegan por email al equipo de ventas. No hay base de datos ni autenticación — es un sitio informativo con captura de leads.

## Context Diagram

```
┌──────────────┐       ┌────────────────────┐       ┌──────────────┐
│  Visitantes  │──────►│   axkantravel      │◄──────│  Cloudflare  │
│  (browsers)  │       │   (Vercel SSG)     │       │  (DNS + CDN) │
└──────────────┘       └────────┬───────────┘       └──────────────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
             ┌──────────┐ ┌──────────┐ ┌──────────┐
             │ WhatsApp  │ │ Google   │ │  Email   │
             │ Business  │ │ Maps     │ │ (ventas) │
             └──────────┘ └──────────┘ └──────────┘
```

## External Interfaces

| System | Direction | Protocol | Description |
|--------|-----------|----------|-------------|
| Vercel | outbound | HTTPS | Hosting, edge network, SSL |
| Cloudflare | outbound | DNS | Resolución axkantravel.dockerapps.top → Vercel |
| WhatsApp | outbound | Deep link | Botón flotante wa.me/5219671335224 |
| Google Maps | inbound | Embed iframe | Mapa de ubicación en página de contacto |
| Email (ventas@disfrutachiapas.com) | outbound | SMTP/Form action | Destino de formularios de cotización |
| Instagram / Facebook / YouTube / TikTok | outbound | HTTPS links | Enlaces a redes sociales |
