export default function Article(props) {
  return (
    <ul className="articles-list">
      {props.articles.map((article) => (
        <li key={article.id}>{article.name}</li>
      ))}
    </ul>
  );
}
