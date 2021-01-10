import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const directory = ({ data }) => {
  const newObject = data.allVanmapsCsv.edges

  return (
    <Layout pageInfo={{ pageName: "gNav" }}>
      <SEO title="gNav" />
      <div>&#123;</div>
      <p>"New Object":</p>
      <div>
        {newObject.map(({ node }) => (
          <div key={node.allVanmapsCsv}>
            <ul>&#123;
              <ul>"ID": "{node.ID}"</ul>
              <ul>"Name": "{node.Location}"</ul>
              <ul>"Radio Channel": "{node.Channel}"</ul>
              <ul>"Directions": "{node.EndingDirections}"</ul>
              <ul>"GoogleMaps URL": "{node.GoogleMaps}"</ul>
              <ul>"AppleMaps URL": "{node.AppleMaps}"</ul>
              <ul>"Coordinates": "{node.Coordinates}"</ul>
            &#125;,
            </ul>
          </div>
        ))}
      </div>
      <div>&#125;</div>
    </Layout>
  )
};

export const query = graphql`
  query {
    allVanmapsCsv {
      edges {
        node {
          ID
          Channel
          Location
          EndingDirections
          AppleMaps
          GoogleMaps
          Coordinates
        }
      }
    }
  }
`

export default directory;
