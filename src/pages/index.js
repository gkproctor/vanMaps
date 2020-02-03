import React from "react";
import ios from "../images/appleMapsIconLight.png";
import android from "../images/gNavIconLight.png";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full p-2">
      <Link
        to={url}
        className="text-2xl text-black-700 hover:text-indogo-600 hover:underline"
      >
        <div
          className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>{children}</p>
        </div>
      </Link>
    </div>
  );
};

function Index({ data }) {
  const services = data.services.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div
        className="min-h-screen pt-12 sm:pt-12 md:pt-24 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-10 font-serif font-hairline items-center">
          <h1 className="text-3xl md:text-3xl text-black-700 leading-tight">
            Van Maps
          </h1>
          <h2 className="text-xl md:text-2xl text-black-700 leading-tight mb-3">
            Helping drivers get to the train location to pick-up the crew.
          </h2>
          <p className="text-center">
            Select the navigation app that you use.
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-5/12 xl:1/4 mt-3 items-center">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <Link to="/gNav">
                <p>
                  <strong>Google Navigation</strong>
                </p>
                <p>
                  Select this if you have an Android phone.
                </p>
              </Link>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/gNav">
                <img className="w-3/5" alt="Google" src={android} />
              </Link>
            </div>
          </div>
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <Link to="/aMaps">
                <p>
                  <strong>Apple Maps</strong>
                </p>
                <p>
                  Select this if you have an Iphone phone.
                </p>
              </Link>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/aMaps">
                <img className="w-3/5" alt="Apple" src={ios} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="text-2xl text-gray-800 self-center">
            <Link to="../services/info">Please Read</Link>

          </p>

          {/* <div className="flex flex-wrap"> */}
            {services.map(({ node }) => (
              <Service
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              >
                {node.excerpt}
              </Service>
            ))}
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: "/content/services/"}},
        sort: {
          fields: [frontmatter___date],
          order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          path
        }
        excerpt
      }
    }
  }
}
`;

export default Index;
