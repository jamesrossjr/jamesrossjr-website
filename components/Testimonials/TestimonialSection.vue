<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          What Clients Say
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Trusted by Fortune 500 companies and innovative startups to deliver transformative solutions
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialsTestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
      
      <div class="mt-12 text-center">
        <div class="inline-flex items-center space-x-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">50+</div>
            <div class="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div class="w-px h-12 bg-gray-300"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">98%</div>
            <div class="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div class="w-px h-12 bg-gray-300"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">$100M+</div>
            <div class="text-sm text-gray-600">Value Created</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Mock testimonials data - will be fetched from API in production
const testimonials = ref([
  {
    id: '1',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Global',
    content: 'James transformed our entire infrastructure, reducing costs by 40% while improving performance. His strategic approach to cloud migration was exceptional.',
    rating: 5,
    projectType: 'Cloud Migration',
    featured: true
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'VP Engineering',
    company: 'FinanceFlow',
    content: 'The microservices architecture James designed allowed us to scale from 10K to 1M users seamlessly. His expertise in distributed systems is unmatched.',
    rating: 5,
    projectType: 'System Architecture',
    featured: true
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    role: 'Director of Technology',
    company: 'HealthTech Solutions',
    content: 'James\'s approach to our digital transformation was methodical and effective. He delivered on time and exceeded all our performance targets.',
    rating: 5,
    projectType: 'Digital Transformation',
    featured: true
  },
  {
    id: '4',
    author: 'David Kim',
    role: 'CEO',
    company: 'AI Innovations',
    content: 'Working with James was a game-changer. His ability to integrate AI into our existing systems while maintaining stability was remarkable.',
    rating: 5,
    projectType: 'AI Integration',
    featured: true
  },
  {
    id: '5',
    author: 'Lisa Thompson',
    role: 'Head of Infrastructure',
    company: 'E-Commerce Plus',
    content: 'James helped us handle Black Friday traffic with zero downtime. His real-time analytics platform processes billions of events daily.',
    rating: 5,
    projectType: 'Performance Optimization',
    featured: true
  },
  {
    id: '6',
    author: 'Robert Martinez',
    role: 'CISO',
    company: 'SecureBank',
    content: 'The zero-trust architecture James implemented has become the gold standard for our security posture. Incidents dropped by 70% post-implementation.',
    rating: 5,
    projectType: 'Security Architecture',
    featured: true
  }
])
</script>