import { BoxWithTextInsideBox } from "../components/box";
import Footer from "../components/footer";

function Proposito() {
    return (
        <>
            <div className="banner"/>
            <BoxWithTextInsideBox 
                className='box-highlight'
                title='Nosso propósito é:'
                content='Desenvolver uma solução prática e segura para os nossos clientes.'
            />
            <section className="team">
                <section className="team-member">
                    <h2>Angélica Ferreira de Matos Melo</h2>
                    <p>RM-550776</p>
                </section>
                <section className="team-member">
                    <h2>Lucas Antunes da Silva</h2>
                    <p>RM-551670</p>
                </section>
                <section className="team-member">
                    <h2>Matheus Roberto Aparecido</h2>
                    <p>RM-98581</p>
                </section>
                <section className="team-member">
                    <h2>Pablo Enrique Condori Jimenez</h2>
                    <p>RM-552045</p>
                </section>
                <section className="team-member">
                    <h2>Ricardo Yuri G. Domingues</h2>
                    <p>RM-551808</p>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Proposito;