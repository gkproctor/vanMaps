import React from "react";
import { graphql } from "gatsby";
import { Card, Button } from "react-bootstrap"

import Layout from "../components/layout";
import SEO from "../components/seo";

const gNav = ({ data }) => {
  const locations = data.allGoogleSheetRootName.edges;

  return (
    <Layout pageInfo={{ pageName: "gNav" }}>
      <SEO title="gNav" />
          <h3>
            Locations
          </h3>
        <div>
          {locations.map(({ node }) => (
            <div key={node.googleSheetId}>
              <Card>
                <Card.Header><h5>{node.location}{" "}</h5> </Card.Header>
                <Card.Body>
                  <Card.Title>Radio Channel {node.channel}</Card.Title>
                  <Card.Text>
                    {node.endingdirections}{" "}<Button variant="outline-success"><a href={node.googlenavigationlink}>Let's Go!</a></Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          ))}
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
        channel
        endingdirections
        location
        googlenavigationlink
      }
    }
  }
}
`;

export default gNav;
