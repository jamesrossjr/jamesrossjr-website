export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const category = query.category as string
  const featured = query.featured === 'true'
  
  // Mock data for case studies
  const mockCaseStudies = [
    {
      id: '1',
      slug: 'fortune-500-cloud-migration',
      title: 'Fortune 500 Cloud Migration',
      subtitle: 'Enterprise-Scale AWS Transformation',
      description: 'Led the migration of a Fortune 500 company\'s legacy infrastructure to AWS, resulting in 40% cost reduction and 99.99% uptime.',
      category: 'Cloud Migration',
      client: 'Global Financial Services',
      industry: 'Finance',
      duration: '8 months',
      team: ['10 engineers', '3 architects', '2 project managers'],
      metrics: [
        { label: 'Cost Reduction', value: '40%', improvement: '+40%' },
        { label: 'Uptime', value: '99.99%', improvement: '+15%' },
        { label: 'Deployment Speed', value: '10x', improvement: '+900%' },
        { label: 'Infrastructure Cost', value: '$2.5M saved', improvement: 'annually' }
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'GitOps', 'Prometheus'],
      featured: true,
      published: true,
      publishedAt: '2024-01-15T00:00:00Z'
    },
    {
      id: '2',
      slug: 'real-time-analytics-platform',
      title: 'Real-Time Analytics Platform',
      subtitle: 'Processing 1B+ Events Daily',
      description: 'Architected a real-time analytics platform processing over 1 billion events daily with sub-second latency.',
      category: 'System Architecture',
      client: 'E-commerce Giant',
      industry: 'Retail',
      duration: '6 months',
      team: ['8 engineers', '2 data scientists'],
      metrics: [
        { label: 'Events/Day', value: '1B+', improvement: 'scale' },
        { label: 'Latency', value: '<500ms', improvement: '-85%' },
        { label: 'Data Accuracy', value: '99.9%', improvement: '+20%' },
        { label: 'Processing Cost', value: '60% less', improvement: '-60%' }
      ],
      technologies: ['Apache Kafka', 'Spark', 'Cassandra', 'Redis', 'Python'],
      featured: true,
      published: true,
      publishedAt: '2024-02-01T00:00:00Z'
    },
    {
      id: '3',
      slug: 'microservices-transformation',
      title: 'Monolith to Microservices',
      subtitle: 'Breaking Down a 10-Year Legacy System',
      description: 'Successfully decomposed a monolithic application into 50+ microservices, improving development velocity by 3x.',
      category: 'Digital Transformation',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      duration: '12 months',
      team: ['15 engineers', '4 architects', '3 DevOps'],
      metrics: [
        { label: 'Deployment Frequency', value: '50x', improvement: '+4900%' },
        { label: 'Lead Time', value: '2 days', improvement: '-90%' },
        { label: 'Service Availability', value: '99.95%', improvement: '+25%' },
        { label: 'Dev Velocity', value: '3x', improvement: '+200%' }
      ],
      technologies: ['Docker', 'Kubernetes', 'Spring Boot', 'MongoDB', 'RabbitMQ'],
      featured: false,
      published: true,
      publishedAt: '2023-11-20T00:00:00Z'
    },
    {
      id: '4',
      slug: 'ai-powered-recommendation',
      title: 'AI-Powered Recommendation Engine',
      subtitle: 'Personalizing Experience for 10M+ Users',
      description: 'Built an ML-driven recommendation system that increased user engagement by 45% and revenue by 25%.',
      category: 'AI & Machine Learning',
      client: 'Media Streaming Service',
      industry: 'Entertainment',
      duration: '5 months',
      team: ['6 engineers', '3 data scientists', '1 ML engineer'],
      metrics: [
        { label: 'User Engagement', value: '+45%', improvement: '+45%' },
        { label: 'Revenue Impact', value: '+25%', improvement: '+25%' },
        { label: 'Prediction Accuracy', value: '92%', improvement: '+30%' },
        { label: 'Response Time', value: '50ms', improvement: '-75%' }
      ],
      technologies: ['TensorFlow', 'Python', 'Apache Spark', 'Redis', 'PostgreSQL'],
      featured: true,
      published: true,
      publishedAt: '2024-03-01T00:00:00Z'
    },
    {
      id: '5',
      slug: 'zero-trust-security',
      title: 'Zero Trust Security Implementation',
      subtitle: 'Enterprise Security Transformation',
      description: 'Implemented zero-trust architecture across 500+ applications, reducing security incidents by 70%.',
      category: 'Security Architecture',
      client: 'Government Agency',
      industry: 'Government',
      duration: '10 months',
      team: ['12 engineers', '5 security specialists'],
      metrics: [
        { label: 'Security Incidents', value: '-70%', improvement: '-70%' },
        { label: 'Compliance Score', value: '98%', improvement: '+40%' },
        { label: 'Access Control', value: '100%', improvement: 'automated' },
        { label: 'Audit Time', value: '-80%', improvement: '-80%' }
      ],
      technologies: ['Okta', 'HashiCorp Vault', 'Istio', 'OPA', 'Splunk'],
      featured: false,
      published: true,
      publishedAt: '2023-12-10T00:00:00Z'
    },
    {
      id: '6',
      slug: 'global-cdn-optimization',
      title: 'Global CDN Optimization',
      subtitle: 'Serving 100M+ Users Worldwide',
      description: 'Optimized content delivery network reducing latency by 60% and bandwidth costs by 45%.',
      category: 'Performance Optimization',
      client: 'Social Media Platform',
      industry: 'Technology',
      duration: '4 months',
      team: ['5 engineers', '2 network specialists'],
      metrics: [
        { label: 'Global Latency', value: '-60%', improvement: '-60%' },
        { label: 'Bandwidth Cost', value: '-45%', improvement: '-45%' },
        { label: 'Cache Hit Rate', value: '94%', improvement: '+30%' },
        { label: 'User Experience', value: '+35%', improvement: '+35%' }
      ],
      technologies: ['CloudFlare', 'Varnish', 'nginx', 'Redis', 'GraphQL'],
      featured: false,
      published: true,
      publishedAt: '2024-01-05T00:00:00Z'
    }
  ]
  
  // Filter by category if provided
  let filteredStudies = category 
    ? mockCaseStudies.filter(study => study.category.toLowerCase() === category.toLowerCase())
    : mockCaseStudies
  
  // Filter by featured if requested
  if (featured) {
    filteredStudies = filteredStudies.filter(study => study.featured)
  }
  
  return {
    caseStudies: filteredStudies,
    categories: [...new Set(mockCaseStudies.map(s => s.category))],
    total: filteredStudies.length
  }
})