import React from "react";
import { StyledArticle } from "./styled/Article.styled";

const Article = (storyDetails, currentView) => {
    console.log(storyDetails)
    console.log(currentView)
//   const story = storyDetails.activeView;
//   const timeAgo = new Date(story.time * 1000).toLocaleDateString("en-GB", {
//     hour: "numeric",
//     minute: "numeric",
//   });
//   const linkText = story.url ? `Read on ${new URL(story.url).host}` : ``;
//   const textPreview = story.text ? `${story.text.substring(0, 150)}...` : ``;
  return (
    <div>
      {/* <a>back</a>
      <div id="articleContainer">
        <div id="by">by: {story.by}</div>
        <h3>{story.title}</h3>
        <div id="timestamp">posted at: {timeAgo}</div>
        <div id="type">{story.type}</div>
        <div id="text">{textPreview}</div>
        <div id="link">
          <a href={story.url}>{linkText}</a>
        </div>
      </div> */}
    </div>
  );
};

export default Article;
