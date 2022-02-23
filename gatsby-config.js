module.exports = {
  pathPrefix: '',
  siteMetadata: {
      title: `BPK Gatsby docs`,
    siteUrl: `https://zgeor.github.io`
  },
  plugins: [
  "gatsby-plugin-sass", 
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  { resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'BPK Gatsby docs site name',
        subtitle: 'BPK Gatsby Docs',
        description: 'A test static site',
        baseUrl: 'https://zgeor.github.io',
        githubRepo: 'zgeor/gatsby-docs',
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
            'whats-new'
          ],
          Features: [
          ]
        }
      }
    }
  ]
};