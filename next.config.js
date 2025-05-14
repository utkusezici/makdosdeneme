const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  // publicRuntimeConfig: {
  //   backendUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
  // },
  // async rewrites() { dile göre url değiştirmek için
  //   return [
  //     {
  //       source: '/tr/hakkimizda/sirket-profili',
  //       destination: '/tr/about-us/company-profile',
  //       locale: false,
  //     },
  //     {
  //       source: '/en/about-us/company-profile',
  //       destination: '/en/about-us/company-profile',
  //       locale: false,
  //     },
     
  //   ];
  // },

  // images: { // image domainlerini belirtmek için next image kullanırken
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   domains: ['makdos.tech','192.168.1.201', 'api.makdos.tech', 'img.makdos.tech'],
  //   minimumCacheTTL: 31536000
  // },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,

};
