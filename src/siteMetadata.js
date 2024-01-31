/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Trattoria Goduu",
  author: "Igor Cangussu",
  headerTitle: "Trattoria Goduu",
  description: "Check out our cosy restaurant",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://tailwind-nextjs-starter-blog.vercel.app",
  siteRepo: "https://github.com/Goduu/trattoria-goduu",
  siteLogo: "/static/images/logo.svg",
  socialBanner: "/static/images/twitter-card.png",
  mastodon: "https://mastodon.social/@mastodonuser",
  email: "idcangussu+tree@hotmail.com",
  github: "https://github.com/Goduu/trattoria-goduu",
  twitter: "https://twitter.com/Goduu_",
  linkedin: "https://www.linkedin.com/in/igor-cangussu/",
  instagram: "https://www.instagram.com/idcangussu/",
  locale: "en-US",
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  newsletter: {
    provider: "buttondown",
  },
  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
      lang: "en",
    },
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
  },
};

module.exports = siteMetadata;
