import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ children, ...rest }) {

    const login = useSelector(state => state)

    return (<Route {...rest}

        // se eu não tiver logado e tentar acessar a pág. aulas por ex, ele me redireciona
        // pra pág. principal
        render={({ location }) => 
            login ? (children) :
            (<Redirect to={{
                pathname: "/negado",
                state: { from: location } // rota que eu tentei entrar mas não consegui
            }}></Redirect>)
        }
    >
    </Route>)

}