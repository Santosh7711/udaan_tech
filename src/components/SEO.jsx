import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  article = false,
  course = null,
  breadcrumbs = []
}) => {
  const location = useLocation();
  const currentUrl = `https://udaantechacademy.com${location.pathname}`;
  
  // Default values
  const defaultTitle = 'Udaan Tech Academy - Launch Your Tech Career in 6 Months';
  const defaultDescription = 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Courses in Data Science, Full Stack Development, Cloud Infrastructure & more.';
  const defaultKeywords = 'tech courses, data science course, full stack development, cloud computing, machine learning, coding bootcamp, career change, tech training, programming courses, online tech education';
  const defaultImage = 'https://udaantechacademy.com/og-image.jpg';
  
  const seoTitle = title ? `${title} | Udaan Tech Academy` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;

  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Udaan Tech Academy",
    "alternateName": "Udaan Tech",
    "url": "https://udaantechacademy.com",
    "logo": "https://udaantechacademy.com/logo.png",
    "description": "Leading tech training institute offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure, and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street, Innovation Hub",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@udaantechacademy.com"
    },
    "sameAs": [
      "https://www.facebook.com/udaantechacademy",
      "https://www.twitter.com/udaantechacademy",
      "https://www.linkedin.com/company/udaantechacademy",
      "https://www.instagram.com/udaantechacademy"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "slogan": "Launch Your Tech Career"
  };

  // Structured Data for Course (if course prop is provided)
  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Udaan Tech Academy",
      "url": "https://udaantechacademy.com"
    },
    "courseMode": course.mode || "online",
    "educationalLevel": course.level || "intermediate",
    "timeRequired": course.duration,
    "offers": {
      "@type": "Offer",
      "price": course.price?.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": course.rating ? {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "reviewCount": course.students || 100,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://udaantechacademy.com${crumb.url}`
    }))
  } : null;

  // Article Schema (for blog posts)
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": seoImage,
    "author": {
      "@type": "Person",
      "name": author || "Udaan Tech Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Udaan Tech Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://udaantechacademy.com/logo.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Udaan Tech Academy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Udaan Tech Academy" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@udaantechacademy" />
      <meta name="twitter:creator" content="@udaantechacademy" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Udaan Tech Academy" />
      <meta name="apple-mobile-web-app-title" content="Udaan Tech Academy" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Language and Geographic Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content={author || "Udaan Tech Academy"} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content="Technology Education" />
          <meta property="article:tag" content={seoKeywords} />
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />

      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

      {/* Yandex Webmaster */}
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default SEO;