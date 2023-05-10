import { valid } from 'semver';
import styles from '../assets/css/inputs.module.css'
import LogoNovi from '../pages/registerPage/assets/image/Noví(1).png'
import { useState } from 'react';
import validator from 'validator';


export default function Inputs(props) {

//Mascara do CEP
//99999-999
//REGEX
const handleKeyUp = useCallback((e) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{5})(\d)/, "$1-$2")
    e.currentTarget.value = value;
}, []);

//check CEP

const checkCEP = (e) => 
{
const cep = e.target.value.replace(/\D/g, '')
console.log(cep);
fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {console.log(data);

});
}

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dtBirth, setDtBirth] = useState("");
    const [dtBirthError, setDtBirthError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfError, setCpfError] = useState("");

    const handleSubmit = (e) => {

        //Email
        if (validator.isEmpty(email)) {
            setEmailError("Por favor, insira um email!");
            e.preventDefault();
            return;
        }

        if (!validator.isEmail(email)) {
            setEmailError("Por favor, insira um email válido");
            e.preventDefault();
            return;
        }

        setEmailError("");


        // CPF
        if (validator.isEmpty(cpf)) {
            setCpfError("Por favor, insira um CPF!");
            e.preventDefault();
            return;
        }

        if(cpf.length != 11){
            setCpfError('CPF deve ter 11 digitos');
            e.preventDefault();
            return;
        }
        
        setCpfError("");

        
        // Date Birth
        if(validator.isEmpty(dtBirth)){
            console.log('vazio');
            setDtBirthError("Por favor, insira uma data!")
            e.preventDefault();
            return;
        }

        if (!validator.isDate(dtBirth)) {
            setDtBirthError("Por favor, insira uma data válida");
            e.preventDefault();
            return;
        }
        
        setDtBirthError("");
    
        
        //Phone
        if (validator.isEmpty(phone)) {
            setPhoneError("Por favor, insira um telefone!");
            e.preventDefault();
            return;
        }

        if (!validator.isMobilePhone(phone, 'pt-BR')) {
            setPhoneError("Por favor, insira um telefone válido");
            e.preventDefault();
            return;
        }
        
        setPhoneError("");

        

        return true;
    }

    return (

        <>
            <div className={styles["layout-grid"]}>
                <div className={styles["forms-align-logo"]}>

                    <img src={LogoNovi} alt="Logo" />

                    <form className={styles["forms-align"]}>

                        <div className={styles["first-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <label>Nome completo</label>
                                <input placeholder='Digite aqui'></input>

                                <label>Email</label>
                                <input
                                    type='email'
                                    placeholder='Digite aqui'
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    ></input>
                                <small>{emailError}</small>
                                <br/>

                                <label>CPF</label>
                                <input placeholder='Digite aqui'
                                    value={cpf}
                                    onChange={(e) => {setCpf(e.target.value)}}
                                ></input>
                                <small>{cpfError}</small>
                                <br/>
                            </div>

                            <div className={styles["second-section"]}>
                                <label>Data de nascimento</label>
                                <input 
                                placeholder='Digite aqui'
                                value={dtBirth}
                                onChange={(e) =>{setDtBirth(e.target.value)}}
                                ></input>
                                <small>{dtBirthError}</small>
                                <br/>
                            
                                <label>Celular</label>
                                <input
                                    type='tel'
                                    placeholder='DDD + Celular'
                                    value={phone}
                                    onChange={(e) => {setPhone(e.target.value)}}
                                ></input>
                                <small>{phoneError}</small>
                                <br/>
                                <hr></hr>
                            </div>
                        </div>

                        <div className={styles["second-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <label>CEP</label>
                                <input placeholder='99999-999' name='cep' onKeyUp={handleKeyUp} onBlur={checkCEP}></input>

                                <div className={styles["second-section"]}>

                                    <label>Estado</label>
                                    <input placeholder='Digite aqui'></input>

                                    <label>Endereço</label>
                                    <input placeholder='Digite aqui'></input>

                                    <div className={styles["third-section"]}>

                                        <label>Cidade</label>
                                        <input placeholder='Digite aqui'></input>

                                        <label>Nº</label>
                                        <input placeholder='Digite aqui'></input>

                                    </div>

                                </div>

                                <label>complemento</label>
                                <input placeholder='Digite aqui'></input>
                            </div>
                        </div>


                        <div className={styles["third-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <hr></hr>
                                <label>Senha</label>
                                <input placeholder='Digite aqui'></input>

                                <label>Confirmar senha</label>
                                <input placeholder='Digite aqui'></input>
                            </div>
                        </div>

                        <button className={styles.button} onClick={handleSubmit}>Cadastrar</button>

                    </form>

                </div>
            </div>

        </>

    )

}