import * as React from "react";

interface ArticleProps {
  title: string;
  by: string;
  type: string;
  time: string;
  url: string;
}

const ArticlePreview = ({ story }: any) => {
  const timeAgo = new Date(story.time * 1000).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div key={story.id}>
      <h3>{story.title}</h3>
      <p>by: {story.by}</p>
      <p>type: {story.type}</p>
      <p>posted at: {timeAgo}</p>
      <a href={story.url}>read more</a>
    </div>
  );
};

export default ArticlePreview;
