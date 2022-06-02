module.exports = {
  reactStrictMode: true,
}

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';
`


const securityHeaders = [
{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
},

{
  key: 'X-XSS-Protection',
  value: '1; mode=block'
},

{
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
},


{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
},

    {
  key: 'X-Content-Type-Options',
  value: 'nosniff'
},

{
  key: 'Referrer-Policy',
  value: 'origin-when-cross-origin'
},

]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
