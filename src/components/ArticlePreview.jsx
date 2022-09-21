//styled components
import { StyledPreview } from "./styled/ArticlePreview.styled";

//utils
import { timeAgo } from "../utils/helpers";

const ArticlePreview = ({ story, setActiveView }) => {
  const timestamp = timeAgo(story.time);
  const linkText = story.url ? `Read on ${new URL(story.url).host}` : ``;

  const handleClick = () => {
    setActiveView(story.id);
  };

  return (
    <StyledPreview>
      <li key={story.id}>
        <div id="by">by: {story.by}</div>
        <h3>
          <button onClick={handleClick}>{story.title}</button>
        </h3>
        <div id="timestamp">posted at: {timestamp}</div>
        <div id="link">
          <a href={story.url}>{linkText}</a>
        </div>
      </li>
    </StyledPreview>
  );
};

export default ArticlePreview;
