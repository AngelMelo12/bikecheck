import { BoxWithText, BoxWithTextInsideBox } from "../components/box";
import Footer from '../components/footer'

function Contato() {
    return (
        <>
            <div className='banner'>
                <BoxWithText
                    className='box-left'
                    title='Entre em contato:'
                    content='Fale com a gente em qualquer horário, sempre que precisar.'
                />
            </div>
            <BoxWithTextInsideBox 
                className='box-highlight'
                title='Whatsapp'
                content='11 3003 9303'
            />
            <BoxWithTextInsideBox 
                className='box-highlight'
                title='Ouvidoria'
                content='0800-401-325'
            />
            <BoxWithTextInsideBox 
                className='box-highlight'
                title='Encontre um corretor'
                content='Localização'
            />
            <Footer />
        </>
    );
}

export default Contato;