import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AuthButton from './AuthButton'

export default function Nav() {

    const login = useSelector(state => state)

    const history = useHistory() // objeto que gerencia a navegação da página
    const location = useLocation()

    useEffect(() => {
        let { from } = location.state || {from: {pathname: "/"}}
        if (login) {
            history.replace(from)
        }
    }, [login])

    return (
        <div className="nav">
            <h1>
                <Link to="/">ProgBR</Link>
            </h1>
            <ul className="nav-links">
                <AuthButton />
                <li>
                    <Link to="/aulas">Aulas</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </div>
    )
}
