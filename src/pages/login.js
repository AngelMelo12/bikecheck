import { Link } from "react-router-dom";
import { FormLogin } from "../components/form";
import Footer from '../components/footer'

function Login() {
    return (
        <>
            <FormLogin />
            <Link to='/'>{'Esqueci minha senha >'}</Link>
            <Link to='/cadastro'>{'Ainda não sou cliente >'}</Link>
            <Footer />
        </>
    );
}

export default Login;