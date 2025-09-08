// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  
  typescript: {
    strict: false,
    typeCheck: false
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // css: ['@/assets/css/main.css'], // Temporarily commented out

  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600]
    }
  },

  image: {
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
    preset: 'netlify'
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    databaseUrl: process.env.DATABASE_URL || '',
    emailApiKey: process.env.EMAIL_API_KEY || '',
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'https://jamesrossjr.com',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || ''
    }
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },
  
  // Sitemap configuration
  sitemap: {
    hostname: 'https://jamesrossjr.com',
    gzip: true,
    exclude: ['/admin/**'],
    routes: [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/about', changefreq: 'monthly', priority: 0.9 },
      { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
      { url: '/blog', changefreq: 'weekly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 }
    ]
  },
  
  // Robots.txt configuration
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://jamesrossjr.com/sitemap.xml',
    Disallow: '/admin'
  },
  
  // Global SEO meta tags
  app: {
    head: {
      title: 'James Ross Jr. - Strategic Systems Architect',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Strategic Systems Architect specializing in enterprise transformations, cloud architecture, and technical leadership.' },
        { property: 'og:title', content: 'James Ross Jr. - Strategic Systems Architect' },
        { property: 'og:description', content: 'Strategic Systems Architect specializing in enterprise transformations, cloud architecture, and technical leadership.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jamesrossjr.com' },
        { property: 'og:image', content: 'https://jamesrossjr.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'James Ross Jr. - Strategic Systems Architect' },
        { name: 'twitter:description', content: 'Strategic Systems Architect specializing in enterprise transformations, cloud architecture, and technical leadership.' },
        { name: 'twitter:image', content: 'https://jamesrossjr.com/og-image.jpg' },
        { name: 'author', content: 'James Ross Jr.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#2563eb' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jamesrossjr.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'James Ross Jr.',
            jobTitle: 'Strategic Systems Architect',
            url: 'https://jamesrossjr.com',
            sameAs: [
              'https://linkedin.com/in/jamesrossjr',
              'https://github.com/jamesrossjr',
              'https://twitter.com/jamesrossjr'
            ],
            description: 'Strategic Systems Architect specializing in enterprise transformations, cloud architecture, and technical leadership.',
            knowsAbout: ['Systems Architecture', 'Cloud Computing', 'Digital Transformation', 'Enterprise Software', 'Technical Leadership']
          })
        }
      ]
    }
  }
})
