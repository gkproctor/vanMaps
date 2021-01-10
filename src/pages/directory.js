import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const directory = ({ data }) => {
  const newObject = data.allVanmapsCsv.edges

  return (
    <Layout pageInfo={{ pageName: "gNav" }}>
      <SEO title="gNav" />
      <div>
        {newObject.map(({ node }) => (
          <div key={node.allVanmapsCsv}>
            <ul>&#123;
              <ul>"_id": "{node.ID}"</ul>
              <ul>"name": "{node.Location}"</ul>
              <ul>"radioChannel": "{node.Channel}"</ul>
              <ul>"additionalInfo": "{node.EndingDirections}"</ul>
              <ul>"googleMapsURL": "{node.GoogleMaps}"</ul>
              <ul>"appleMapsURL": "{node.AppleMaps}"</ul>
              <ul>"coordinates": "{node.Coordinates}"</ul>
            &#125;,
            </ul>
          </div>
        ))}
      </div>
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