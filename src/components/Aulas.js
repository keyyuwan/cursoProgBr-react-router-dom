import React from 'react';

import aulas from '../Data'

export default function Aulas() {
  return (
      <div className="page">
          <h1>Aulas</h1>
          <ul className="aulas">
            {aulas.map(aula => <li key={aula.id}>{aula.title}</li>)}
          </ul>
      </div>
  )
}
