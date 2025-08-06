import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Eye, ThumbsUp } from 'lucide-react';
import SEO from '../components/SEO';
import { pageConfigs, generateBreadcrumbs } from '../utils/seoConfig';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'career-tips', name: 'Career Tips', count: 8 },
    { id: 'ai-trends', name: 'AI Trends', count: 6 },
    { id: 'tutorials', name: 'Tutorials', count: 5 },
    { id: 'success-stories', name: 'Success Stories', count: 3 },
    { id: 'industry-insights', name: 'Industry Insights', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Land Your First Data Science Job in 2024',
      excerpt: 'Complete guide to breaking into data science with practical tips, portfolio projects, and interview preparation strategies.',
      category: 'career-tips',
      author: 'Dr. Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 2340,
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: 'Top 10 AI Trends That Will Shape 2024',
      excerpt: 'Discover the latest developments in artificial intelligence and machine learning that every tech professional should know about.',
      category: 'ai-trends',
      author: 'Rajesh Kumar',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 1890,
      likes: 132,
      featured: true
    },
    {
      id: 3,
      title: 'From Zero to Full Stack Developer: Complete Roadmap',
      excerpt: 'Step-by-step guide to becoming a full stack developer with recommended resources, timeline, and project ideas.',
      category: 'career-tips',
      author: 'Neha Gupta',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 3210,
      likes: 289,
      featured: true
    },
    {
      id: 4,
      title: 'Building Your First Machine Learning Model: A Beginner\'s Guide',
      excerpt: 'Learn how to build and deploy your first ML model with Python, scikit-learn, and real-world data.',
      category: 'tutorials',
      author: 'Arjun Patel',
      date: '2024-01-08',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 1567,
      likes: 98,
      featured: false
    },
    {
      id: 5,
      title: 'Success Story: From Marketing to AI Engineer in 8 Months',
      excerpt: 'Read how Anita transformed her career from marketing to AI engineering through dedicated learning and mentorship.',
      category: 'success-stories',
      author: 'Anita Singh',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 2100,
      likes: 245,
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Computing in 2024: AWS vs Azure vs Google Cloud',
      excerpt: 'Comprehensive comparison of major cloud platforms and which one to choose for your career path.',
      category: 'industry-insights',
      author: 'Vikram Mehta',
      date: '2024-01-03',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      views: 1789,
      likes: 143,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageConfigs.blog.title}
        description={pageConfigs.blog.description}
        keywords={pageConfigs.blog.keywords}
        breadcrumbs={generateBreadcrumbs('/blog')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, career advice, and tutorials from industry experts
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex justify-between items-center px-4 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-blue-500'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest tech insights and career tips delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {selectedCategory === 'all' && searchTerm === '' && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                          
                          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 group">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(cat => cat.id === selectedCategory)?.name || ''}`}
                </h2>
                <div className="text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </div>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-16 h-16 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {(selectedCategory === 'all' && searchTerm === '' ? regularPosts : filteredPosts).map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {post.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </div>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium capitalize">
                                {categories.find(cat => cat.id === post.category)?.name.replace('-', ' ') || post.category}
                              </span>
                            </div>
                            
                            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 group">
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;