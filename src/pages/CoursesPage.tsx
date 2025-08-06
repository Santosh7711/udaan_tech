import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Filter, Grid, List, Brain, Code, Cloud, Database, Shield, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';
import { pageConfigs, generateBreadcrumbs } from '../utils/seoConfig';

const CoursesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: '',
    duration: '',
    level: '',
    mode: ''
  });

  const courses = [
    {
      id: 1,
      slug: 'data-science-advanced',
      title: 'Advanced Data Science & AI',
      description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects',
      category: 'AI/ML',
      duration: '12 weeks',
      level: 'Intermediate',
      mode: 'Online/Offline',
      price: '₹85,000',
      originalPrice: '₹1,20,000',
      rating: 4.8,
      students: 245,
      color: 'from-blue-500 to-blue-600',
      icon: <Brain className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included', 'Combo Offer'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 2,
      slug: 'full-stack-development',
      title: 'Full Stack Web Development',
      description: 'Build end-to-end web applications with React, Node.js, and modern technologies',
      category: 'Full Stack',
      duration: '16 weeks',
      level: 'Beginner',
      mode: 'Online/Offline',
      price: '₹65,000',
      originalPrice: '₹90,000',
      rating: 4.9,
      students: 320,
      color: 'from-green-500 to-green-600',
      icon: <Code className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      slug: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & DevOps',
      description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications',
      category: 'Infra & Cloud',
      duration: '10 weeks',
      level: 'Intermediate',
      mode: 'Online',
      price: '₹55,000',
      originalPrice: '₹75,000',
      rating: 4.7,
      students: 180,
      color: 'from-orange-500 to-orange-600',
      icon: <Cloud className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 4,
      slug: 'machine-learning-specialization',
      title: 'Machine Learning Specialization',
      description: 'Deep dive into ML algorithms, neural networks, and practical implementations',
      category: 'AI/ML',
      duration: '14 weeks',
      level: 'Advanced',
      mode: 'Online/Offline',
      price: '₹95,000',
      originalPrice: '₹1,30,000',
      rating: 4.9,
      students: 156,
      color: 'from-blue-500 to-blue-600',
      icon: <Database className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included', 'Advanced Track'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 5,
      slug: 'cybersecurity-fundamentals',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn ethical hacking, security analysis, and digital forensics',
      category: 'Specialized',
      duration: '8 weeks',
      level: 'Beginner',
      mode: 'Online',
      price: '₹45,000',
      originalPrice: '₹60,000',
      rating: 4.6,
      students: 98,
      color: 'from-red-500 to-red-600',
      icon: <Shield className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 6,
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Build native iOS and Android apps with React Native and Flutter',
      category: 'Full Stack',
      duration: '12 weeks',
      level: 'Intermediate',
      mode: 'Online/Offline',
      price: '₹70,000',
      originalPrice: '₹95,000',
      rating: 4.8,
      students: 142,
      color: 'from-green-500 to-green-600',
      icon: <Smartphone className="w-6 h-6" />,
      tags: ['Job Ready', 'Mentorship Included'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      (filters.category === '' || course.category === filters.category) &&
      (filters.duration === '' || course.duration === filters.duration) &&
      (filters.level === '' || course.level === filters.level) &&
      (filters.mode === '' || course.mode.includes(filters.mode))
    );
  });

  const CourseCard = ({ course, isListView }: { course: any, isListView: boolean }) => (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden ${isListView ? 'flex' : ''}`}>
      <div className={`relative ${isListView ? 'w-80' : 'w-full h-48'} overflow-hidden`}>
        <img
          src={course.image}
          alt={course.title}
          className={`${isListView ? 'w-full h-full' : 'w-full h-48'} object-cover group-hover:scale-110 transition-transform duration-300`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            {course.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {course.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <div className={`bg-gradient-to-r ${course.color} w-10 h-10 rounded-xl flex items-center justify-center text-white`}>
            {course.icon}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{course.rating}</span>
            <span className="text-xs text-gray-500">({course.students})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">{course.level}</span>
          </div>
          <div className="text-right">
            <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
            <div className="text-xl font-bold text-gray-900">{course.price}</div>
          </div>
        </div>
        
        <Link
          to={`/courses/${course.slug}`}
          className="block text-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SEO 
        title={pageConfigs.courses.title}
        description={pageConfigs.courses.description}
        keywords={pageConfigs.courses.keywords}
        breadcrumbs={generateBreadcrumbs('/courses')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
          <p className="text-xl text-gray-600">Choose from our comprehensive range of job-ready programs</p>
        </div>

        {/* Filters and View Toggle */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Infra & Cloud">Infra & Cloud</option>
                <option value="Specialized">Specialized</option>
              </select>
              
              <select
                value={filters.duration}
                onChange={(e) => setFilters({...filters, duration: e.target.value})}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any Duration</option>
                <option value="8 weeks">8 weeks</option>
                <option value="10 weeks">10 weeks</option>
                <option value="12 weeks">12 weeks</option>
                <option value="14 weeks">14 weeks</option>
                <option value="16 weeks">16 weeks</option>
              </select>
              
              <select
                value={filters.level}
                onChange={(e) => setFilters({...filters, level: e.target.value})}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              
              <select
                value={filters.mode}
                onChange={(e) => setFilters({...filters, mode: e.target.value})}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Learning Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
          {Object.values(filters).some(filter => filter !== '') && (
            <button
              onClick={() => setFilters({category: '', duration: '', level: '', mode: ''})}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
            >
              <Filter className="w-4 h-4" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Courses Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} isListView={viewMode === 'list'} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
            <button
              onClick={() => setFilters({category: '', duration: '', level: '', mode: ''})}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;