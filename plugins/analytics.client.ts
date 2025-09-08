export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Only initialize analytics in production
  if (process.env.NODE_ENV === 'production' && config.public.googleAnalyticsId) {
    // Google Analytics 4
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`
    document.head.appendChild(script1)
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', config.public.googleAnalyticsId)
    
    // Track page views on route change
    nuxtApp.$router.afterEach((to, from) => {
      gtag('config', config.public.googleAnalyticsId, {
        page_path: to.fullPath,
        page_title: document.title
      })
    })
    
    // Provide analytics methods
    return {
      provide: {
        analytics: {
          // Track custom events
          trackEvent: (action: string, category: string, label?: string, value?: number) => {
            gtag('event', action, {
              event_category: category,
              event_label: label,
              value: value
            })
          },
          
          // Track conversions
          trackConversion: (conversionId: string, value?: number) => {
            gtag('event', 'conversion', {
              send_to: conversionId,
              value: value,
              currency: 'USD'
            })
          },
          
          // Track form submissions
          trackFormSubmit: (formName: string) => {
            gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: formName
            })
          },
          
          // Track downloads
          trackDownload: (fileName: string) => {
            gtag('event', 'file_download', {
              event_category: 'engagement',
              event_label: fileName
            })
          },
          
          // Track outbound links
          trackOutboundLink: (url: string) => {
            gtag('event', 'click', {
              event_category: 'outbound',
              event_label: url
            })
          },
          
          // Track scroll depth
          trackScrollDepth: (percentage: number) => {
            gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${percentage}%`
            })
          },
          
          // Track time on page
          trackTimeOnPage: (seconds: number) => {
            gtag('event', 'time_on_page', {
              event_category: 'engagement',
              value: seconds
            })
          }
        }
      }
    }
  }
  
  // Return empty analytics object for development
  return {
    provide: {
      analytics: {
        trackEvent: () => {},
        trackConversion: () => {},
        trackFormSubmit: () => {},
        trackDownload: () => {},
        trackOutboundLink: () => {},
        trackScrollDepth: () => {},
        trackTimeOnPage: () => {}
      }
    }
  }
})