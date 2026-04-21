---
type: architecture_design
project: "axkantravel"
status: active
layers:
  - name: presentation
    modules: [pages, components, layouts]
    description: "Next.js App Router pages y componentes React con Tailwind CSS"
  - name: content
    modules: [data, assets, seo]
    description: "Contenido estático (paquetes, FAQ, testimonios) y assets optimizados"
  - name: integration
    modules: [forms, whatsapp, maps, analytics]
    description: "Integraciones externas: formularios, WhatsApp, Google Maps, meta tags"
---

# System Design: axkantravel

> C4 Level 2 — Arquitectura del sitio web estático de Disfruta Chiapas

## Architecture Overview

Sitio web estático generado con Next.js 15 (App Router, SSG). Todo el contenido se pre-renderiza en build time. No hay API routes, base de datos ni estado del servidor. Los formularios se envían a un endpoint serverless (Vercel Function) que reenvía a email. Las imágenes se optimizan con next/image en formatos AVIF/WebP.

## Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| Layout (Header/Footer) | Navegación global, logo, redes sociales, WhatsApp flotante | React + Tailwind |
| Hero Section | Impacto visual inicial con CTA principal | next/image, CSS animations |
| Catálogo de Paquetes | Grid de categorías + páginas de detalle por paquete | Dynamic routes, MDX/JSON data |
| Formularios | Captura de leads: cotización, grupos, temporada | React Hook Form + Vercel Function |
| FAQ Accordion | Preguntas frecuentes expandibles con structured data | React + JSON-LD |
| Blog | Artículos SEO con markdown | MDX o contenido estático |
| Mapa de Contacto | Google Maps embed con ubicación de la agencia | iframe embed |
| SEO Engine | Meta tags, OG images, sitemap, robots.txt | next-seo, next-sitemap |

## Key Decisions

1. **SSG sobre SSR**: El contenido no cambia frecuentemente. SSG da máximo rendimiento y mínimo costo.
2. **Tailwind CSS**: Utility-first para desarrollo rápido sin CSS custom complejo.
3. **Sin CMS**: El contenido se gestiona como archivos estáticos (JSON/MDX). Cuando el cliente necesite editar, se puede agregar un headless CMS después.
4. **Imágenes generadas con fal.ai**: Para destinos y paisajes donde no hay fotografía propia disponible.
5. **Formularios vía Vercel Functions**: Ligeros, sin backend permanente, envían directo a email.
