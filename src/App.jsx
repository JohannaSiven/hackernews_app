//react
import * as React from "react";
import { FixedSizeList as List } from "react-window";
// import InfiniteLoader from "react-window-infinite-loader";
// import { useInView } from "react-intersection-observer";

//components
import Header from "./components/Header";
import ArticlePreview from "./components/ArticlePreview";
import Article from "./components/Article";
import Main from "./components/Main";

//styled components
import { GlobalStyles } from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";

const App = () => {
  const [storyDetails, setStoryDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchStoryDetails = async (id) => {
    const storyEndpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json `;
    try {
      let res = await fetch(storyEndpoint);
      if (res.status >= 200 && res.status < 300) {
        let data = await res.json();
        return data;
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      return err;
    }
  };

  const fetchTopStoryIds = async () => {
    const topStoriesEndpoint = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$priority"&limitToFirst=20`;
    try {
      let res = await fetch(topStoriesEndpoint);
      if (res.status >= 200 && res.status < 300) {
        let ids = await res.json();
        const details = await Promise.all(
          ids.map((id) => fetchStoryDetails(id))
        );
        setStoryDetails(details);
        return details;
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchTopStoryIds();
  }, []);

  const [activeView, setActiveView] = React.useState("main");

  const ArticleRow = React.useCallback(({ data, index, style }) => {
    const story = data[index] || {};
    return (
      <div style={style}>
        <ArticlePreview key={story.id} story={story} />
      </div>
    );
  }, []);

  //   const InfiniteScroll = ({ listItems, lastRowHandler }) => {
  //     const [lastRowRef, lastRowInView] = useInView();
  //     React.useEffect(() => {
  //       lastRowInView && lastRowHandler();
  //     }, [lastRowInView]);
  //   };

  //   const [ref, inView] = useInView();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        {activeView === "main" ? (
          <>
            <h2>Top stories</h2>
            {loading && <p>...loading</p>}
            {storyDetails.length && (
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
            )}
          </>
        ) : null}
        {/* {activeView === "main" && <Main storyDetails={storyDetails} />} */}
        {activeView === "article" && <Article />}
      </Container>
    </>
  );
};

export default App;
