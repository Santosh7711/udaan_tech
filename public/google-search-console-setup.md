# Google Search Console Setup Guide

## Step 1: Create Google Search Console Account
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account
3. Click "Add Property"
4. Choose "URL prefix" and enter: `https://udaantechacademy.com`

## Step 2: Verify Website Ownership
Choose one of these verification methods:

### Method 1: HTML Meta Tag (Recommended)
1. In Google Search Console, select "HTML tag" verification method
2. Copy the verification code (looks like: `google-site-verification=abc123...`)
3. Replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `src/components/SEO.jsx` with your actual code
4. Deploy your website
5. Click "Verify" in Google Search Console

### Method 2: HTML File Upload
1. Download the HTML verification file from Google Search Console
2. Upload it to your website's root directory (public folder)
3. Click "Verify" in Google Search Console

## Step 3: Submit Sitemap
1. After verification, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"

## Step 4: Set Up Additional Tools

### Google Analytics Integration
1. Create a Google Analytics account
2. Get your GA4 Measurement ID
3. Add this code to your `index.html` in the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your website
3. Get verification code and replace `YOUR_BING_VERIFICATION_CODE` in SEO.jsx

### Yandex Webmaster
1. Go to [Yandex Webmaster](https://webmaster.yandex.com/)
2. Add your website
3. Get verification code and replace `YOUR_YANDEX_VERIFICATION_CODE` in SEO.jsx

## Step 5: Monitor Performance
1. Check "Performance" tab for search analytics
2. Monitor "Coverage" for indexing issues
3. Use "URL Inspection" to test specific pages
4. Set up email alerts for critical issues

## Important Notes
- It may take 24-48 hours for Google to start showing data
- Submit new pages via "URL Inspection" > "Request Indexing"
- Update sitemap.xml when adding new pages
- Monitor Core Web Vitals in the "Experience" section

## SEO Best Practices Implemented
✅ Comprehensive meta tags
✅ Open Graph and Twitter Card tags
✅ Structured data (JSON-LD)
✅ Sitemap.xml
✅ Robots.txt
✅ Canonical URLs
✅ Breadcrumb navigation
✅ Mobile-friendly meta tags
✅ Performance optimization tags
✅ Social media integration