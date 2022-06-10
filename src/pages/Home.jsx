import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../Store/Feeds/feeds.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state) => state.feeds);
  console.log(data);
  useEffect(() => {
    dispatch(getFeedsAPI());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />

      {getFeeds.loading && <div>Loading ...</div>}
      {getFeeds.error && <div>Somethinng went wrong..!</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px",
            }}
          >
            <div>{feed.title}</div>
            <div>{feed.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
