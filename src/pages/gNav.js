import React from "react";
import { graphql } from "gatsby";
import { Card, Button } from "react-bootstrap"

import Layout from "../components/layout";
import SEO from "../components/seo";

const gNav = ({ data }) => {
  const locations = data.allVanmapsCsv.edges

  return (
    <Layout pageInfo={{ pageName: "gNav" }}>
      <SEO title="gNav" />
      <h3>Locations</h3>
      <div>
        {locations.map(({ node }) => (
          <div key={node.allVanmapsCsv}>
            <Card>
              <Card.Header>
                <h5>{node.location} </h5>{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>Radio Channel {node.channel}</Card.Title>
                <Card.Text>
                  {node.ending_directions}{" "}
                  <Button variant="outline-success">
                    <a href={node.GoogleMapsLink}>Let's Go!</a>
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
          Channel
          Location
          ending_directions
          GoogleMapsLink
        }
      }
    }
  }
`

export default gNav;
