function FormCadastro() {
    const alertUser = (event) => {
        event.preventDefault();
        alert('Cadastrado com sucesso!')
    }

    return (
        <>
            <form onSubmit={alertUser} className="form-cadastro">
                <label>Nome completo:
                    <input 
                        type="text" 
                        value='Nome'
                    />
                </label>
                <label>Data de Nascimento:
                    <input 
                        type="date" 
                        value='dateOfBirth'
                    />
                </label>
                <label>CPF:
                    <input 
                        type="text" 
                        value='CPF'
                    />
                </label>
                <label>Endereço:
                    <input 
                        type="text" 
                        value='Emdereço'
                    />
                </label>
                <label>E-mail:
                    <input 
                        type="text" 
                        value='E-mail'
                    />
                </label>
                <label>Telefone Celular / Telefone Residencial:
                    <input 
                        type="text" 
                        value='Telefone'
                    />
                </label>
                <label>Valor da bicicleta:
                    <input 
                        type="number" 
                        value='Valor'
                    />
                </label>
                <label>Marca da bicicleta:
                    <input 
                        type="text" 
                        value='Marca'
                    />
                </label>
                <input type="submit" value="Continuar"/>
            </form>
        </>
    );
}

function FormLogin() {
    const alertUser = (event) => {
        event.preventDefault();
        alert('Login feito com sucesso!')
    }

    return (
        <>
            <form onSubmit={alertUser} className="form-login">
                <label>CPF:
                    <input 
                        type="text" 
                        value='CPF'
                    />
                </label>
                <label>Senha:
                    <input 
                        type="password" 
                    />
                </label>
                <input type="submit" value="Login"/>
            </form>
        </>
    );
}

function FormVistoria() {
    const alertUser = (event) => {
        event.preventDefault();
        alert('Login feito com sucesso!')
    }

    return (
        <>
            <form onSubmit={alertUser} className="form-login">
                <label>Digite o seu nome completo:
                    <input 
                        type="text" 
                        value='Nome'
                    />
                </label>
                <label>Informe o número do seu CPF:
                    <input 
                        type="text" 
                        value='CPF'
                    />
                </label>
                <label>Informe o número do seguro:
                    <input 
                        type="text" 
                        value='Seguro'
                    />
                </label>
                <label>Informe o seu e-mail:
                    <input 
                        type="text" 
                        value='E-mail'
                    />
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}

export {FormCadastro, FormLogin, FormVistoria};