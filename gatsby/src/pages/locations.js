import React from 'react';
import { graphql } from 'gatsby';
import LocationList from '../components/LocationList';
import SEO from '../components/SEO';

export default function LocationsPage({ data }) {
  const locations = data.locations.nodes;
  return (
    <>
      <SEO title="Locations" />
      <LocationList key={locations.id} locations={locations} />
    </>
  );
}
// This query works but does NOT return list in alphabetical order
export const query = graphql`
  query LocationQuery {
    locations: allSanityLocation {
      nodes {
        name
        id
        slug {
          current
        }
        radioChannel
        additionalInfo
        appleMapsUrl
        googleMapsUrl
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
