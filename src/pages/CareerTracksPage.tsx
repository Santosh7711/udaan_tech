import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, CheckCircle, ArrowRight, Brain, Code, Cloud, Target, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { pageConfigs, generateBreadcrumbs } from '../utils/seoConfig';

const CareerTracksPage = () => {
  const tracks = [
    {
      id: 1,
      name: 'AI Engineer Track',
      description: 'Master the complete AI/ML pipeline from data preprocessing to model deployment',
      duration: '24 weeks',
      courses: [
        'Python for Data Science',
        'Machine Learning Fundamentals',
        'Deep Learning & Neural Networks',
        'Computer Vision',
        'Natural Language Processing'
      ],
      outcomes: [
        'Build and deploy ML models',
        'Work with large datasets',
        'Implement deep learning solutions',
        'Create AI-powered applications'
      ],
      capstoneProjects: [
        'AI-powered recommendation system',
        'Computer vision for healthcare',
        'Chatbot with NLP capabilities'
      ],
      jobRoles: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Research Scientist'],
      originalPrice: '₹2,50,000',
      price: '₹1,50,000',
      discount: '40% OFF',
      color: 'from-blue-500 to-purple-600',
      icon: <Brain className="w-8 h-8" />,
      popularity: 'Most Popular',
      avgSalary: '₹12-18 LPA'
    },
    {
      id: 2,
      name: 'Full Stack Engineer Track',
      description: 'Become a complete web developer with modern frontend and backend technologies',
      duration: '20 weeks',
      courses: [
        'Frontend Development (React)',
        'Backend Development (Node.js)',
        'Database Management',
        'Cloud Deployment',
        'DevOps Fundamentals'
      ],
      outcomes: [
        'Build responsive web applications',
        'Design RESTful APIs',
        'Deploy scalable applications',
        'Implement best practices'
      ],
      capstoneProjects: [
        'E-commerce platform',
        'Social media application',
        'Project management tool'
      ],
      jobRoles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Web Developer'],
      originalPrice: '₹1,80,000',
      price: '₹1,20,000',
      discount: '33% OFF',
      color: 'from-green-500 to-teal-600',
      icon: <Code className="w-8 h-8" />,
      popularity: 'High Demand',
      avgSalary: '₹8-15 LPA'
    },
    {
      id: 3,
      name: 'Cloud Infrastructure Track',
      description: 'Master cloud technologies and DevOps practices for scalable system design',
      duration: '16 weeks',
      courses: [
        'AWS Cloud Fundamentals',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Security'
      ],
      outcomes: [
        'Design cloud architectures',
        'Implement DevOps practices',
        'Automate deployment processes',
        'Ensure system reliability'
      ],
      capstoneProjects: [
        'Microservices architecture',
        'Auto-scaling web application',
        'Multi-cloud deployment'
      ],
      jobRoles: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Infrastructure Engineer'],
      originalPrice: '₹1,50,000',
      price: '₹95,000',
      discount: '37% OFF',
      color: 'from-orange-500 to-red-600',
      icon: <Cloud className="w-8 h-8" />,
      popularity: 'Fast Growing',
      avgSalary: '₹10-16 LPA'
    },
    {
      id: 4,
      name: 'Data Analytics Track',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization',
      duration: '18 weeks',
      courses: [
        'Data Analysis with Python',
        'Statistics & Probability',
        'Data Visualization',
        'Business Intelligence',
        'Advanced Analytics'
      ],
      outcomes: [
        'Analyze complex datasets',
        'Create interactive dashboards',
        'Apply statistical methods',
        'Generate business insights'
      ],
      capstoneProjects: [
        'Sales performance dashboard',
        'Market research analysis',
        'Customer behavior prediction'
      ],
      jobRoles: ['Data Analyst', 'Business Analyst', 'Business Intelligence Analyst', 'Data Consultant'],
      originalPrice: '₹1,20,000',
      price: '₹75,000',
      discount: '38% OFF',
      color: 'from-purple-500 to-pink-600',
      icon: <TrendingUp className="w-8 h-8" />,
      popularity: 'Entry Level',
      avgSalary: '₹6-12 LPA'
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Comprehensive Learning Path',
      description: 'Structured curriculum covering all essential skills for your target role'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '1:1 Mentorship',
      description: 'Personal guidance from industry experts throughout your journey'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Portfolio Projects',
      description: 'Build impressive capstone projects to showcase your skills'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Support',
      description: 'Resume building, interview prep, and job placement assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageConfigs['career-tracks'].title}
        description={pageConfigs['career-tracks'].description}
        keywords={pageConfigs['career-tracks'].keywords}
        breadcrumbs={generateBreadcrumbs('/career-tracks')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Tracks</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive job-ready programs that combine multiple courses for complete career transformation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">95%</div>
              <div className="text-blue-200">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">₹12L</div>
              <div className="text-blue-200">Average Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">6-24</div>
              <div className="text-blue-200">Weeks Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Career Tracks?</h2>
            <p className="text-xl text-gray-600">Structured learning paths designed for maximum career impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tracks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Career Track</h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed to make you job-ready</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div key={track.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${track.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {track.popularity}
                    </span>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      {track.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{track.name}</h3>
                      <p className="text-white/90">{track.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Duration</span>
                      </div>
                      <div className="text-lg font-semibold">{track.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">Avg Salary</span>
                      </div>
                      <div className="text-lg font-semibold">{track.avgSalary}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Courses Included */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Courses Included</h4>
                    <div className="space-y-2">
                      {track.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">What You'll Master</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {track.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Roles */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.jobRoles.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Projects */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Capstone Projects</h4>
                    <div className="space-y-2">
                      {track.capstoneProjects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center space-x-3">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-gray-500 line-through text-lg">{track.originalPrice}</span>
                        <div className="text-3xl font-bold text-gray-900">{track.price}</div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                        {track.discount}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Complete track with all courses, mentorship, and career support
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/enroll-now"
                    className={`block bg-gradient-to-r ${track.color} text-white px-8 py-4 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center`}
                  >
                    Enroll in Track
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Not Sure Which Track is Right for You?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Book a free career consultation call with our experts to find your perfect learning path
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Book Free Career Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <Link
              to="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
            >
              Browse Individual Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerTracksPage;