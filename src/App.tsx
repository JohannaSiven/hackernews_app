import * as React from "react";
import ArticlePreview from "./components/ArticlePreview";

const App = () => {
  const [storyDetails, setStoryDetails] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchStoryDetails = async (id: any) => {
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
    const topStoriesEndpoint = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$priority"&limitToFirst=50`;
    try {
      let res = await fetch(topStoriesEndpoint);
      if (res.status >= 200 && res.status < 300) {
        let ids = await res.json();
        const details = await Promise.all(
          ids.map((id: number) => fetchStoryDetails(id))
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

  return (
    <>
      <h1>Hacker News - top stories</h1>
      {loading && <p>loading...</p>}
      {storyDetails.length &&
        storyDetails.map((story, id) => {
          return <ArticlePreview key={id} story={story} />;
        })}
    </>
  );
};

export default App;
