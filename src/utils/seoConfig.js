// SEO Configuration and Utilities
export const siteConfig = {
  name: 'Udaan Tech Academy',
  title: 'Udaan Tech Academy - Launch Your Tech Career in 6 Months',
  description: 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Courses in Data Science, Full Stack Development, Cloud Infrastructure & more.',
  url: 'https://udaantechacademy.com',
  ogImage: 'https://udaantechacademy.com/og-image.jpg',
  keywords: 'tech courses, data science course, full stack development, cloud computing, machine learning, coding bootcamp, career change, tech training, programming courses, online tech education',
  author: 'Udaan Tech Academy',
  social: {
    twitter: '@udaantechacademy',
    facebook: 'https://www.facebook.com/udaantechacademy',
    linkedin: 'https://www.linkedin.com/company/udaantechacademy',
    instagram: 'https://www.instagram.com/udaantechacademy'
  }
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'Launch Your Tech Career in 6 Months',
    description: 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Start your tech journey today.',
    keywords: 'tech career, coding bootcamp, data science course, full stack development, career change, tech training, programming courses'
  },
  courses: {
    title: 'Tech Courses - Data Science, Full Stack, Cloud & More',
    description: 'Explore our comprehensive tech courses designed for job readiness. Data Science, Full Stack Development, Cloud Infrastructure, Machine Learning & more.',
    keywords: 'tech courses, data science course, full stack development course, cloud computing course, machine learning course, programming courses'
  },
  'career-tracks': {
    title: 'Career Tracks - Complete Job-Ready Programs',
    description: 'Comprehensive career tracks combining multiple courses for complete career transformation. AI Engineer, Full Stack Engineer, Cloud Infrastructure tracks.',
    keywords: 'career tracks, tech career path, AI engineer track, full stack engineer track, cloud infrastructure track, job ready programs'
  },
  mentorship: {
    title: '1:1 Mentorship Program - Learn from Industry Experts',
    description: 'Get personalized guidance from industry experts working at Google, Microsoft, Amazon. 1:1 mentorship sessions, career planning, and interview preparation.',
    keywords: '1:1 mentorship, tech mentorship, industry experts, career guidance, interview preparation, tech mentor'
  },
  blog: {
    title: 'Tech Blog - Career Tips, Tutorials & Industry Insights',
    description: 'Stay updated with latest tech trends, career advice, tutorials, and success stories. Expert insights on Data Science, AI, Full Stack Development & more.',
    keywords: 'tech blog, career tips, programming tutorials, tech trends, data science blog, AI trends, coding tutorials'
  },
  'enroll-now': {
    title: 'Enroll Now - Start Your Tech Career Journey',
    description: 'Ready to transform your career? Enroll in our job-oriented tech courses with expert mentorship and guaranteed placement support.',
    keywords: 'enroll tech course, join coding bootcamp, tech course admission, career change program, tech training enrollment'
  }
};

// Generate breadcrumbs for different pages
export const generateBreadcrumbs = (pathname) => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segment to readable name
    let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Special cases for better naming
    if (segment === 'career-tracks') name = 'Career Tracks';
    if (segment === 'enroll-now') name = 'Enroll Now';
    
    breadcrumbs.push({
      name,
      url: currentPath
    });
  });

  return breadcrumbs;
};

// Course-specific SEO data
export const coursesSEO = {
  'data-science-advanced': {
    title: 'Advanced Data Science & AI Course - 12 Weeks Job-Ready Program',
    description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects. 95% placement rate, expert mentorship, and industry-recognized certification.',
    keywords: 'data science course, machine learning course, AI course, deep learning course, data science training, ML engineer course',
    course: {
      title: 'Advanced Data Science & AI',
      description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects',
      duration: '12 weeks',
      level: 'Intermediate',
      mode: 'Online/Offline',
      price: '₹85,000',
      rating: 4.8,
      students: 245
    }
  },
  'full-stack-development': {
    title: 'Full Stack Web Development Course - React, Node.js & More',
    description: 'Build end-to-end web applications with React, Node.js, and modern technologies. 16-week comprehensive program with real-world projects.',
    keywords: 'full stack course, web development course, React course, Node.js course, JavaScript course, full stack developer training',
    course: {
      title: 'Full Stack Web Development',
      description: 'Build end-to-end web applications with React, Node.js, and modern technologies',
      duration: '16 weeks',
      level: 'Beginner',
      mode: 'Online/Offline',
      price: '₹65,000',
      rating: 4.9,
      students: 320
    }
  },
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure & DevOps Course - AWS, Azure, Kubernetes',
    description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications. 10-week intensive program with hands-on labs.',
    keywords: 'cloud computing course, AWS course, DevOps course, Kubernetes course, cloud infrastructure training, Azure course',
    course: {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications',
      duration: '10 weeks',
      level: 'Intermediate',
      mode: 'Online',
      price: '₹55,000',
      rating: 4.7,
      students: 180
    }
  }
};

// Generate sitemap data
export const generateSitemapData = () => {
  const baseUrl = 'https://udaantechacademy.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/courses', priority: 0.9, changefreq: 'weekly' },
    { url: '/career-tracks', priority: 0.9, changefreq: 'monthly' },
    { url: '/mentorship', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
    { url: '/enroll-now', priority: 0.9, changefreq: 'monthly' },
    // Add course pages
    { url: '/courses/data-science-advanced', priority: 0.8, changefreq: 'monthly' },
    { url: '/courses/full-stack-development', priority: 0.8, changefreq: 'monthly' },
    { url: '/courses/cloud-infrastructure', priority: 0.8, changefreq: 'monthly' }
  ];

  return pages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString()
  }));
};