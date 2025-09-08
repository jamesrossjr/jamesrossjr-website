# Complete Implementation Blueprint
## JamesRossJr.com - Strategic Systems Portfolio Platform

---

## Table of Contents
1. [Project Setup & Architecture](#1-project-setup--architecture)
2. [Technical Stack Implementation](#2-technical-stack-implementation)
3. [Database Schema & Models](#3-database-schema--models)
4. [Component Architecture](#4-component-architecture)
5. [Core Features Implementation](#5-core-features-implementation)
6. [Advanced Features & Integrations](#6-advanced-features--integrations)
7. [Performance Optimization](#7-performance-optimization)
8. [Deployment & Infrastructure](#8-deployment--infrastructure)
9. [Testing Strategy](#9-testing-strategy)
10. [Analytics & Monitoring](#10-analytics--monitoring)

---

## 1. Project Setup & Architecture

### 1.1 Initial Project Setup

```bash
# Create Nuxt.js project with TypeScript
npx nuxi@latest init jamesross-portfolio
cd jamesross-portfolio

# Install core dependencies
npm install @nuxt/typescript-build @nuxt/image @nuxtjs/tailwindcss
npm install @pinia/nuxt @vueuse/nuxt @nuxtjs/google-fonts
npm install @nuxtjs/sitemap @nuxtjs/robots nuxt-schema-org

# Install development dependencies
npm install -D @types/node @typescript-eslint/eslint-plugin
npm install -D @typescript-eslint/parser eslint-config-prettier
npm install -D prettier @nuxt/test-utils vitest @vue/test-utils
npm install -D @storybook/vue3 @storybook/addon-essentials

# Install animation and UI libraries
npm install gsap @headlessui/vue @heroicons/vue framer-motion
npm install three @types/three d3 @types/d3

# Install backend and database
npm install @supabase/supabase-js prisma @prisma/client
npm install nodemailer @types/nodemailer joi zod
npm install @sentry/nuxt redis ioredis @types/ioredis
```

### 1.2 Project Structure

```
jamesross-portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy.yml
│       └── lighthouse.yml
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   └── icons/
├── components/
│   ├── Base/
│   ├── Interactive/
│   ├── Portfolio/
│   ├── Blog/
│   ├── Forms/
│   └── Layout/
├── composables/
├── content/
├── layouts/
├── middleware/
├── pages/
├── plugins/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
├── server/
│   └── api/
├── stores/
├── types/
├── utils/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── nuxt.config.ts
├── tailwind.config.js
├── package.json
└── README.md
```

### 1.3 Nuxt Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@sentry/nuxt/module'
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600]
    }
  },

  image: {
    cloudflare: {
      baseURL: 'https://imagedelivery.net/<account-hash>/'
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  nitro: {
    preset: 'vercel-edge',
    storage: {
      redis: {
        driver: 'redis',
        // Redis connection will be configured via environment variables
      }
    }
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    emailApiKey: process.env.EMAIL_API_KEY,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    
    // Public keys (exposed to client-side)
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      siteUrl: process.env.SITE_URL || 'https://jamesrossjr.com',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },

  sitemap: {
    hostname: 'https://jamesrossjr.com',
    gzip: true,
    routes: async () => {
      // Dynamic routes will be added here
      return []
    }
  }
})
```

---

## 2. Technical Stack Implementation

### 2.1 Database Schema (Prisma)

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model CaseStudy {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  subtitle    String?
  description String
  challenge   String
  approach    Json     // Strategic frameworks used
  architecture Json    // System design details
  impact      Json     // Quantifiable metrics
  timeline    String
  technologies String[]
  featured    Boolean  @default(false)
  published   Boolean  @default(false)
  publishedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  testimonials Testimonial[]
  images       CaseStudyImage[]
  tags         CaseStudyTag[]
  
  @@map("case_studies")
}

model Testimonial {
  id           String    @id @default(cuid())
  name         String
  title        String
  company      String
  content      String
  avatar       String?
  featured     Boolean   @default(false)
  caseStudyId  String?
  caseStudy    CaseStudy? @relation(fields: [caseStudyId], references: [id])
  createdAt    DateTime  @default(now())
  
  @@map("testimonials")
}

model CaseStudyImage {
  id           String    @id @default(cuid())
  url          String
  alt          String
  caption      String?
  order        Int       @default(0)
  caseStudyId  String
  caseStudy    CaseStudy @relation(fields: [caseStudyId], references: [id], onDelete: Cascade)
  
  @@map("case_study_images")
}

model CaseStudyTag {
  id          String      @id @default(cuid())
  name        String      @unique
  slug        String      @unique
  color       String      @default("#3B82F6")
  caseStudies CaseStudy[]
  
  @@map("case_study_tags")
}

model BlogPost {
  id          String    @id @default(cuid())
  slug        String    @unique
  title       String
  excerpt     String
  content     String    // Markdown content
  featured    Boolean   @default(false)
  published   Boolean   @default(false)
  publishedAt DateTime?
  readTime    Int       // Estimated reading time in minutes
  views       Int       @default(0)
  likes       Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // SEO
  metaTitle       String?
  metaDescription String?
  ogImage         String?
  
  // Relations
  author      User      @relation(fields: [authorId], references: [id])
  authorId    String
  category    BlogCategory @relation(fields: [categoryId], references: [id])
  categoryId  String
  tags        BlogTag[]
  
  @@map("blog_posts")
}

model BlogCategory {
  id          String     @id @default(cuid())
  name        String     @unique
  slug        String     @unique
  description String?
  color       String     @default("#3B82F6")
  posts       BlogPost[]
  
  @@map("blog_categories")
}

model BlogTag {
  id    String     @id @default(cuid())
  name  String     @unique
  slug  String     @unique
  posts BlogPost[]
  
  @@map("blog_tags")
}

model User {
  id        String     @id @default(cuid())
  email     String     @unique
  name      String
  avatar    String?
  bio       String?
  website   String?
  twitter   String?
  linkedin  String?
  github    String?
  role      UserRole   @default(AUTHOR)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  
  // Relations
  posts     BlogPost[]
  
  @@map("users")
}

model Contact {
  id        String      @id @default(cuid())
  name      String
  email     String
  company   String?
  message   String
  type      ContactType @default(GENERAL)
  status    ContactStatus @default(NEW)
  source    String?     // UTM source or referrer
  createdAt DateTime    @default(now())
  
  @@map("contacts")
}

model Newsletter {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  status    NewsletterStatus @default(ACTIVE)
  source    String?  // Signup source
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@map("newsletter_subscribers")
}

model Analytics {
  id        String   @id @default(cuid())
  path      String
  event     String
  data      Json?
  userAgent String?
  ip        String?
  country   String?
  createdAt DateTime @default(now())
  
  @@map("analytics_events")
}

enum UserRole {
  ADMIN
  AUTHOR
  CONTRIBUTOR
}

enum ContactType {
  GENERAL
  CONSULTING
  SPEAKING
  PARTNERSHIP
  MEDIA
}

enum ContactStatus {
  NEW
  CONTACTED
  QUALIFIED
  CONVERTED
  ARCHIVED
}

enum NewsletterStatus {
  ACTIVE
  UNSUBSCRIBED
  BOUNCED
}
```

### 2.2 TypeScript Types

```typescript
// types/index.ts

export interface CaseStudy {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  challenge: string
  approach: StrategicFramework[]
  architecture: SystemArchitecture
  impact: QuantifiableMetric[]
  timeline: string
  technologies: string[]
  featured: boolean
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  testimonials: Testimonial[]
  images: CaseStudyImage[]
  tags: CaseStudyTag[]
}

export interface StrategicFramework {
  name: string
  description: string
  application: string
  outcome: string
}

export interface SystemArchitecture {
  before: {
    description: string
    painPoints: string[]
    diagram?: string
  }
  after: {
    description: string
    improvements: string[]
    diagram?: string
  }
  implementation: {
    phases: ImplementationPhase[]
    timeline: string
    resources: string[]
  }
}

export interface ImplementationPhase {
  name: string
  duration: string
  deliverables: string[]
  risksMintigated: string[]
}

export interface QuantifiableMetric {
  metric: string
  before: number | string
  after: number | string
  improvement: string
  unit: string
  context: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  content: string
  avatar?: string
  featured: boolean
  caseStudyId?: string
  createdAt: Date
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featured: boolean
  published: boolean
  publishedAt?: Date
  readTime: number
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
  author: User
  category: BlogCategory
  tags: BlogTag[]
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  bio?: string
  website?: string
  twitter?: string
  linkedin?: string
  github?: string
  role: 'ADMIN' | 'AUTHOR' | 'CONTRIBUTOR'
  createdAt: Date
  updatedAt: Date
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  type: 'GENERAL' | 'CONSULTING' | 'SPEAKING' | 'PARTNERSHIP' | 'MEDIA'
  source?: string
}

export interface NewsletterSubscription {
  email: string
  name?: string
  source?: string
}

// Animation and UI Types
export interface ChessAnimationConfig {
  duration: number
  ease: string
  loop: boolean
  autoPlay: boolean
}

export interface SystemDiagramNode {
  id: string
  label: string
  type: 'process' | 'data' | 'decision' | 'external'
  position: { x: number; y: number }
  connections: string[]
}

export interface SystemDiagram {
  nodes: SystemDiagramNode[]
  title: string
  description: string
}

// Analytics Types
export interface AnalyticsEvent {
  event: string
  path: string
  data?: Record<string, any>
  timestamp: Date
}

export interface PageMetrics {
  path: string
  views: number
  uniqueViews: number
  averageTime: number
  bounceRate: number
  conversions: number
}
```

---

## 3. Database Schema & Models

### 3.1 Prisma Client Setup

```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### 3.2 Database Service Layer

```typescript
// server/services/database.ts
import { prisma } from '~/lib/prisma'
import type { CaseStudy, BlogPost, ContactForm } from '~/types'

export class DatabaseService {
  // Case Studies
  async getCaseStudies(featured?: boolean): Promise<CaseStudy[]> {
    return await prisma.caseStudy.findMany({
      where: {
        published: true,
        ...(featured && { featured: true })
      },
      include: {
        testimonials: {
          where: { featured: true }
        },
        images: {
          orderBy: { order: 'asc' }
        },
        tags: true
      },
      orderBy: { publishedAt: 'desc' }
    })
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    return await prisma.caseStudy.findUnique({
      where: { slug },
      include: {
        testimonials: true,
        images: { orderBy: { order: 'asc' } },
        tags: true
      }
    })
  }

  // Blog Posts
  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    return await prisma.blogPost.findMany({
      where: { published: true },
      include: {
        author: true,
        category: true,
        tags: true
      },
      orderBy: { publishedAt: 'desc' },
      ...(limit && { take: limit })
    })
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    return await prisma.blogPost.findUnique({
      where: { slug },
      include: {
        author: true,
        category: true,
        tags: true
      }
    })
  }

  // Contact Management
  async createContact(data: ContactForm): Promise<void> {
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
        type: data.type,
        source: data.source
      }
    })
  }

  // Newsletter
  async subscribeToNewsletter(email: string, name?: string, source?: string): Promise<void> {
    await prisma.newsletter.upsert({
      where: { email },
      update: { status: 'ACTIVE', updatedAt: new Date() },
      create: { email, name, source }
    })
  }

  // Analytics
  async trackEvent(event: string, path: string, data?: any): Promise<void> {
    await prisma.analytics.create({
      data: {
        event,
        path,
        data: data || {}
      }
    })
  }

  async getPageMetrics(path: string, days: number = 30) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const metrics = await prisma.analytics.groupBy({
      by: ['event'],
      where: {
        path,
        createdAt: { gte: startDate }
      },
      _count: true
    })

    return metrics.reduce((acc, metric) => {
      acc[metric.event] = metric._count
      return acc
    }, {} as Record<string, number>)
  }
}

export const db = new DatabaseService()
```

---

## 4. Component Architecture

### 4.1 Base Components

```vue
<!-- components/Base/Button.vue -->
<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon
      v-if="loading"
      name="heroicons:arrow-path"
      class="w-4 h-4 mr-2 animate-spin"
    />
    <Icon
      v-else-if="icon"
      :name="icon"
      :class="iconClasses"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  tag?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const disabledClasses = props.disabled || props.loading 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabledClasses}`
})

const iconClasses = computed(() => {
  const position = props.iconPosition === 'right' ? 'ml-2' : 'mr-2'
  const size = props.size === 'sm' ? 'w-4 h-4' : props.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
  return `${size} ${position}`
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
```

```vue
<!-- components/Base/Card.vue -->
<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'md',
  hover: false
})

const cardClasses = computed(() => {
  const base = 'transition-all duration-300'
  
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const roundings = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }
  
  const hoverEffect = props.hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  
  return `${base} ${variants[props.variant]} ${paddings[props.padding]} ${roundings[props.rounded]} ${hoverEffect}`
})
</script>

<style scoped>
.card-header {
  @apply border-b border-gray-200 pb-4 mb-4;
}

.card-footer {
  @apply border-t border-gray-200 pt-4 mt-4;
}
</style>
```

### 4.2 Interactive Components

```vue
<!-- components/Interactive/ChessAnimation.vue -->
<template>
  <div ref="containerRef" class="chess-animation-container">
    <canvas
      ref="canvasRef"
      :width="canvasWidth"
      :height="canvasHeight"
      class="w-full h-full"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

interface Props {
  autoPlay?: boolean
  loop?: boolean
  speed?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: true,
  loop: true,
  speed: 1
})

const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()
const canvasWidth = ref(400)
const canvasHeight = ref(300)

let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null

interface Position {
  x: number
  y: number
}

interface ChessPiece {
  position: Position
  targetPosition: Position
  type: 'knight' | 'rook' | 'bishop'
  color: string
}

const knight = reactive<ChessPiece>({
  position: { x: 50, y: 150 },
  targetPosition: { x: 200, y: 100 },
  type: 'knight',
  color: '#1F2937'
})

const boardSquares = ref<Position[]>([])

onMounted(() => {
  initCanvas()
  setupBoard()
  if (props.autoPlay) {
    startAnimation()
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

const initCanvas = () => {
  if (!canvasRef.value) return
  
  ctx = canvasRef.value.getContext('2d')
  if (!ctx) return
  
  // Set up responsive canvas
  const resizeCanvas = () => {
    if (!containerRef.value || !canvasRef.value) return
    
    const rect = containerRef.value.getBoundingClientRect()
    canvasWidth.value = rect.width
    canvasHeight.value = rect.height
    
    // Set actual canvas size
    canvasRef.value.width = canvasWidth.value * window.devicePixelRatio
    canvasRef.value.height = canvasHeight.value * window.devicePixelRatio
    
    // Scale context for high DPI
    ctx?.scale(window.devicePixelRatio, window.devicePixelRatio)
  }
  
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}

const setupBoard = () => {
  // Create chess board grid
  const squareSize = 40
  const cols = Math.floor(canvasWidth.value / squareSize)
  const rows = Math.floor(canvasHeight.value / squareSize)
  
  boardSquares.value = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      boardSquares.value.push({
        x: col * squareSize,
        y: row * squareSize
      })
    }
  }
}

const drawBoard = () => {
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
  
  // Draw subtle grid
  ctx.strokeStyle = '#F3F4F6'
  ctx.lineWidth = 1
  
  boardSquares.value.forEach((square, index) => {
    const isEven = Math.floor(index / 8) % 2 === index % 2
    ctx.fillStyle = isEven ? '#FAFAFA' : '#F9FAFB'
    ctx.fillRect(square.x, square.y, 40, 40)
    ctx.strokeRect(square.x, square.y, 40, 40)
  })
}

const drawKnight = () => {
  if (!ctx) return
  
  const { x, y } = knight.position
  
  // Draw knight piece (simplified representation)
  ctx.fillStyle = knight.color
  ctx.beginPath()
  ctx.arc(x + 20, y + 20, 15, 0, Math.PI * 2)
  ctx.fill()
  
  // Add knight symbol
  ctx.fillStyle = 'white'
  ctx.font = '16px serif'
  ctx.textAlign = 'center'
  ctx.fillText('♞', x + 20, y + 26)
}

const render = () => {
  drawBoard()
  drawKnight()
  
  if (props.loop || knight.position.x !== knight.targetPosition.x) {
    animationId = requestAnimationFrame(render)
  }
}

const startAnimation = () => {
  const timeline = gsap.timeline({ repeat: props.loop ? -1 : 0 })
  
  // Knight's L-shaped movements
  const moves = [
    { x: 200, y: 100 },
    { x: 280, y: 160 },
    { x: 200, y: 220 },
    { x: 120, y: 160 },
    { x: 50, y: 150 }
  ]
  
  moves.forEach((move, index) => {
    timeline.to(knight.position, {
      x: move.x,
      y: move.y,
      duration: 1.5 / props.speed,
      ease: 'power2.inOut',
      delay: index === 0 ? 0.5 : 0
    })
  })
  
  render()
}

// Expose methods for external control
defineExpose({
  startAnimation,
  stopAnimation: () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  }
})
</script>

<style scoped>
.chess-animation-container {
  @apply relative w-full h-64 overflow-hidden rounded-lg;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

---

## 5. Core Features Implementation

### 5.1 Homepage Implementation

```vue
<!-- pages/index.vue -->
<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="hero-content">
            <h1 class="hero-title">
              James Ross Jr.
              <span class="block text-blue-600">
                Architecting Advantage Through Systems Thinking
              </span>
            </h1>
            
            <p class="hero-subtitle">
              I design and implement resilient business systems that turn 
              complexity into a competitive edge.
            </p>
            
            <div class="hero-actions">
              <BaseButton
                variant="primary"
                size="lg"
                @click="scrollToPortfolio"
              >
                View Strategic Blueprints
              </BaseButton>
              
              <BaseButton
                variant="outline"
                size="lg"
                @click="navigateToContact"
              >
                Initiate Strategic Dialogue
              </BaseButton>
            </div>
            
            <div class="hero-metrics">
              <div class="metric">
                <span class="metric-value">500K+</span>
                <span class="metric-label">Revenue Generated</span>
              </div>
              <div class="metric">
                <span class="metric-value">30%</span>
                <span class="metric-label">Avg. Efficiency Gain</span>
              </div>
              <div class="metric">
                <span class="metric-value">15+</span>
                <span class="metric-label">Systems Redesigned</span>
              </div>
            </div>
          </div>
          
          <div class="hero-visual">
            <InteractiveChessAnimation :auto-play="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Case Studies -->
    <section class="featured-case-studies">
      <div class="container mx-auto px-4 py-20">
        <div class="section-header">
          <h2 class="section-title">Strategic Blueprints</h2>
          <p class="section-subtitle">
            Explore how systems thinking transforms complex challenges 
            into scalable solutions
          </p>
        </div>
        
        <div class="case-studies-grid">
          <PortfolioCaseStudyCard
            v-for="caseStudy in featuredCaseStudies"
            :key="caseStudy.id"
            :case-study="caseStudy"
            :featured="true"
          />
        </div>
        
        <div class="text-center mt-12">
          <BaseButton
            variant="outline"
            size="lg"
            @click="navigateToPortfolio"
          >
            View All Case Studies
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Methodology Preview -->
    <section class="methodology-preview">
      <div class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="methodology-content">
            <h2 class="methodology-title">
              The Strategic Systems Approach
            </h2>
            
            <div class="methodology-steps">
              <div
                v-for="(step, index) in methodologySteps"
                :key="index"
                class="methodology-step"
              >
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="methodology-visual">
            <InteractiveSystemDiagram
              :nodes="systemDiagramNodes"
              :animated="true"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Insights -->
    <section class="recent-insights">
      <div class="container mx-auto px-4 py-20">
        <div class="section-header">
          <h2 class="section-title">Strategic Insights</h2>
          <p class="section-subtitle">
            Advanced frameworks and mental models for systems-thinking leaders
          </p>
        </div>
        
        <div class="insights-grid">
          <BlogPostCard
            v-for="post in recentPosts"
            :key="post.id"
            :post="post"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container mx-auto px-4 py-20">
        <div class="cta-card">
          <h2 class="cta-title">
            Ready to Transform Your Business Systems?
          </h2>
          <p class="cta-description">
            Let's discuss how strategic systems thinking can solve your 
            most complex challenges and unlock sustainable growth.
          </p>
          
          <div class="cta-actions">
            <BaseButton
              variant="primary"
              size="lg"
              @click="navigateToContact"
            >
              Schedule a Strategic Consultation
            </BaseButton>
            
            <BaseButton
              variant="ghost"
              size="lg"
              @click="downloadFramework"
            >
              Download Systems Framework
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { CaseStudy, BlogPost } from '~/types'

// SEO
useHead({
  title: 'James Ross Jr. - Strategic Systems Architect | Business Transformation',
  meta: [
    {
      name: 'description',
      content: 'Expert systems architect specializing in business transformation, operational efficiency, and strategic design thinking. Turn complexity into competitive advantage.'
    },
    {
      property: 'og:title',
      content: 'James Ross Jr. - Strategic Systems Architect'
    },
    {
      property: 'og:description',
      content: 'Architecting advantage through systems thinking. Transform your business challenges into scalable solutions.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Data fetching
const { data: featuredCaseStudies } = await $fetch<CaseStudy[]>('/api/case-studies?featured=true')
const { data: recentPosts } = await $fetch<BlogPost[]>('/api/blog/posts?limit=3')

// Methodology steps
const methodologySteps = [
  {
    title: 'Systems Analysis',
    description: 'Map current state information flows, feedback loops, and stakeholder incentives to identify root causes.'
  },
  {
    title: 'Strategic Design',
    description: 'Apply proven frameworks like Wardley Mapping and Cynefin to architect optimal solutions.'
  },
  {
    title: 'Implementation Blueprint',
    description: 'Create detailed implementation plans with risk mitigation and success metrics.'
  },
  {
    title: 'Continuous Optimization',
    description: 'Monitor system performance and iterate based on real-world feedback and emerging patterns.'
  }
]

// System diagram data
const systemDiagramNodes = [
  { id: 'input', label: 'Business Challenge', type: 'external' },
  { id: 'analysis', label: 'Systems Analysis', type: 'process' },
  { id: 'design', label: 'Strategic Design', type: 'process' },
  { id: 'output', label: 'Scalable Solution', type: 'external' }
]

// Methods
const scrollToPortfolio = () => {
  document.querySelector('.featured-case-studies')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}

const navigateToPortfolio = () => {
  navigateTo('/portfolio')
}

const navigateToContact = () => {
  navigateTo('/contact')
}

const downloadFramework = () => {
  // Track download event
  $fetch('/api/analytics/track', {
    method: 'POST',
    body: {
      event: 'framework_download',
      path: '/',
      data: { type: 'systems_framework' }
    }
  })
  
  // Trigger download
  window.open('/downloads/systems-thinking-framework.pdf', '_blank')
}

// Analytics tracking
onMounted(() => {
  $fetch('/api/analytics/track', {
    method: 'POST',
    body: {
      event: 'page_view',
      path: '/',
      data: { page: 'homepage' }
    }
  })
})
</script>

<style scoped>
.hero-section {
  @apply bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center;
}

.hero-title {
  @apply text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6;
}

.hero-subtitle {
  @apply text-xl text-gray-600 mb-8 leading-relaxed;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 mb-12;
}

.hero-metrics {
  @apply grid grid-cols-3 gap-8;
}

.metric {
  @apply text-center;
}

.metric-value {
  @apply block text-3xl font-bold text-blue-600 mb-1;
}

.metric-label {
  @apply text-sm text-gray-600;
}

.section-header {
  @apply text-center mb-16;
}

.section-title {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

.section-subtitle {
  @apply text-xl text-gray-600 max-w-3xl mx-auto;
}

.case-studies-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12;
}

.methodology-preview {
  @apply bg-gray-50;
}

.methodology-title {
  @apply text-4xl font-bold text-gray-900 mb-8;
}

.methodology-steps {
  @apply space-y-8;
}

.methodology-step {
  @apply flex items-start gap-4;
}

.step-number {
  @apply w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0;
}

.step-title {
  @apply text-xl font-semibold text-gray-900 mb-2;
}

.step-description {
  @apply text-gray-600;
}

.insights-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.cta-section {
  @apply bg-blue-600;
}

.cta-card {
  @apply text-center text-white;
}

.cta-title {
  @apply text-4xl font-bold mb-6;
}

.cta-description {
  @apply text-xl mb-8 max-w-3xl mx-auto opacity-90;
}

.cta-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}
</style>
```

### 5.2 Portfolio Section

```vue
<!-- components/Portfolio/CaseStudyCard.vue -->
<template>
  <BaseCard
    variant="elevated"
    :hover="true"
    class="case-study-card"
    @click="navigateToCase"
  >
    <template #header>
      <div class="case-image-container">
        <NuxtImg
          :src="primaryImage"
          :alt="caseStudy.title"
          class="case-image"
          loading="lazy"
          sizes="sm:400px md:600px lg:800px"
        />
        
        <div class="case-overlay">
          <div class="case-tags">
            <span
              v-for="tag in caseStudy.tags.slice(0, 2)"
              :key="tag.id"
              class="case-tag"
              :style="{ backgroundColor: tag.color }"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>
      </div>
    </template>

    <div class="case-content">
      <h3 class="case-title">{{ caseStudy.title }}</h3>
      <p class="case-subtitle">{{ caseStudy.subtitle }}</p>
      <p class="case-description">{{ caseStudy.description }}</p>
      
      <div class="case-challenge">
        <h4 class="challenge-label">The Challenge</h4>
        <p class="challenge-text">{{ caseStudy.challenge }}</p>
      </div>
      
      <div class="case-metrics">
        <div
          v-for="metric in topMetrics"
          :key="metric.metric"
          class="metric-item"
        >
          <span class="metric-value">{{ metric.improvement }}</span>
          <span class="metric-label">{{ metric.metric }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="case-footer">
        <div class="case-timeline">
          <Icon name="heroicons:clock" class="w-4 h-4" />
          <span>{{ caseStudy.timeline }}</span>
        </div>
        
        <BaseButton
          variant="ghost"
          size="sm"
          @click.stop="navigateToCase"
        >
          View Full Case Study
          <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
        </BaseButton>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types'

interface Props {
  caseStudy: CaseStudy
  featured?: boolean
}

const props = defineProps<Props>()

const primaryImage = computed(() => {
  return props.caseStudy.images[0]?.url || '/images/case-study-placeholder.jpg'
})

const topMetrics = computed(() => {
  return props.caseStudy.impact.slice(0, 2)
})

const navigateToCase = () => {
  navigateTo(`/portfolio/${props.caseStudy.slug}`)
}
</script>

<style scoped>
.case-study-card {
  @apply cursor-pointer;
}

.case-image-container {
  @apply relative overflow-hidden rounded-t-lg;
}

.case-image {
  @apply w-full h-48 object-cover transition-transform duration-300;
}

.case-study-card:hover .case-image {
  @apply scale-105;
}

.case-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-start p-4;
}

.case-tags {
  @apply flex gap-2;
}

.case-tag {
  @apply px-2 py-1 text-xs font-medium text-white rounded-full;
}

.case-content {
  @apply p-6;
}

.case-title {
  @apply text-xl font-bold text-gray-900 mb-2;
}

.case-subtitle {
  @apply text-base text-blue-600 font-medium mb-3;
}

.case-description {
  @apply text-gray-600 mb-4;
}

.case-challenge {
  @apply mb-6;
}

.challenge-label {
  @apply text-sm font-semibold text-gray-700 mb-1;
}

.challenge-text {
  @apply text-sm text-gray-600;
}

.case-metrics {
  @apply grid grid-cols-2 gap-4 mb-4;
}

.metric-item {
  @apply text-center;
}

.metric-value {
  @apply block text-2xl font-bold text-blue-600;
}

.metric-label {
  @apply text-xs text-gray-600;
}

.case-footer {
  @apply flex items-center justify-between;
}

.case-timeline {
  @apply flex items-center gap-1 text-sm text-gray-500;
}
</style>
```

---

## 6. Advanced Features & Integrations

### 6.1 API Routes

```typescript
// server/api/case-studies/index.get.ts
import { db } from '~/server/services/database'
import { z } from 'zod'

const querySchema = z.object({
  featured: z.string().transform(val => val === 'true').optional(),
  limit: z.string().transform(val => parseInt(val)).optional(),
  tag: z.string().optional()
})

export default defineEventHandler(async (event) => {
  try {
    const query = await getValidatedQuery(event, querySchema.parse)
    
    const caseStudies = await db.getCaseStudies(query.featured)
    
    // Apply additional filters
    let filteredResults = caseStudies
    
    if (query.tag) {
      filteredResults = caseStudies.filter(cs => 
        cs.tags.some(tag => tag.slug === query.tag)
      )
    }
    
    if (query.limit) {
      filteredResults = filteredResults.slice(0, query.limit)
    }
    
    return {
      data: filteredResults,
      total: filteredResults.length
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch case studies'
    })
  }
})
```

```typescript
// server/api/case-studies/[slug].get.ts
import { db } from '~/server/services/database'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Case study slug is required'
    })
  }
  
  try {
    const caseStudy = await db.getCaseStudyBySlug(slug)
    
    if (!caseStudy) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Case study not found'
      })
    }
    
    return { data: caseStudy }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch case study'
    })
  }
})
```

```typescript
// server/api/contact.post.ts
import { db } from '~/server/services/database'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['GENERAL', 'CONSULTING', 'SPEAKING', 'PARTNERSHIP', 'MEDIA']),
  source: z.string().optional()
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const validatedData = contactSchema.parse(body)
    
    // Save to database
    await db.createContact(validatedData)
    
    // Send notification email
    await sendNotificationEmail(validatedData)
    
    // Send auto-response
    await sendAutoResponse(validatedData)
    
    return { success: true, message: 'Contact form submitted successfully' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation error',
        data: error.errors
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit contact form'
    })
  }
})

async function sendNotificationEmail(data: any) {
  const config = useRuntimeConfig()
  
  const transporter = nodemailer.createTransporter({
    // Email service configuration
    service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPassword
    }
  })
  
  await transporter.sendMail({
    from: config.emailUser,
    to: 'james@jamesrossjr.com',
    subject: `New ${data.type} Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Type:</strong> ${data.type}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  })
}

async function sendAutoResponse(data: any) {
  // Auto-response email implementation
}
```

### 6.2 Advanced Analytics

```typescript
// composables/useAnalytics.ts
export const useAnalytics = () => {
  const config = useRuntimeConfig()
  
  const trackEvent = async (
    event: string, 
    data?: Record<string, any>
  ) => {
    try {
      // Track in database
      await $fetch('/api/analytics/track', {
        method: 'POST',
        body: {
          event,
          path: useRoute().path,
          data
        }
      })
      
      // Track in Google Analytics
      if (process.client && window.gtag) {
        window.gtag('event', event, {
          ...data,
          page_path: useRoute().path
        })
      }
    } catch (error) {
      console.error('Analytics tracking failed:', error)
    }
  }
  
  const trackPageView = () => {
    const route = useRoute()
    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href
    })
  }
  
  const trackConversion = (type: string, value?: number) => {
    trackEvent('conversion', { type, value })
  }
  
  const trackDownload = (filename: string) => {
    trackEvent('download', { filename })
  }
  
  const trackFormSubmission = (formType: string) => {
    trackEvent('form_submission', { form_type: formType })
  }
  
  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackDownload,
    trackFormSubmission
  }
}
```

---

## 7. Performance Optimization

### 7.1 Image Optimization

```typescript
// nuxt.config.ts - Image optimization
export default defineNuxtConfig({
  image: {
    // Cloudflare Images
    cloudflare: {
      baseURL: 'https://imagedelivery.net/<account-hash>/'
    },
    
    // Image sizes for responsive images
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    
    // Image formats
    format: ['webp', 'avif', 'jpg'],
    
    // Quality settings
    quality: 80,
    
    // Presets for common use cases
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 1920,
          height: 1080
        }
      },
      card: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 400,
          height: 300
        }
      },
      avatar: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 100,
          height: 100
        }
      }
    }
  }
})
```

### 7.2 Caching Strategy

```typescript
// server/api/cache/[...path].ts
import { createStorage } from 'unstorage'
import redisDriver from 'unstorage/drivers/redis'

const storage = createStorage({
  driver: redisDriver({
    base: 'cache:',
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  })
})

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  const cacheKey = `api:${path}`
  
  // Try to get from cache first
  const cached = await storage.getItem(cacheKey)
  if (cached) {
    setHeader(event, 'X-Cache', 'HIT')
    return cached
  }
  
  // Fetch fresh data
  const data = await fetchFreshData(path)
  
  // Cache for 5 minutes
  await storage.setItem(cacheKey, data, { ttl: 300 })
  
  setHeader(event, 'X-Cache', 'MISS')
  return data
})

async function fetchFreshData(path: string) {
  // Implementation depends on the specific endpoint
  switch (path) {
    case 'case-studies':
      return await db.getCaseStudies()
    case 'blog-posts':
      return await db.getBlogPosts()
    default:
      throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }
}
```

### 7.3 PWA Configuration

```typescript
// nuxt.config.ts - PWA setup
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'James Ross Jr. - Strategic Systems Architect',
      short_name: 'JamesRossJr',
      description: 'Architecting advantage through systems thinking',
      theme_color: '#2563eb',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\./i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 // 24 hours
            }
          }
        }
      ]
    }
  }
})
```

---

## 8. Deployment & Infrastructure

### 8.1 GitHub Actions CI/CD

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Run type checking
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Run build
        run: npm run build

  lighthouse:
    runs-on: ubuntu-latest
    needs: test
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: './lighthouserc.js'
          uploadArtifacts: true
          temporaryPublicStorage: true

  deploy:
    runs-on: ubuntu-latest
    needs: [test, lighthouse]
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### 8.2 Vercel Configuration

```json
// vercel.json
{
  "framework": "nuxt",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "pages/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    },
    {
      "source": "/(.*)\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/case-studies/:slug",
      "destination": "/portfolio/:slug",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

### 8.3 Environment Configuration

# Email
EMAIL_API_KEY="your-email-service-key"
EMAIL_USER="james@jamesrossjr.com