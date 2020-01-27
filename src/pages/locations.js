import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h3
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          This is a list of locations to pick-up and drop-off crews.
        </h3>
        <h4>{data.allGoogleSheetRootName.totalCount} Locations</h4>
        {data.allGoogleSheetRootName.edges.map(({ node }) => (
          <div key={node.googleSheetId}>
            <h3
              css={css`
                  text-decoration: none;
                  color: inherit;
                  margin-bottom: ${rhythm(1 / 4)};
                `}
            >
              <a href={node.googlenavigationlink}>{node.location}</a>{" "}
              <span
                css={css`
                    color: #bbb;
                  `}
              >
                — Radio Channel {node.channel}
              </span>
            </h3>
            <h5>
              Once you arrive: {node.endingdirections}
            </h5>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
  allGoogleSheetRootName(sort: {fields: location, order: ASC}) {
    edges {
      node {
        applemapslink
        channel
        coordinates
        endingdirections
        googleSheetId
        googlenavigationlink
        location
      }
    }
    totalCount
  }
}
`
