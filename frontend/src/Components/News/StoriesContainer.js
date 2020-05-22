import React, { useEffect, useState } from "react";
import { getStoryIds } from "../Api/hnApi";
import { Story } from "../Story/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyle";
import { useInfiniteScroll } from "../hooks/unseInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id='stories-container'>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
