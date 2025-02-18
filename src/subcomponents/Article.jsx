export default function Article(props) {
  return (
    <ul className="articles-list">
      {props.article.map((article) => (
        <li className="article" key={article.id}>
          {article.name}
          <img
            className="trash-bin"
            src="./img/trash-solid.svg"
            alt="remove article"
            onClick={() => props.removeArticle(article.id)}
          />
        </li>
      ))}
    </ul>
  );
}
