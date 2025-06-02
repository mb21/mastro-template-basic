import { html } from 'mastro/html.js';
import { htmlToResponse } from 'mastro/routes.js';
import { readMarkdownFiles } from 'mastro/markdown.js';
import { Layout } from '../components/Layout.js';

export const GET = async () => {
  const posts = await readMarkdownFiles('data/posts/*.md');
  return htmlToResponse(
    Layout({
      title: 'News',
      children: html`
        ${posts.map(post =>
          html`<p><a href=${post.path}>${post.meta.title}</a></p>`)}
        `
    })
  );
}