exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              path
            }
            html
          }
        }
      }
    }
  `);
  const services = result.data.allMarkdownRemark.edges;
  services.forEach(function({ node }) {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: require.resolve("./src/templates/services.js"),
      context: {
        id: node.id
      }
    });
  });
};
