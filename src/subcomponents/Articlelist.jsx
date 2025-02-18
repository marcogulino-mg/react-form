import { useState } from "react";
//IMPORT articles.js
import articles from "../data/articles";
//IMPORT Article.jsx
import Article from "./Article";

export default function Articlelist() {
  //Variabile di stato rappresentante l'articolo
  const [newArticle, setNewArticle] = useState("");

  //Funzione che non fa ricaricare la pagina quando si verifica l'evento submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="insert-articles" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
        />
        <button>Send</button>
      </form>
      <Article articles={articles} />
    </div>
  );
}
