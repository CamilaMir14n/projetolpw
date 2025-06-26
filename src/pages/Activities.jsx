// src/pages/Activities.jsx
import Card from '../components/card';
import styles from './Activities.module.css';
import { useNavigate } from 'react-router-dom';

const atividades = [
  {
    title: 'Te ver crescer',
    description: 'Leia o livro com as crianças e, ao final, pergunte: “Você já sentiu saudade de alguém?” ou “O que deixa seu coração quentinho?”. Estimule a partilha de experiências afetivas.',
  },
  {
    title: 'Cadê o Babu?',
    description: 'Após a leitura, esconda cartões com rostinhos representando emoções pela sala. Quando a criança encontrar um, ela deve imitar a expressão e dizer: “Me sinto assim quando...”.',
  },
  {
    title: 'A cor de Coraline',
    description: 'Convide a criança a desenhar o que está sentindo hoje, usando cores que ela acha que combinam com esse sentimento. Depois, cada uma compartilha sua “cor do dia”.'
  }
];

export default function Activities() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redireciona para a página de Ebooks
    navigate('/ebooks');
  };

  return (
    <div className={styles.container}>
      <h2>Atividades Recomendadas</h2>
      <div
        className={styles.grid}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '900px',
          justifyItems: 'center'
        }}
      >
        {atividades.map((a, i) => (
          <div key={i} style={{ width: '100%', cursor: 'pointer' }} onClick={handleCardClick}>
            <Card title={a.title} description={a.description} />
          </div>
        ))}
      </div>

      <section style={{ marginTop: '32px' }}>
        <h3>Recomendações de Atividades</h3>
        <ul>
          <li>
            <strong>Desenho das Emoções:</strong> Peça para a criança desenhar como ela está se sentindo hoje.
            <a href="https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Veja mais</a>
          </li>
          <li>
            <strong>Roda de Conversa:</strong> Separe um momento para todos falarem sobre um sentimento do dia.
            <a href="https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Veja mais</a>
          </li>
          <li>
            <strong>Caixa das Emoções:</strong> Monte uma caixa com cartões de sentimentos e incentive a criança a escolher um e contar uma história sobre ele.
            <a href="https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Veja mais</a>
          </li>
          <li>
            <strong>Teatro de Fantoches:</strong> Use fantoches para representar situações e sentimentos, estimulando a empatia.
            <a href="https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Veja mais</a>
          </li>
          <li>
            <strong>Leitura Guiada:</strong> Leia juntos um livro sobre emoções e converse sobre as situações apresentadas.
            <a href="https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>Veja mais</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
