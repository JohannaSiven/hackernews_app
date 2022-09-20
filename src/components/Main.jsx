import React from "react";
import ArticlePreview from "./ArticlePreview";
import { FixedSizeList as List } from "react-window";

const Main = (storyDetails) => {
  const [loading, setLoading] = React.useState(true);
  const ArticleRow = React.useCallback(({ data, index, style }) => {
    const story = data[index] || {};
    console.log(story)
    return (
      <div style={style}>
        <ArticlePreview
          key={story.id}
          story={story}
        />
      </div>
    );
  }, []);

  return (
    <div>
      <h2>Top stories</h2>
      {loading && <p>...loading...</p>}
      {storyDetails.length ? (
        <List
          innerElementType="ul"
          itemData={storyDetails}
          itemCount={storyDetails.length}
          height={1000}
          width={1000}
          itemSize={200}
        >
          {ArticleRow}
        </List>
      ) : null}
    </div>
  );
};

export default Main;
