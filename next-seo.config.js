/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '386a8c1f48c3bf9c492898e78e52fdf6a0a66b2d',
    },
    {
      name: 'google-site-verification',
      content: 'Q2bHOLs6jaFYy4NK_gCCdUCjf270wQ8zYE_nerDd7lw',
    },
  ],
};
