import aulas from '../Data'

import { useParams } from 'react-router-dom'

function useAula() {
  const id = useParams().id
  return aulas.filter(aula => aula.id == id)[0]
}

export default function Aula() {

  const aula = useAula()

  return (
    <div className="page">
      <h1>{aula.title}</h1>
      <h3>{aula.desc}</h3>
    </div>
  );
}
