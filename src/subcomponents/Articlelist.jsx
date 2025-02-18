//IMPORT articles
import articles from "../data/articles";

export default function Articlelist() {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.name}</li>
        ))}
      </ul>
    </div>
  );
}
