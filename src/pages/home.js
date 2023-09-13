import { BoxWithTextAndButton, BoxWithText } from '../components/box';
import Footer from '../components/footer';

function Home() {
    return (
        <>
            <div className='banner'>
                <BoxWithTextAndButton 
                    className='box-image-left'
                    title='Contrate a vistoria da Porto' 
                    content='Uma solução completa e online que oferece proteção e serviços para você se aventurar sem medo.' 
                    link='/contato' 
                    page='Contato'>
                </BoxWithTextAndButton> 
            </div>

            <BoxWithText
                className='box-left'
                title='Sobre o desafio:'
                content='A Porto há algum tempo vem tentando aderir em seu sistema o modelo de vistoria de bicicletas de forma totalmente online e sem a intervenção humana, a empresa já tentou realizar essa implementação anteriormente, porém não obteve o sucesso esperado. Em cima deste assunto já decorrido, a empresa decidiu repassar este caso para nós estudantes criarmos uma solução, da qual se espera sanar esse problema.'>
            </BoxWithText>

            <BoxWithText
                className='box-right'
                title='Solução para o cliente:'
                content='Nosso cliente poderá solicitar a vistoria totalmente online informando o número do seguro, e enviando na hora fotos e vídeos da bike em todas as posições chave necessárias (Ex: frente, traseiro e lados), para facilitar a análise automatizada.'>
            </BoxWithText>

            <BoxWithText
                className='box-left'
                title='Solução para a Porto:'
                content='Essa forma de vistoria visa melhorar e acelerar o processo de vistoria da bike, validação de suas condições, e emissão da apólice de seguro para o cliente, reduzindo consideravelmente o tempo gasto para realizar este processo.'>
            </BoxWithText>
            <Footer />
        </>
    );
}

export default Home;