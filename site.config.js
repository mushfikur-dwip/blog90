const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mushfikur Rahman",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjozLCJub3NlIjowLCJtb3V0aCI6MiwiZXllcyI6MTIsImV5ZWJyb3dzIjoxMiwiZ2xhc3NlcyI6MCwiaGFpciI6MzUsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Web developer",
    bio: "I develop everything using node.",
    email: "mushfikurrahmandwip@gmail.com",
    linkedin: "mushfikur_dwip",
    github: "mushfikur-dwip",
    instagram: "mushfikur_dwip",
  },
  projects: [
    {
      name: `KajKhuji.com.bd`,
      href: "https://kajkhuji.com.bd",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Mushfikur Rahman",
    description: "welcome!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
