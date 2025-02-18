//IMPORT articles.js
import articles from "../data/articles";
//IMPORT Article.jsx
import Article from "./Article";

export default function Articlelist() {
  return (
    <div>
      <Article articles={articles} />
    </div>
  );
}
