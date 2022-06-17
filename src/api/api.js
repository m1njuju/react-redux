import axios from "axios";

// axios값을 return으로 내보낼 수 있게 작성
export const getNews = () =>
  axios.get(
    "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
  );
