import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <h5>
            If you find a problem with any of the links or think a location needs to be added then email me and I'll address it.
          </h5>
          <p>
            <strong>Email: </strong>gkproctor at G mail dot com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
