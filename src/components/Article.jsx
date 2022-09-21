// styled components
import { StyledArticle } from "./styled/Article.styled";

//utils
import { getTimeAgo, getPreviewText } from "../utils/helpers";

const Article = ({ story, setActiveView }) => {
  const handleClick = () => {
    setActiveView("overview");
  };

  const timestamp = getTimeAgo(story[0].time);

  // url and text not always populated
  // if no link to article --> show full text
  const hasLinkToArticle = !!story[0].url;
  const hasPreviewText = !!story[0].text;
  const textPreview =
    hasPreviewText && getPreviewText(hasLinkToArticle, story[0].text);
  const linkText = hasLinkToArticle
    ? `Read on ${new URL(story[0].url).host}`
    : ``;

  return (
    <StyledArticle>
      <button onClick={handleClick}>Back to overview</button>
      <div id="details">
        <div id="type">{story[0].type}</div>
        <h3>{story[0].title}</h3>
        <div>
          <p>by: {story[0].by}</p>
          <p>posted at: {timestamp}</p>
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
