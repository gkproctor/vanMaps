import React from "react";
import { graphql } from "gatsby";
import { Card, Button } from "react-bootstrap"

import Layout from "../components/layout";
import SEO from "../components/seo";

const aMaps = ({ data }) => {
  const locations = data.allVanmapsCsv.edges

  return (
    <Layout pageInfo={{ pageName: "aMaps" }}>
      <SEO title="aMaps" />
      <h3>Locations</h3>
      <div>
        {locations.map(({ node }) => (
          <div key={node.allVanmapsCsv}>
            <Card>
              <Card.Header>
                <h5>{node.Location} </h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>Radio Channel {node.channel}</Card.Title>
                <Card.Text>
                  {node.ending_directions}{" "}
                  <Button variant="outline-primary">
                    <a href={node.AppleMapsLink}>Let's Go!</a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
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
          id
          AppleMapsLink
          Channel
          Location
          ending_directions
        }
      }
    }
  }
`

export default aMaps;
