import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";

export default ({ data }) => {
  const { service } = data;
  const title = service.frontmatter.title;
  return (
    <Layout headerClass="relative bg-white" bodyClass="px-0 md:px-0 lg:px-0">
      <SEO title={title} />

      <div
        className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover"
      >
        <div className="mt-30 bg-white w-full pb-16 mb-20">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16">
            <h2 className="text-3xl text-indigo-700">
              {title}
            </h2>
            <div className="markdown-body">
              <div dangerouslySetInnerHTML={{ __html: service.html }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    service: markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`;
