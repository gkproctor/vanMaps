import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import ios from "../images/appleMapsIconLight.png";
import android from "../images/gNavIconLight.png";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Doc = ({ title, url, children }) => {
  return (
    <div>
      <Link
        to={url}>
        <div>
          <p>{children}</p>
        </div>
      </Link>
    </div>
  );
};

function Index({ data }) {
  const docs = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div>
          <h3>
            Helping drivers get to the train location to pick-up the crew.
          </h3>
          <p>
            Select the navigation app that you use.  Google Maps is preferred and more accurate.
          </p>
        </div>
        <Card>
            <Card.Header><Link to="/gNav">Google Maps</Link></Card.Header>
          <Card.Body>
            <Row>
              <Col xs={8}><Card.Title><Container>If you don't know which navigation app to use then select this if you have an Android phone.</Container></Card.Title></Col>
              <Col xs={4}><Card.Text>
                <Link to="/gNav">
                  <img alt="Google" src={android} />
                </Link>
              </Card.Text></Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header><Link to="/aMaps">Apple Maps</Link></Card.Header>
          <Card.Body>
            <Row>
              <Col xs={8}><Card.Title><Container>If you don't know which navigation app to use then select this if you have an Iphone.</Container></Card.Title></Col>
              <Col xs={4}><Card.Text>
                <Link to="/aMaps">
                  <img alt="Apple" src={ios} />
                </Link>
              </Card.Text></Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </div>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                >
                <h5>
                  {node.frontmatter.title}{" "}
                </h5>
                <p>{node.excerpt}</p>
              </Link>
            </div>
        ))}
      </div>
    </Layout>
  )
}
    export const query = graphql`
  query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
        totalCount
      edges {
        node {
        id
          frontmatter {
        title
            date(formatString: "DD MMMM, YYYY")
    }
          fields {
        slug
      }
          excerpt
    }
  }
}
}
`

export default Index;
