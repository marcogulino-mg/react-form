//IMPORT articles.js
import articles from "../data/articles";
//IMPORT Article.jsx
import Article from "./Article";

export default function Articlelist() {
  return (
    <div>
      <form className="insert-articles" action="">
        <input type="text" />
        <button>Send</button>
      </form>
      <Article articles={articles} />
    </div>
  );
}
