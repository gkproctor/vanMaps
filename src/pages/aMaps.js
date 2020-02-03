import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Locations = ({ data }) => {
  const locations = data.allGoogleSheetRootName.edges;

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Locations" />

      <div
        className="min-h-screen pt-20 sm:pt-22 md:pt-28 -mt-12 sm:-mt-8 md:-mt-18 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
      >
        <div className="container w-3/4 md:w-1/2 mt-3 font-serif font-hairline self-start">
          <h1 className="text-4xl md:text-4xl text-green-700 px-2">
            Locations
          </h1>
        </div>
        <div className="flex flex-wrap mt-5 md:mt-10">
          {locations.map(({ node }) => (
            <div key={node.googleSheetId}>
              <h3 className="text-xl pt-5">
                <strong>
                  <a href={node.applemapslink}>{node.location}</a>{" "}
                </strong>
                <div className="text-sm">
                  — Radio Channel {node.channel}
                </div>
              </h3>
              <h5>
                Once you arrive: {node.endingdirections}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allGoogleSheetRootName {
    edges {
      node {
        id
        applemapslink
        channel
        endingdirections
        location
      }
    }
  }
}
`;

export default Locations;
