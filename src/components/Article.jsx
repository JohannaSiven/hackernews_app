// styled components
import { StyledArticle } from "./styled/Article.styled";

//utils
import { timeAgo } from "../utils/helpers";

const Article = ({ story, setActiveView }) => {
  const handleClick = () => {
    setActiveView("overview");
  };
  const timestamp = timeAgo(story[0].time);
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
