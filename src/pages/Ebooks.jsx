// src/pages/Ebooks.jsx
import styles from './Ebooks.module.css';

const livros = [
  {
    titulo: 'Livros sobre sentimentos infantis: reconhecendo emoções desde cedo com a ajuda da literatura',
    descricao: 'Apresentar como a literatura infantil pode ser uma ferramenta poderosa para o desenvolvimento emocional das crianças, especialmente na identificação, nomeação e acolhimento de sentimentos desde os primeiros anos de vida',
    imagem: '/assets/livro1.png',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  },
]

export default function Ebooks() {
  return (
    <div className={styles.container}>
      <h2>Leitura Infantil — Sentimentos</h2>
      <div className={styles.livros}>
        {livros.map((livro, i) => (
          <div key={i} className={styles.card}>
            <img src={livro.imagem} alt={livro.titulo} />
            <h4>{livro.titulo}</h4>
            <p>{livro.descricao}</p>
            <a href={livro.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
          </div>
        ))}
      </div>
    </div>
  );
}
