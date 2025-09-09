export default defineEventHandler(async (event) => {
  // For now, return static data while we fix the content module
  const posts = [
    {
      _path: '/blog/quantum-computing-enterprise-applications-2025',
      title: 'Quantum Computing in Enterprise: Real-World Applications and Implementation Strategies for 2025',
      description: 'Explore practical quantum computing applications in enterprise, from cryptography to optimization. Learn implementation strategies, hybrid architectures, and ROI analysis for quantum investments with real case studies.',
      date: '2025-09-08',
      category: 'Quantum Computing',
      readTime: 15,
      tags: ['Quantum Computing', 'Enterprise Technology', 'Quantum Algorithms', 'Hybrid Computing', 'Quantum Supremacy']
    },
    {
      _path: '/blog/web3-development-complete-guide-2025',
      title: 'Web3 Development in 2025: Building Decentralized Applications from Zero to Production',
      description: 'Master Web3 development with this comprehensive guide covering smart contracts, DeFi protocols, NFT marketplaces, and DAOs. Learn Solidity, deployment strategies, security best practices, and real-world implementation patterns.',
      date: '2025-09-07',
      category: 'Web3 Development',
      readTime: 15,
      tags: ['Web3', 'Blockchain', 'Smart Contracts', 'DeFi', 'Solidity', 'Ethereum', 'NFT', 'DAO', 'Cryptocurrency', 'dApp Development']
    },
    {
      _path: '/blog/scalable-ai-pipelines-kubernetes-ray',
      title: 'Building Scalable AI Pipelines with Kubernetes and Ray',
      description: 'Learn how to create production-ready machine learning pipelines that can scale from a single GPU to thousands of nodes seamlessly.',
      date: '2025-09-05',
      category: 'AI & ML',
      readTime: 15,
      tags: ['AI', 'Machine Learning', 'Kubernetes', 'Ray', 'Distributed Computing']
    },
    {
      _path: '/blog/zero-trust-twingate-enterprise',
      title: 'Zero-Trust Networking: Complete Enterprise Implementation Guide with Twingate in 2025',
      description: 'Master zero-trust architecture with this comprehensive 15-minute guide covering Twingate deployment, security best practices, compliance requirements, cost analysis, and real-world case studies for enterprise-grade network security transformation.',
      date: '2025-09-03',
      category: 'Networking',
      readTime: 15,
      tags: ['Networking', 'Security', 'Zero Trust', 'Twingate', 'Enterprise']
    },
    {
      _path: '/blog/rust-vs-go-performance',
      title: 'Rust vs Go: Performance Benchmarks for System Programming',
      description: 'Deep dive into performance comparisons between Rust and Go for systems programming, with real-world benchmarks and use cases.',
      date: '2025-08-30',
      category: 'Programming',
      readTime: 15,
      tags: ['Rust', 'Go', 'Performance', 'Systems Programming', 'Benchmarks']
    },
    {
      _path: '/blog/defi-smart-contract-security',
      title: 'DeFi Smart Contract Security: Complete 2025 Auditing Guide & Best Practices',
      description: 'Master DeFi smart contract security with this comprehensive 15-minute guide covering vulnerability patterns, auditing frameworks, formal verification, incident response, and $5.2B worth of lessons learned from real exploits.',
      date: '2025-08-27',
      category: 'Cryptocurrency',
      readTime: 15,
      tags: ['DeFi', 'Smart Contracts', 'Security', 'Blockchain', 'Ethereum']
    }
  ]
  
  return posts
})