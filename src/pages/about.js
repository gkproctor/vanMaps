import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div className="min-h-screen mb-6 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-24 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-black-700">About</h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Van Maps </strong>was created to help van drivers find the train/crew.  Not all pick-up, drop-off or crew change locations are easy to find.  Hopefully this will ease the frustration of all.
          </p>
          <p>
            Van Maps uses your phone's default navigation app, only the gps coordinates come from this mobile web app.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
