import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <p>
            <strong>Van Maps </strong>was created to help van drivers find the train/crew.  Not all pick-up, drop-off or crew change locations are easy to find.  Hopefully this will ease the frustration of all.
          </p>
          <p>
            Van Maps uses your phone's navigation app, only the gps coordinates come from this mobile web app.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
