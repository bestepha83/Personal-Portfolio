module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ben-portfolio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    
    //styles
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,

    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
