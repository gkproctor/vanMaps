import { graphql } from "gatsby"
export const VanmapsCsvFragment = graphql`
  fragment VanmapsCsvFragment on VanmapsCsv {
    Channel
    AppleMaps
    GoogleMaps
    EndingDirections
    Coordinates
    id
  }
`
