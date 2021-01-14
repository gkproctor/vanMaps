import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" />
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            {/* this div was added to change the format of the page */}
            <div>
              <select name="role[]" multiple>
                <option value="leader">Driver</option>
                <option value="follower">Crew</option>
                <option value="follower">Other</option>
              </select>
            </div>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
