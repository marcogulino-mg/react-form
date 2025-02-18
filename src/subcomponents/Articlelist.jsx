import { useState } from "react";
//IMPORT articles.js
import articles from "../data/articles";
//IMPORT Article.jsx
import Article from "./Article";

export default function Articlelist() {
  //Variabile di stato rappresentante l'articolo da inserire
  const [newArticle, setNewArticle] = useState("");

  //Variabile di stato rappresentate l'array di articoli gia inseriti
  const [article, setArticle] = useState(articles);

  //Funzione che non fa ricaricare la pagina quando si verifica l'evento submit
  const addArticle = (e) => {
    e.preventDefault();
    //Se newArticle è diverso da stringa vuota allora andrò a fare l'inserimento nell'arr of objs (article)
    if (newArticle) {
      const updatedArticlesList = [...article, { id: 8, name: newArticle }];
      setArticle(updatedArticlesList);
      //Reset della variabile di stato newArticle (value di input text)
      setNewArticle("");
    }
  };

  return (
    <div>
      <form className="insert-articles" onSubmit={addArticle}>
        <input
          type="text"
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
        />
        <button>Send</button>
      </form>
      <Article article={article} />
    </div>
  );
}
