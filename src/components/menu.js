import { Outlet, Link } from "react-router-dom";

function Menu() {
    return (
    <>
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/proposito">Proposito</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/vistoria">Vistoria</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
    )
};

export default Menu;