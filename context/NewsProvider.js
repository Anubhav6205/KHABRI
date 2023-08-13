import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [userTopics, setUserTopics] = useState(["sports"]);
  const [newsLanguage, setNewsLanguage] = useState("en");
  const [searchedTopic, setSearchedTopic] = useState("");
  const [searchNews, setSearchNews] = useState([]);
  const [apiIndex, setApiIndex] = useState(0);
  const apiKeys = [
    "f47fee74bda041a0943db74ea4205ca2",
    "48f4819280de48c4a86bc2183f714df1",
    "fefbb424f59a4f45a45e8cb84e361fce",
    "fefbb424f59a4f45a45e8cb84e361fce",
    "fefbb424f59a4f45a45e8cb84e361fce"
  ];
  const [newsByFeed, setNewsByFeed] = useState({
    politics: [],
    entertainment: [],
    sports: [],
    health: [],
    business: [],
    science: []
  });
  console.log(apiIndex)
  useEffect(() => {
    const fetchNewsByTopic = async () => {
      try {
        const newsPromises = userTopics.map(async (topic) => {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${topic}&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`);
          return response.data.articles;
        });
        const newsData = await Promise.all(newsPromises);
        const mergedNews = newsData.flat();
        setNews(mergedNews);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log("Rate limit exceeded. Retrying after a delay...");
          await new Promise(resolve => setTimeout(resolve, 20000)); // Retry after 1 second
          fetchNewsBySearch(); // Retry the request
        } else {
          console.log(`Error fetching search news: ${error}`);
        }
      }
    };

    fetchNewsByTopic();
  }, [newsLanguage, userTopics]);

  useEffect(() => {
    const fetchNewsByFeed = async () => {
      try {
        const politicsResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=politics&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        const entertainmentResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=entertainment&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        const sportsResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=sports&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        const healthResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=health&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        const businessResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=business&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        const scienceResponse = await axios.get(
          `https://newsapi.org/v2/everything?q=science&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
        );
        setNewsByFeed({
          politics: politicsResponse.data.articles,
          entertainment: entertainmentResponse.data.articles,
          sports: sportsResponse.data.articles,
          health: healthResponse.data.articles,
          business: businessResponse.data.articles,
          science: scienceResponse.data.articles
        });
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log("Rate limit exceeded while searching. Retrying after a delay...");
          await new Promise(resolve => setTimeout(resolve, 20000)); // Retry after 1 second
          fetchNewsBySearch(); // Retry the request
        } else {
          console.log(`Error fetching search news: ${error}`);
        }
      }
    };

    fetchNewsByFeed();
  }, [newsLanguage]);

  useEffect(() => {
    try {
      const fetchNewsBySearch = async () => {
        console.log("Searched");

        try {
          const searchResponse = await axios.get(
            `https://newsapi.org/v2/everything?q=${searchedTopic}&language=${newsLanguage}&apiKey=${apiKeys[apiIndex]}`
          );
          setSearchNews(searchResponse.data.articles);
        } catch (error) {
          if (error.response && error.response.status === 429) {
            console.log("Rate limit exceeded. Retrying after a delay...");
            await new Promise(resolve => setTimeout(resolve, 20000)); // Retry after 1 second
            fetchNewsBySearch(); // Retry the request
          } else {
            console.log(`Error fetching search news: ${error}`);
          }
        }
      };
      fetchNewsBySearch();
    } catch (error) {
      console.log(`Error initiating search: ${error}`);
    }
  }, [searchedTopic]);

  return (
    <NewsContext.Provider
      value={{
        news,
        newsLanguage,
        setNews,
        setNewsLanguage,
        userTopics,
        setUserTopics,
        newsByFeed,
        setNewsByFeed,
        searchedTopic,
        setSearchedTopic,
        searchNews,
        setApiIndex
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
