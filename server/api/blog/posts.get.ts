export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = parseInt(query.page as string) || 1
  const limit = parseInt(query.limit as string) || 10
  const category = query.category as string
  const search = query.search as string
  
  // Mock data for now - will be replaced with Prisma queries
  const mockPosts = [
    {
      id: '1',
      slug: 'systems-thinking-competitive-advantage',
      title: 'How Systems Thinking Creates Competitive Advantage',
      excerpt: 'In today\'s interconnected business landscape, understanding the relationships between components is more valuable than optimizing individual parts.',
      category: 'Strategy',
      tags: ['systems-thinking', 'architecture', 'business-strategy'],
      coverImage: '/images/blog/systems-thinking.jpg',
      publishedAt: '2024-03-15T00:00:00Z',
      readTime: 8,
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      slug: 'cloud-native-architecture-patterns',
      title: 'Cloud-Native Architecture Patterns for Enterprise Scale',
      excerpt: 'Explore proven architectural patterns that enable enterprises to build scalable, resilient cloud-native applications.',
      category: 'Architecture',
      tags: ['cloud', 'architecture', 'enterprise'],
      coverImage: '/images/blog/cloud-patterns.jpg',
      publishedAt: '2024-03-10T00:00:00Z',
      readTime: 12,
      views: 980,
      likes: 76
    },
    {
      id: '3',
      slug: 'digital-transformation-roadmap',
      title: 'Building a Digital Transformation Roadmap That Works',
      excerpt: 'Digital transformation isn\'t about technology—it\'s about reimagining how you create value.',
      category: 'Transformation',
      tags: ['digital-transformation', 'strategy', 'roadmap'],
      coverImage: '/images/blog/transformation.jpg',
      publishedAt: '2024-03-05T00:00:00Z',
      readTime: 10,
      views: 1520,
      likes: 104
    },
    {
      id: '4',
      slug: 'microservices-vs-monolith',
      title: 'Microservices vs Monolith: A Practical Decision Framework',
      excerpt: 'Understanding when to choose microservices over monolithic architecture based on real-world constraints.',
      category: 'Architecture',
      tags: ['microservices', 'monolith', 'architecture'],
      coverImage: '/images/blog/microservices.jpg',
      publishedAt: '2024-02-28T00:00:00Z',
      readTime: 15,
      views: 2100,
      likes: 142
    },
    {
      id: '5',
      slug: 'ai-integration-enterprise',
      title: 'Integrating AI into Enterprise Systems: A Strategic Approach',
      excerpt: 'Learn how to effectively integrate AI capabilities into existing enterprise architectures.',
      category: 'AI & ML',
      tags: ['ai', 'machine-learning', 'enterprise'],
      coverImage: '/images/blog/ai-integration.jpg',
      publishedAt: '2024-02-20T00:00:00Z',
      readTime: 11,
      views: 1850,
      likes: 128
    }
  ]
  
  // Filter by category if provided
  let filteredPosts = category 
    ? mockPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    : mockPosts
  
  // Search if query provided
  if (search) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.includes(search.toLowerCase()))
    )
  }
  
  // Pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
  
  return {
    posts: paginatedPosts,
    pagination: {
      page,
      limit,
      total: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit)
    }
  }
})