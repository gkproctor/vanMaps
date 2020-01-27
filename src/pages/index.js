import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h3>Info</h3>
    <p>
      These directions will only get you to the city street turn out. Once there you will need to find your way to the train using the access road. Your navigation app will not work on dirt roads, see the directions in the 3rd column to get you to the train. Your safety is your responsibility.
    </p>
    <p>
      Be careful when crossing tracks. Using this file with a navigation app will use your cell data, see below for instructions if cell data is an issue.
    </p>
    <p>
      Click the location and allow it to open in Google maps. Apple maps will not work.
    </p>
    <p>
      If cell data is an issue then click on the location link to open it in Google maps. Do NOT click start. Instead click "steps" and you will see step by step directions that you can follow which will minimize cell data usage.
    </p>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
