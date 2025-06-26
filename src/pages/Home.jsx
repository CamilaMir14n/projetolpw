// src/pages/Home.jsx
import styles from './Home.module.css';

const perfil = {
  nome: 'Lucas Silva',
  idade: 6,
  avatar: 'https://i.pinimg.com/736x/4a/05/79/4a0579ee2808fbbec6349b0a4746d87f.jpg'
};

const historico = [
  { atividade: 'Cores e Formas', data: '20/06/2025' },
  { atividade: 'Jogo da Memória', data: '18/06/2025' },
  { atividade: 'Complete a Palavra', data: '15/06/2025' }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Perfil da Criança</h2>
      <div className={styles.perfil}>
        <img src={perfil.avatar} alt="Avatar da criança" className={styles.avatar} />
        <div>
          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>Idade:</strong> {perfil.idade} anos</p>
        </div>
      </div>

      <h3>Histórico de Atividades</h3>
      <ul className={styles.historico}>
        {historico.map((item, i) => (
          <li key={i}>{item.atividade} — <span>{item.data}</span></li>
        ))}
      </ul>
    </div>
  );
}
