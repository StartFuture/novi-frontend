import {AiOutlineArrowLeft} from 'react-icons/ai'
import styles from '../assets/css/imgbacklogin.module.css'
import  Maskgroup from '../assets/img/Maskgroup.png'

export default function ImgBackLogin()

{
return (
    <>

<AiOutlineArrowLeft className={styles["arrow-icon"]}/>
<p className={styles["p-back-to-login"]}>Voltar ao login</p>

<img className={styles["background-image"]} src={Maskgroup} alt="imagem-back-ground" />
</>
)


}