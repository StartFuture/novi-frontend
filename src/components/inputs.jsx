import styles from '../assets/css/inputs.module.css'
import LogoNovi from '../pages/registerPage/assets/image/Noví(1).png'
import { useState } from 'react';
import validator from 'validator';
import {Routes, Route, useNavigate} from 'react-router-dom';
import TermsConditionsPage from "../pages/termsConditions/index";

export default function Inputs() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dtBirth, setDtBirth] = useState("");
    const [dtBirthError, setDtBirthError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfError, setCpfError] = useState("");

    const navigate = useNavigate();

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
        
        return true
    }

    //Envio de formulario atraves do axios
    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInfo = {
            "name_user": document.getElementById("name").value,
            "date_birth": document.getElementById("dateBirth").value,
            "email": document.getElementById("email").value,
            "cpf": document.getElementById("cpf").value,
            "cellphone": document.getElementById("phone").value,
            "password_user": document.getElementById("password").value,
            "news": false,
            "info_conditions": false,
        }

        const addressInfo = {
            "cep": document.getElementById("cep").value,
            "state_user": document.getElementById("state").value,
            "city": document.getElementById("city").value,
            "address_user": document.getElementById("address").value,
            "address_number": document.getElementById("address_number").value,
            "complements": document.getElementById("complements").value
        }

        console.log(addressInfo)
        console.log(userInfo)

        navigate('/terms-conditions', {state : {address : addressInfo, user: userInfo}});
    
        // const formData = new FormData(form);
    
        // formData.append("address", address);
        // formData.append("user", userInfo);
    
        // axios
        //     .post("http://127.0.0.1:8000", formData)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        
        });
    }

    return (

        <>
            <div className={styles["layout-grid"]}>
                <div className={styles["forms-align-logo"]}>

                    <img src={LogoNovi} alt="Logo" />

                    <form id="form" className={styles["forms-align"]}>

                        <div className={styles["first-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <label>Nome completo</label>
                                <input
                                    required
                                    id="name"
                                    placeholder='Digite aqui'
                                />

                                <label>Email</label>
                                <input
                                    required
                                    type='email'
                                    id="email"
                                    placeholder='Digite aqui'
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                                <small>{emailError}</small>
                                <br/>

                                <label>CPF</label>
                                <input
                                    required
                                    id="cpf"
                                    placeholder='Digite aqui'
                                    value={cpf}
                                    onChange={(e) => {setCpf(e.target.value)}}
                                />
                                <small>{cpfError}</small>
                                <br/>
                            </div>

                            <div className={styles["second-section"]}>
                                <label>Data de nascimento</label>
                                <input
                                    required
                                    id="dateBirth"
                                    type="date"
                                    placeholder='Digite aqui'
                                    value={dtBirth}
                                    onChange={(e) =>{setDtBirth(e.target.value)}}
                                />
                                <small>{dtBirthError}</small>
                                <br/>
                            
                                <label>Celular</label>
                                <input
                                    required
                                    id="phone"
                                    type='tel'
                                    placeholder='DDD + Celular'
                                    value={phone}
                                    onChange={(e) => {setPhone(e.target.value)}}
                                />
                                <small>{phoneError}</small>
                                <br/>
                                <hr></hr>
                            </div>
                        </div>

                        <div className={styles["second-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <label>CEP</label>
                                <input
                                    required
                                    id="cep"
                                    placeholder='Digite aqui'
                                />

                                <div className={styles["second-section"]}>

                                    <label>Estado</label>
                                    <input 
                                        required
                                        id="state"
                                        placeholder='Digite aqui'
                                    />

                                    <label>Endereço</label>
                                    <input
                                        required
                                        id="address"
                                        placeholder='Digite aqui'
                                    />

                                    <div className={styles["third-section"]}>

                                        <label>Cidade</label>
                                        <input
                                            required
                                            id="city"
                                            placeholder='Digite aqui'
                                        />

                                        <label>Nº</label>
                                        <input
                                            required
                                            id="address_number"
                                            placeholder='Digite aqui'
                                        />

                                    </div>

                                </div>

                                <label>complemento</label>
                                <input
                                    id="complements" 
                                    placeholder='Digite aqui'
                                />
                            </div>
                        </div>


                        <div className={styles["third-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <hr></hr>
                                <label>Senha</label>
                                <input
                                    required
                                    id="password"
                                    placeholder='Digite aqui'
                                />

                                <label>Confirmar senha</label>
                                <input
                                    required
                                    id="confirm_password"
                                    placeholder='Digite aqui'
                                />
                            </div>
                        </div>

                        <button className={styles.button} onClick={handleSubmit}>Cadastrar</button>
                        {/* <button className={styles.button}>Cadastrar</button> */}

                    </form>

                </div>
            </div>

            <Routes>
            <Route exact path="/terms-conditions" element={<TermsConditionsPage/>}></Route>
            </Routes>

        </>

    )

}