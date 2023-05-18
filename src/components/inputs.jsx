import styles from '../assets/css/inputs.module.css'
import LogoNovi from '../pages/registerPage/assets/image/Noví(1).png'
import { useState, useCallback } from 'react';
import validator from 'validator';
import {Routes, Route, useNavigate} from 'react-router-dom';
import TermsConditionsPage from "../pages/termsConditions/index";

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

    const [emailError, setEmailError] = useState("");
    const [dtBirthError, setDtBirthError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [cpfError, setCpfError] = useState("");
    const [userInfo, setUserInfo] = useState({ name_user: '', date_birth: '', email: '', cpf: '', cellphone: '', password_user: '' });

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        //Email
        if (validator.isEmpty(userInfo.email)) {
            setEmailError("Por favor, insira um email!");
            return;
        }

        if (!validator.isEmail(userInfo.email)) {
            setEmailError("Por favor, insira um email válido");
            return;
        }

        setEmailError("");


        // CPF
        if (validator.isEmpty(userInfo.cpf)) {
            setCpfError("Por favor, insira um CPF!");
            return;
        }

        if(userInfo.cpf.length != 11){
            setCpfError('CPF deve ter 11 digitos');
            return;
        }
        
        setCpfError("");

        
        // Date Birth
        if(validator.isEmpty(userInfo.date_birth)){
            setDtBirthError("Por favor, insira uma data!")
            return;
        }

        if (!validator.isDate(userInfo.date_birth)) {
            setDtBirthError("Por favor, insira uma data válida");
            return;
        }
        
        setDtBirthError("");
    
        
        //Phone
        if (validator.isEmpty(userInfo.cellphone)) {
            setPhoneError("Por favor, insira um telefone!");
            return;
        }

        if (!validator.isMobilePhone(userInfo.cellphone, 'pt-BR')) {
            setPhoneError("Por favor, insira um telefone válido");
            return;
        }
        
        setPhoneError("");
        
        // return true

        // const userInfo = {
        //     "name_user": document.getElementById("name").value,
        //     "date_birth": document.getElementById("dateBirth").value,
        //     "email": document.getElementById("email").value,
        //     "cpf": document.getElementById("cpf").value,
        //     "cellphone": document.getElementById("phone").value,
        //     "password_user": document.getElementById("password").value,
        // }

        const addressInfo = {
            "cep": document.getElementById("cep").value,
            "state_user": document.getElementById("state").value,
            "city": document.getElementById("city").value,
            "address_user": document.getElementById("address").value,
            "address_number": document.getElementById("address_number").value,
            "complements": document.getElementById("complements").value
        }

        sessionStorage.setItem('address', JSON.stringify(addressInfo));
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/terms-conditions');
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
                                    placeholder='Digite aqui'
                                    value={userInfo.user_name}
                                    onChange={(e) => {setUserInfo({...userInfo, user_name: e.target.value})}}
                                />

                                <label>Email</label>
                                <input
                                    required
                                    type='email'
                                    placeholder='Digite aqui'
                                    value={userInfo.email}
                                    onChange={(e) => {setUserInfo({...userInfo, email: e.target.value})}}
                                />
                                <small>{emailError}</small>
                                <br/>

                                <label>CPF</label>
                                <input
                                    required
                                    placeholder='Digite aqui'
                                    value={userInfo.cpf}
                                    onChange={(e) => {setUserInfo({...userInfo, cpf: e.target.value})}}
                                />
                                <small>{cpfError}</small>
                                <br/>
                            </div>

                            <div className={styles["second-section"]}>
                                <label>Data de nascimento</label>
                                <input
                                    required
                                    type="date"
                                    placeholder='Digite aqui'
                                    value={userInfo.date_birth}
                                    onChange={(e) =>{setUserInfo({...userInfo, date_birth: e.target.value})}}
                                />
                                <small>{dtBirthError}</small>
                                <br/>
                            
                                <label>Celular</label>
                                <input
                                    required
                                    type='tel'
                                    placeholder='DDD + Celular'
                                    value={userInfo.cellphone}
                                    onChange={(e) => {setUserInfo({...userInfo, cellphone: e.target.value})}}
                                />
                                <small>{phoneError}</small>
                                <br/>
                                <hr></hr>
                            </div>
                        </div>

                        <div className={styles["second-block-inputs"]}>
                            <div className={styles["first-section"]}>
                                <label>CEP</label>
                                <input required id="cep" placeholder='99999-999' name='cep' onKeyUp={handleKeyUp} onBlur={checkCEP}></input>

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
                                    value={userInfo.password_user}
                                    placeholder='Digite aqui'
                                    onChange={(e) => {setUserInfo({...userInfo, password_user: e.target.value})}}
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