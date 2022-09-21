//react
import * as React from "react";
// import InfiniteLoader from "react-window-infinite-loader";
// import { useInView } from "react-intersection-observer";

//components
import Header from "./components/Header";
import Overview from "./components/Overview";
import Article from "./components/Article";

//styled components
import { GlobalStyles } from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";

//utils
import { PAGE_NUMBER, LIMIT } from "./utils/constants";

const App = () => {
  const [storyDetails, setStoryDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeView, setActiveView] = React.useState("overview");
  //   const [page, setPage] = React.useState(PAGE_NUMBER);
  //   const [ref, inView] = useInView();

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
    const topStoriesEndpoint = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$priority"&limitToFirst=${LIMIT}`;

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

  //   const InfiniteScroll = ({ listItems, lastRowHandler }) => {
  //     const [lastRowRef, lastRowInView] = useInView();
  //     React.useEffect(() => {
  //       lastRowInView && lastRowHandler();
  //     }, [lastRowInView]);
  //   };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        {activeView === "overview" ? (
          <Overview
            storyDetails={storyDetails}
            loading={loading}
            setActiveView={setActiveView}
          />
        ) : (
          <Article
            story={storyDetails.filter((s) => s.id === activeView)}
            activeView={activeView}
            setActiveView={setActiveView}
          />
        )}
      </Container>
    </>
  );
};

export default App;
