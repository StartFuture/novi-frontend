import { useCallback } from 'react'
import styles from '../assets/css/inputs.module.css'
import LogoNovi from '../pages/registerPage/assets/image/Noví(1).png'


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
                                <input placeholder='Digite aqui' type='email'></input>

                                <label>CPF</label>
                                <input placeholder='Digite aqui'></input>
                            </div>

                            <div className={styles["second-section"]}>
                                <label>Data de nascimento</label>
                                <input placeholder='Digite aqui'></input>
                                
                                    <label>Celular</label>
                                    <input type='tel' placeholder='DDD + Celular'></input>
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

                        <button className={styles.button}>Cadastrar</button>

                    </form>

                </div>
            </div>

        </>

    )

}