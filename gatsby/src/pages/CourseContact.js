import React, { useState } from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    comments: '',
  });
  return (
    <>
      <SEO title="Contact" />
      <form>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <legend>Comments/Suggestions</legend>
          <label htmlFor="comments">What's on your mind? </label>
          <input
            type="text"
            name="comments"
            value={values.comments}
            onChange={updateValue}
          />
        </fieldset>
      </form>
    </>
  );
}
