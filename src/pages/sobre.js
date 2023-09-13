import { BoxWithText } from "../components/box";
import Footer from "../components/footer";

function Sobre() {
    return (
        <>
            <div className='banner' />
            <BoxWithText 
                className='box-left-title'
                title='Sobre a Porto'
                content='A Porto é uma holding brasileira fundada em 1945. A atuação da empresa se baseia em três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank. A Porto faz venda de serviços para casa, carro e conveniência. Os serviços vão desde instalações e reparos elétricos e hidráulicos até limpeza de tecidos e higienização de veículos a seco.'
            />
            <BoxWithText 
                className='box-left'
                title='O grupo da Porto conta com:'
                content='13 mil funcionários, 12 mil prestadores, 36 mil corretores parceiros, 11.8 milhões de clientes, 55 sucursais escritórios regionais em todo o mundo.'
            />
            <BoxWithText 
                className='box-left'
                title='Qual é a missão da Porto?'
                content='A Porto é uma holding brasileira fundada em 1945. A atuação da empresa se baseia em três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank. A Porto faz venda de serviços para casa, carro e conveniência. Os serviços vão desde instalações e reparos elétricos e hidráulicos até limpeza de tecidos e higienização de veículos a seco.'
            />
            <BoxWithText 
                className='box-left'
                title='Em que ano a Porto iniciou seus trabalhos?'
                content='A Porto iniciou suas atividades em 1945, com apenas 50 funcionários. Atualmente, é composta por 27 empresas com quase 14 mil funcionários. Reconhecida como uma das maiores seguradoras do País, a Porto hoje é mais que uma seguradora, é um ecossistema de soluções de serviços de proteção com tecnologia embarcada, para melhorar e facilitar a experiência do cliente. Com mais de 70 anos de mercado, a atuação da companhia se concentra hoje em quatro pilares estratégicos de negócio: Seguros, Saúde, Negócios e Financeiros.'
            />
            <Footer />
        </>
    );
}

export default Sobre;