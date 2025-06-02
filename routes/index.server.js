import { html } from 'mastro/html.js';
import { htmlToResponse } from 'mastro/routes.js';
import { Layout } from '../components/Layout.js';

export const GET = () =>
  htmlToResponse(
    Layout({
      title: 'Home',
      children: html`
        <h1>What is Structured content?</h1>
        ...
        `
    })
  );