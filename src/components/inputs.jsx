import { valid } from 'semver';
import styles from '../assets/css/inputs.module.css'
import LogoNovi from '../pages/registerPage/assets/image/Noví(1).png'
import { useState } from 'react';
import validator from 'validator';

export default function Inputs() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dtBirth, setDtBirth] = useState("");
    const [dtBirthError, setDtBirthError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleSubmit = (e) => {

        //Email
        if (validator.isEmpty(email)) {
            setEmailError("Por favor, insira um email está vazio");
            e.preventDefault();
            return;
        }

        if (!validator.isEmail(email)) {
            setEmailError("Por favor, insira um email válido");
            e.preventDefault();
            return;
        }

        setEmailError("");


        //Phone
        if (validator.isEmpty(phone)) {
            setPhoneError("Por favor, insira um telefone está vazio");
            e.preventDefault();
            return;
        }

        if (!validator.isMobilePhone(phone, 'pt-BR')) {
            setPhoneError("Por favor, insira um telefone válido");
            e.preventDefault();
            return;
        }
        
        setPhoneError("");

        
        // Date Birth
        if(validator.isEmpty(dtBirth)){
            console.log('vazio');
            setDtBirthError("Por favor, insira uma data está vazia")
            e.preventDefault();
            return;
        }

        if (!validator.isDate(dtBirth)) {
            setDtBirthError("Por favor, insira uma data válida");
            e.preventDefault();
            return;
        }
        
        setDtBirthError("");

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
                                <input id='accountCpf' placeholder='Digite aqui'></input>
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
                                <input placeholder='Digite aqui'></input>

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