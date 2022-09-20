import * as React from "react";
import { StyledPreview } from "./styled/ArticlePreview.styled";

const ArticlePreview = ({ story }, setActivePage) => {
  const timeAgo = new Date(story.time * 1000).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  const linkText = story.url ? `Read on ${new URL(story.url).host}` : ``;

  return (
    <StyledPreview>
      <li key={story.id}>
        <div id="by">by: {story.by}</div>
        <h3>
          <button
            onClick={() => {
              console.log("BUTTON CLICK");
              setActivePage("Article");
            }}
          >
            {story.title}
          </button>
        </h3>
        <div id="timestamp">posted at: {timeAgo}</div>
        <div id="link">
          <a href={story.url}>{linkText}</a>
        </div>
      </li>
    </StyledPreview>
  );
};

export default ArticlePreview;
