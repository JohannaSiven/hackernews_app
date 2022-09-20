import React from "react";
import { StyledArticle } from "./styled/Article.styled";

const Article = ({ story, setActiveView }) => {
  const handleClick = () => {
    setActiveView("main");
  };
  const timeAgo = new Date(story[0].time * 1000).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
  const linkText = story[0].url ? `Read on ${new URL(story[0].url).host}` : ``;
  const textPreview = story[0].text ? `${story[0].text.substring(0, 250)}` : ``;

  return (
    <StyledArticle>
      <button onClick={handleClick}>Back to overview</button>
      <div>
        <div id="type">{story[0].type}</div>
        <h3>{story[0].title}</h3>
        <div>
          <p>by: {story[0].by}</p>
          <p>posted at: {timeAgo}</p>
        </div>
        <div id="text">{textPreview}</div>
        <div id="link">
          <a href={story[0].url}>{linkText}</a>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;
