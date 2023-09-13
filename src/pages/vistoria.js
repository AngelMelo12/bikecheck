import { BoxWithTitle } from "../components/box";
import Footer from "../components/footer";
import { FormVistoria } from "../components/form";

function Vistoria() {
    return (
        <>
            <BoxWithTitle 
                className='banner-mid'
                title='Vistoria Porto'
            />
            <section className="vistoria-form-section">
                <div className="vistoria-form-box">
                    <FormVistoria />
                </div>
                <div className="vistoria-form-img"/>
            </section>
            <Footer />
        </>
    );
}

export default Vistoria;