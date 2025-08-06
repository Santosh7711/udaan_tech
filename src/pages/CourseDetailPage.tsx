import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, CheckCircle, Download, Calendar, User, Building, Award, ArrowRight, Play, Code } from 'lucide-react';
import SEO from '../components/SEO';
import { coursesSEO, generateBreadcrumbs } from '../utils/seoConfig';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('beginner');

  // Mock course data - in a real app, this would be fetched based on the slug
  const course = {
    title: 'Advanced Data Science & AI',
    description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects and industry mentorship',
    duration: '12 weeks',
    level: 'Intermediate',
    mode: 'Online/Offline',
    price: '₹85,000',
    originalPrice: '₹1,20,000',
    rating: 4.8,
    students: 245,
    nextBatch: 'March 15, 2024',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    mentor: {
      name: 'Dr. Priya Sharma',
      role: 'Senior Data Scientist',
      company: 'Google',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  };

  const highlights = [
    'Get job-ready in 12 weeks',
    '1:1 mentorship sessions',
    'Real-world capstone projects',
    'Industry-recognized certification',
    '95% placement rate'
  ];

  const curriculum = {
    beginner: [
      { week: '1-2', title: 'Python Fundamentals & Data Structures', topics: ['Python basics', 'NumPy, Pandas', 'Data manipulation'] },
      { week: '3-4', title: 'Statistics & Probability', topics: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing'] },
      { week: '5-6', title: 'Data Visualization', topics: ['Matplotlib, Seaborn', 'Interactive plots', 'Dashboard creation'] }
    ],
    intermediate: [
      { week: '7-8', title: 'Machine Learning Fundamentals', topics: ['Supervised learning', 'Classification & regression', 'Model evaluation'] },
      { week: '9-10', title: 'Advanced ML Algorithms', topics: ['Ensemble methods', 'Feature engineering', 'Cross-validation'] },
      { week: '11-12', title: 'Neural Networks & Deep Learning', topics: ['Neural network basics', 'TensorFlow/PyTorch', 'CNN & RNN'] }
    ],
    advanced: [
      { week: '13-14', title: 'Computer Vision & NLP', topics: ['Image processing', 'Object detection', 'Text analytics'] },
      { week: '15-16', title: 'MLOps & Deployment', topics: ['Model deployment', 'CI/CD for ML', 'Monitoring & scaling'] },
      { week: '17-18', title: 'Capstone Project', topics: ['End-to-end ML project', 'Presentation skills', 'Portfolio building'] }
    ]
  };

  const techStack = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'AWS', 'Docker', 'Git'];

  const projects = [
    {
      title: 'Healthcare Prediction System',
      description: 'Build an AI model to predict disease outcomes using patient data and medical records',
      technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Recommendation Engine',
      description: 'Develop a collaborative filtering system for e-commerce product recommendations',
      technologies: ['Python', 'Spark', 'MongoDB', 'AWS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const targetAudience = [
    { icon: <User className="w-6 h-6" />, title: 'Recent Graduates', description: 'Start your tech career with AI/ML' },
    { icon: <Building className="w-6 h-6" />, title: 'Working Professionals', description: 'Transition to data science roles' },
    { icon: <Code className="w-6 h-6" />, title: 'Software Developers', description: 'Add AI skills to your toolkit' }
  ];

  const jobRoles = ['Data Scientist', 'Machine Learning Engineer', 'AI Research Scientist', 'Data Analyst', 'Business Intelligence Analyst'];

  const certifications = ['Google Cloud AI/ML', 'AWS Machine Learning', 'Microsoft Azure AI', 'Udaan Tech Academy Certificate'];

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'Data Scientist at Microsoft',
      content: 'The curriculum is incredibly comprehensive and the mentorship made all the difference in my career transition.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Sneha Reddy',
      role: 'ML Engineer at Amazon',
      content: 'The hands-on projects and real-world applications gave me the confidence to excel in interviews.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  // Get SEO data for this course
  const courseSEO = coursesSEO[slug as keyof typeof coursesSEO];
  const breadcrumbs = generateBreadcrumbs(`/courses/${slug}`);

  return (
    <div className="min-h-screen bg-gray-50">
      {courseSEO && (
        <SEO 
          title={courseSEO.title}
          description={courseSEO.description}
          keywords={courseSEO.keywords}
          course={courseSEO.course}
          breadcrumbs={breadcrumbs}
        />
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Next Batch: {course.nextBatch}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{course.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-sm text-blue-200">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-sm text-blue-200">Level</p>
                  <p className="font-semibold">{course.level}</p>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-sm text-blue-200">Rating</p>
                  <p className="font-semibold">{course.rating}/5</p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-sm text-blue-200">Students</p>
                  <p className="font-semibold">{course.students}+</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/enroll-now"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download Syllabus
                </button>
                <button className="border-2 border-blue-300 text-blue-300 px-8 py-3 rounded-full font-semibold hover:bg-blue-300 hover:text-gray-900 transition-all duration-200 flex items-center justify-center">
                  <Calendar className="mr-2 w-5 h-5" />
                  Free Career Call
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8" />
                </button>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-gray-500 text-sm line-through">{course.originalPrice}</p>
                  <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                  <p className="text-green-600 text-sm font-semibold">30% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Advanced Python programming',
                  'Machine learning algorithms',
                  'Deep learning with neural networks',
                  'Computer vision techniques',
                  'Natural language processing',
                  'MLOps and model deployment',
                  'Big data processing',
                  'AI project management'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex border-b">
                  {Object.keys(curriculum).map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveTab(level)}
                      className={`flex-1 py-4 px-6 font-semibold capitalize transition-colors ${
                        activeTab === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {curriculum[activeTab as keyof typeof curriculum].map((module, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            Week {module.week}
                          </span>
                        </div>
                        <ul className="text-gray-600 space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Audience */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who is This Course For?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {audience.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Job Roles & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Roles You Can Apply For</h2>
                <div className="space-y-3">
                  {jobRoles.map((role, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications Prepared For</h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
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
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Mentor Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Mentor</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={course.mentor.image}
                    alt={course.mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.mentor.name}</h4>
                    <p className="text-blue-600 text-sm">{course.mentor.role}</p>
                    <p className="text-gray-500 text-sm">{course.mentor.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  10+ years of experience in AI/ML with expertise in deep learning and computer vision.
                </p>
              </div>

              {/* Course Schedule */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Next Batch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Starts: {course.nextBatch}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Mode: {course.mode}</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Join {course.students}+ students who've transformed their careers
                </p>
                <div className="space-y-3">
                  <Link
                    to="/enroll-now"
                    className="block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <button className="block w-full border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Book Free Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;