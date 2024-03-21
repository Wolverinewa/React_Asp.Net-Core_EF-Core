//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';


// let initialState = [
//   {
//     id: 1,
//     descricao: "Primeira Atividade",
//     prioridade: "1",
//     titulo: "Atividade"
//   },
//   {
//     id: 2,
//     descricao: "Segunda Atividade",
//     prioridade: "2",
//     titulo: "Atividade"
//   },
// ];

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, atividades.map(item => item.id)) + 1)
  }, [atividades])

  function addAtividade(ativ) {
    //id: Math.max.apply(Math, atividades.map(item => item.id)) + 1,

    setAtividades([...atividades,
    { ...ativ, id: index }]
    );
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas])
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0])
  }

  function atualizaAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });

  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
        atualizaAtividade={atualizaAtividade}
        cancelarAtividade={cancelarAtividade}
      />

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
