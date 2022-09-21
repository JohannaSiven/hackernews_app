//react
import * as React from "react";
import { FixedSizeList as List } from "react-window";

//components
import ArticlePreview from "./ArticlePreview";

const Overview = ({ storyDetails, loading, setActiveView }) => {
  const ArticleRow = React.useCallback(({ data, index, style }) => {
    const story = data[index] || {};
    return (
      <div style={style}>
        <ArticlePreview
          key={story.id}
          story={story}
          setActiveView={setActiveView}
        />
      </div>
    );
  }, []);

  return (
    <>
      <h2>Top stories</h2>
      {loading && (
        <div id="loading">
          <p>...loading...</p>
        </div>
      )}
      {storyDetails.length ? (
        <List
          innerElementType="ul"
          itemData={storyDetails}
          itemCount={storyDetails.length}
          height={1000}
          width={"100vw"}
          itemSize={250}
          padding-right={8}
        >
          {ArticleRow}
        </List>
      ) : null}
    </>
  );
};

export default Overview;
