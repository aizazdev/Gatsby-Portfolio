 
exports.createPages = async function ({ actions, graphql}) {
    const result = await graphql(`
        query BlogPosts {
            allContentfulBlogPosts {
            nodes {
                blogDescription {
                raw
                }
                blogImage {
                file {
                    url
                }
                title
                updatedAt
                }
            }
            }
        }
      
    `);
    actions.createPage({

        path: "my-dynamic-page",
        component: require.resolve(`./src/pages/templates/dynamic-page.js`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Aizaz",
            data: result
         },
    });

    const pages = [
        {name: "React", slug: "react-blog", desc: "this is react page", createdBy: "Aizaz" },
        {name: "Vue", slug: "vue-blog", desc: "this is vue page", createdBy: "Bilal" },
        {name: "Node", slug: "node-blog", desc: "this is node page", createdBy: "Asad" },
        {name: "Gatsby", slug: "gatsby-blog", desc: "this is gatsby page", createdBy: "Aizaz" },
    ];
    pages.map((page)=> {
        actions.createPage({

            path: `blog/${page.slug}`,
            component: require.resolve(`./src/pages/templates/dynamic-page.js`),
            context: { 
                // Data passed to context is available
                // in pageContext props of the template component
                ...page,
             },
        });
            
    })
    console.log("End of Gatsby Node File");
}
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    console.log("Page" , page);
    console.log("Actions ", actions);
    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }