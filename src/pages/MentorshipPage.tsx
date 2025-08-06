import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Star, Calendar, MessageCircle, Video, Award, Target, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { pageConfigs, generateBreadcrumbs } from '../utils/seoConfig';

const MentorshipPage = () => {
  const mentors = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Senior Data Scientist',
      company: 'Google',
      experience: '12+ years',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 4.9,
      students: 85,
      bio: 'Leading AI research at Google with expertise in computer vision and natural language processing.'
    },
    {
      name: 'Neha Gupta',
      role: 'Full Stack Architect',
      company: 'Microsoft',
      experience: '10+ years',
      expertise: ['React', 'Node.js', 'Cloud Architecture'],
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 4.8,
      students: 92,
      bio: 'Building scalable web applications and mentoring developers in modern web technologies.'
    },
    {
      name: 'Arjun Patel',
      role: 'Cloud Solutions Architect',
      company: 'Amazon Web Services',
      experience: '8+ years',
      expertise: ['AWS', 'Kubernetes', 'DevOps'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 4.9,
      students: 76,
      bio: 'Designing cloud infrastructure for enterprise clients and passionate about DevOps practices.'
    },
    {
      name: 'Priya Sharma',
      role: 'AI Research Scientist',
      company: 'Meta',
      experience: '9+ years',
      expertise: ['NLP', 'Generative AI', 'PyTorch'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 4.9,
      students: 68,
      bio: 'Developing cutting-edge AI models and leading research in conversational AI systems.'
    }
  ];

  const mentorshipBenefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '1:1 Personal Guidance',
      description: 'Get individual attention and personalized learning path from industry experts',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Career Path Planning',
      description: 'Strategic guidance on career transitions, skill development, and job opportunities',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Insights',
      description: 'Learn about real-world challenges, best practices, and emerging technologies',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Interview Preparation',
      description: 'Mock interviews, resume reviews, and technical interview practice sessions',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const mentorshipProcess = [
    {
      step: 1,
      title: 'Mentor Assignment',
      description: 'Get matched with an industry expert based on your course and career goals',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Initial Assessment',
      description: 'Discuss your background, goals, and create a personalized learning plan',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Weekly Sessions',
      description: 'Regular 1:1 sessions to track progress, solve doubts, and get guidance',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Career Support',
      description: 'Resume building, interview prep, and job placement assistance',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const sessionTypes = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Calls',
      description: 'Face-to-face mentorship sessions for deep discussions and code reviews',
      duration: '45-60 minutes'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Chat Support',
      description: 'Quick questions and continuous support via dedicated chat channels',
      duration: '24/7 availability'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Code Reviews',
      description: 'Detailed feedback on your projects and assignments',
      duration: '2-3 per week'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Career Planning',
      description: 'Strategic sessions for career guidance and job preparation',
      duration: 'Monthly sessions'
    }
  ];

  const testimonials = [
    {
      name: 'Amit Kumar',
      role: 'Data Scientist at Flipkart',
      content: 'My mentor guided me through complex ML concepts and helped me land my dream job. The personalized approach made all the difference.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      mentor: 'Dr. Rajesh Kumar'
    },
    {
      name: 'Sneha Reddy',
      role: 'Full Stack Developer at Zomato',
      content: 'The weekly mentorship sessions were incredibly valuable. My mentor helped me understand industry best practices and build production-ready applications.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      mentor: 'Neha Gupta'
    },
    {
      name: 'Vikram Singh',
      role: 'DevOps Engineer at Swiggy',
      content: 'The mentorship program exceeded my expectations. Real-world insights and career guidance helped me transition from development to DevOps successfully.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      mentor: 'Arjun Patel'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageConfigs.mentorship.title}
        description={pageConfigs.mentorship.description}
        keywords={pageConfigs.mentorship.keywords}
        breadcrumbs={generateBreadcrumbs('/mentorship')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                1:1 <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Mentorship</span> Program
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized guidance from industry experts working at top tech companies
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-blue-200">Expert Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-blue-200">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">1:1</div>
                  <div className="text-blue-200">Personal Attention</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/enroll-now"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  Talk to Advisor
                  <MessageCircle className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">What You Get</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Weekly 1:1 video sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>24/7 chat support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Code reviews & feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Career guidance & planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Interview preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Resume building support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Mentorship Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Mentorship Works</h2>
            <p className="text-xl text-gray-600">A structured approach to accelerate your learning and career growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorshipProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 relative">
                  {process.icon}
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < mentorshipProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-200 border-y-2 border-y-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Mentorship Matters</h2>
            <p className="text-xl text-gray-600">Accelerate your learning with personalized guidance and industry insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentorshipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
            <p className="text-xl text-gray-600">Learn from industry experts working at top technology companies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{mentor.role}</p>
                      <p className="text-gray-600 mb-2">{mentor.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{mentor.experience}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{mentor.rating}</span>
                        </div>
                        <span>{mentor.students} students</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{mentor.bio}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center bg-gray-50 rounded-xl p-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{mentor.rating}</div>
                      <div className="text-gray-600 text-sm">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{mentor.students}</div>
                      <div className="text-gray-600 text-sm">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Mentorship Sessions</h2>
            <p className="text-xl text-gray-600">Multiple touchpoints to ensure continuous support and guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionTypes.map((session, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {session.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{session.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{session.description}</p>
                <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {session.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students who transformed their careers with mentorship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">
                    Mentored by: {testimonial.mentor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Personalized Mentorship?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Join our mentorship program and accelerate your career with expert guidance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">1 Hour</div>
              <div className="text-blue-200">Weekly Sessions</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">1:1</div>
              <div className="text-blue-200">Personal Attention</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">Expert</div>
              <div className="text-blue-200">Industry Mentors</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/enroll-now"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Start Your Mentorship Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Talk to an Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;