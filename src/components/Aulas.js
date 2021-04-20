import React, { useEffect, useState } from 'react';

import aulas from '../Data'

import { Link, useRouteMatch } from 'react-router-dom'

export default function Aulas() {

  const match = useRouteMatch()

  const [url, setUrl] = useState("")

  useEffect(() => {
    // o último caracter do match.url é uma "/" ?
    const newUrl = match.url.slice(-1) === "/" ? match.url : match.url + "/"
    setUrl(newUrl)
  }, [match])

  return (
      <div className="page">
          <h1>Aulas</h1>
          <ul className="aulas">
            {aulas.map(aula => 
              <li key={aula.id}>
                <Link className="link" to={`${url}${aula.id}`}>{aula.title}</Link>
              </li>
            )}
          </ul>
      </div>
  )
}
