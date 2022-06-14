const NewsItem = ({ loadingNews, news }) => {
  return (
    <div>
      {
        // loadingNews가 true일 때 로딩중이라는 글자 출력
        loadingNews && "로딩중..."
      }
      {
        // loadingNews가 false이고, news의 값이 null이 아닐 때
        !loadingNews &&
          news &&
          // news를 map() 이용하여 반복
          news.map((n) => (
            <div>
              <h2>{n.title}</h2>
              <p>{n.description}</p>
            </div>
          ))
      }
    </div>
  );
};
export default NewsItem;
