import { marked } from "marked";

export const usePage = async (name) => {
  const markdownPath = import.meta.resolve(`./markdown/${name}.md`);

  if (markdownPath) {
    const response = await fetch(markdownPath);
    const content = await response.text();
    return marked(content);
  }

  return null;
};
