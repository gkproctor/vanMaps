import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.0)};
      `}
    >
      <Link to={`/`}>
        <h2
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h2>
      </Link>
      <Link to={`/locations/`}>
        <h4
        css={css`
          color: red;
          float: right;
        `}
      >
        Location Index
        </h4>
      </Link>
      {children}
    </div>
  )
}
