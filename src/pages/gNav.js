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
                <h5>{node.Location} </h5>{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>Radio Channel {node.Channel}</Card.Title>
                <Card.Text>
                  {node.EndingDirections}{" "}
                  <Button variant="outline-success">
                    <a href={node.GoogleMaps}>Let's Go!</a>
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
          EndingDirections
          GoogleMaps
        }
      }
    }
  }
`

export default gNav;
