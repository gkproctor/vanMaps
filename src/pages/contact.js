import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="min-h-screen mb-6 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-24 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-black-700">Contact</h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Email: </strong>gkproctor at G mail dot com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
