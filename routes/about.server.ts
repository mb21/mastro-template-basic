import { Layout } from "../components/Layout.js";
import { htmlToResponse } from "mastro";
import { markdownToHtml } from "mastro/markdown";

export const GET = () =>
  htmlToResponse(
    Layout({
      title: "About us",
      children: markdownToHtml("hi _there_").then(m => m.content),
    }),
  );
