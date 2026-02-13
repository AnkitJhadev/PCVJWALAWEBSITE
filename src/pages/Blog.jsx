import { useState } from 'react';
import SEO from '../components/SEO';
import { 
  CalendarIcon,
  UserIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  BookmarkIcon,
  ShareIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to React Native Development in 2024',
      slug: 'ultimate-guide-react-native-development-2024',
      excerpt: 'Discover the latest trends, best practices, and tools for building cross-platform mobile applications with React Native.',
      content: 'React Native continues to evolve as a leading framework for cross-platform mobile development...',
      author: {
        name: 'Sarah Johnson',
        avatar: '/authors/sarah.jpg',
        bio: 'Senior Mobile Developer at PCV Jwala Corporation'
      },
      category: 'React Native',
      tags: ['React Native', 'Mobile Development', 'Cross-Platform', '2024'],
      readTime: '8 min read',
      publishDate: '2024-01-15',
      featured: true,
      image: '/blog/react-native-2024.jpg',
      seo: {
        metaTitle: 'Ultimate Guide to React Native Development 2025',
        metaDescription: 'Complete guide to React Native development with latest trends, best practices, and tools for cross-platform mobile apps.',
        keywords: 'React Native development, cross-platform mobile development, mobile app development 2024'
      }
    },
    {
      id: 2,
      title: 'MERN Stack vs MEAN Stack: Which is Better for Your Project?',
      slug: 'mern-stack-vs-mean-stack-comparison',
      excerpt: 'A comprehensive comparison between MERN and MEAN stacks to help you choose the right technology stack for your next project.',
      content: 'Choosing the right technology stack is crucial for the success of your web application...',
      author: {
        name: 'Michael Chen',
        avatar: '/authors/michael.jpg',
        bio: 'Full-Stack Developer and Tech Lead'
      },
      category: 'Web Development',
      tags: ['MERN Stack', 'MEAN Stack', 'Comparison', 'Web Development'],
      readTime: '6 min read',
      publishDate: '2024-01-10',
      featured: true,
      image: '/blog/mern-vs-mean.jpg',
      seo: {
        metaTitle: 'MERN Stack vs MEAN Stack Comparison 2024',
        metaDescription: 'Detailed comparison between MERN and MEAN stacks to help you choose the best technology stack for your project.',
        keywords: 'MERN stack, MEAN stack, technology stack comparison, web development frameworks'
      }
    },
    {
      id: 3,
      title: 'Building Scalable APIs with Node.js and Express',
      slug: 'building-scalable-apis-nodejs-express',
      excerpt: 'Learn how to design and implement scalable RESTful APIs using Node.js and Express.js with best practices.',
      content: 'Building scalable APIs requires careful planning and implementation of best practices...',
      author: {
        name: 'Emily Rodriguez',
        avatar: '/authors/emily.jpg',
        bio: 'Backend Developer and API Specialist'
      },
      category: 'Backend Development',
      tags: ['Node.js', 'Express.js', 'API Development', 'Scalability'],
      readTime: '10 min read',
      publishDate: '2024-01-05',
      featured: false,
      image: '/blog/nodejs-apis.jpg',
      seo: {
        metaTitle: 'Building Scalable APIs with Node.js and Express',
        metaDescription: 'Learn how to build scalable RESTful APIs using Node.js and Express.js with best practices and design patterns.',
        keywords: 'Node.js API development, Express.js, RESTful APIs, scalable backend development'
      }
    },
    {
      id: 4,
      title: 'MongoDB Performance Optimization: Best Practices',
      slug: 'mongodb-performance-optimization-best-practices',
      excerpt: 'Essential tips and techniques for optimizing MongoDB database performance for high-traffic applications.',
      content: 'Database performance is critical for the success of any application...',
      author: {
        name: 'David Kim',
        avatar: '/authors/david.jpg',
        bio: 'Database Administrator and Performance Expert'
      },
      category: 'Database',
      tags: ['MongoDB', 'Performance', 'Optimization', 'Database'],
      readTime: '7 min read',
      publishDate: '2023-12-28',
      featured: false,
      image: '/blog/mongodb-optimization.jpg',
      seo: {
        metaTitle: 'MongoDB Performance Optimization Best Practices',
        metaDescription: 'Complete guide to MongoDB performance optimization with indexing, aggregation, and query optimization techniques.',
        keywords: 'MongoDB performance, database optimization, MongoDB indexing, query optimization'
      }
    },
    {
      id: 5,
      title: 'React.js State Management: Redux vs Context API',
      slug: 'react-state-management-redux-vs-context',
      excerpt: 'Compare Redux and Context API for state management in React.js applications and choose the right approach.',
      content: 'State management is a crucial aspect of React.js applications...',
      author: {
        name: 'Lisa Wang',
        avatar: '/authors/lisa.jpg',
        bio: 'Frontend Developer and React Specialist'
      },
      category: 'Frontend Development',
      tags: ['React.js', 'State Management', 'Redux', 'Context API'],
      readTime: '9 min read',
      publishDate: '2023-12-20',
      featured: false,
      image: '/blog/react-state-management.jpg',
      seo: {
        metaTitle: 'React.js State Management: Redux vs Context API',
        metaDescription: 'Comprehensive comparison between Redux and Context API for state management in React.js applications.',
        keywords: 'React state management, Redux vs Context, React.js, frontend development'
      }
    },
    {
      id: 6,
      title: 'Mobile App Security Best Practices for React Native',
      slug: 'mobile-app-security-react-native-best-practices',
      excerpt: 'Essential security practices to protect your React Native mobile applications from common vulnerabilities.',
      content: 'Mobile app security is paramount in today\'s digital landscape...',
      author: {
        name: 'John Smith',
        avatar: '/authors/john.jpg',
        bio: 'Security Expert and Mobile Developer'
      },
      category: 'Security',
      tags: ['Security', 'React Native', 'Mobile Security', 'Best Practices'],
      readTime: '11 min read',
      publishDate: '2023-12-15',
      featured: false,
      image: '/blog/mobile-security.jpg',
      seo: {
        metaTitle: 'Mobile App Security Best Practices for React Native',
        metaDescription: 'Essential security practices and techniques to protect React Native mobile applications from vulnerabilities.',
        keywords: 'React Native security, mobile app security, app development security, cybersecurity'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'React Native', name: 'React Native', count: blogPosts.filter(p => p.category === 'React Native').length },
    { id: 'Web Development', name: 'Web Development', count: blogPosts.filter(p => p.category === 'Web Development').length },
    { id: 'Backend Development', name: 'Backend Development', count: blogPosts.filter(p => p.category === 'Backend Development').length },
    { id: 'Database', name: 'Database', count: blogPosts.filter(p => p.category === 'Database').length },
    { id: 'Frontend Development', name: 'Frontend Development', count: blogPosts.filter(p => p.category === 'Frontend Development').length },
    { id: 'Security', name: 'Security', count: blogPosts.filter(p => p.category === 'Security').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PCV Jwala Corporation Blog",
    "description": "Expert insights on React Native, React.js, Node.js, MongoDB development and modern web technologies.",
    "url": "https://pcvjwala.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "PCV Jwala Corporation",
      "url": "https://pcvjwala.com"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://pcvjwala.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author.name
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Blog - Expert Insights on React Native, React.js, Node.js Development"
        description="Stay updated with the latest trends, best practices, and expert insights on React Native, React.js, Node.js, MongoDB development from PCV Jwala Corporation."
        keywords="React Native blog, React.js tutorials, Node.js development blog, MongoDB tips, MERN stack articles, web development blog"
        canonicalUrl="https://pcvjwala.com/blog"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Developer Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert insights, tutorials, and best practices on React Native, React.js, 
              Node.js, MongoDB development and modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">100+</span>
                <span className="text-gray-600 ml-2">Articles Published</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">50K+</span>
                <span className="text-gray-600 ml-2">Monthly Readers</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-primary-600">15+</span>
                <span className="text-gray-600 ml-2">Expert Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-gray-600">Hand-picked articles showcasing our best content and insights.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{post.category}</h3>
                      <p className="text-gray-600">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-200 rounded-full mr-3"></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{post.publishDate}</div>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                        Read more
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="text-sm text-gray-500">{post.publishDate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary-300 mb-2">
                          {post.category.charAt(0)}
                        </div>
                        <p className="text-gray-600">{post.category}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary-200 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                            <div className="text-xs text-gray-500">{post.publishDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <HeartIcon className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-primary-600 transition-colors">
                            <BookmarkIcon className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-primary-600 transition-colors">
                            <ShareIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Tech Insights
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-4">
            Join 50,000+ developers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
