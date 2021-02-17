module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    "abhi-plugin-gatsby-preview",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/dashboard/previews/login": [],
        },
        transformHeaders: (headers, path) => {
          if (new RegExp("/dashboard/previews/login").test(path)) {
            return headers
          }

          return [
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
            ...headers,
          ]
        },
      },
    },
    `abhi-plugin-fastly`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
