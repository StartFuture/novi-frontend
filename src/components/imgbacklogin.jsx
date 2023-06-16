import {AiOutlineArrowLeft} from 'react-icons/ai';
import styles from '../assets/css/imgbacklogin.module.css';
import  Maskgroup from '../pages/login/assets/img/Maskgroup.png';

import { Link } from 'react-router-dom';


export default function ImgBackLogin()

{
return (
    <>

<Link to='/login' className="link"><AiOutlineArrowLeft className={styles["arrow-icon"]}/>
<p className={styles["p-back-to-login"]}>Voltar ao login</p></Link>

<img className={styles["background-image"]} src={Maskgroup} alt="imagem-back-ground" />
</>
)


}