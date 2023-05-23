import react from 'react'
import {TituloPergunta, ContainerQuiz, LayoutGrid, QuizPageGrid, Form, ContainerQuestions, ContainerAlignItems, VoltarHome, DivButton} from './style.ts';
import {AiOutlineArrowLeft} from 'react-icons/ai'


function QuizObejtivoViagem() {
return(


<LayoutGrid>
<QuizPageGrid>

<VoltarHome>

<AiOutlineArrowLeft className="arrowIcon"/>
<p className="pBackLogin">Voltar a Home</p>

<label className='container'>
<input className='inputStyle' type="radio" />
<label className="labelStyle" htmlFor="">Objetivo</label>
<span className='checkmark'></span>
</label>

<label className='container'>
<input className='inputStyle' type="radio" />
<label className="labelStyle" htmlFor="">Destino</label>
<span className='checkmark'></span>
</label>

<label className='container'>
<input className='inputStyle' type="radio" />
<label className="labelStyle" htmlFor="">Passeios</label>
<span className='checkmark'></span>
</label>

<label className='container'>
<input className='inputStyle' type="radio" />
<label className="labelStyle" htmlFor="">Saúde</label>
<span className='checkmark'></span>
</label>


</VoltarHome>

<ContainerQuiz className='secondAlign'>
<TituloPergunta>Qual objetivo da sua viagem</TituloPergunta>
<Form>

<ContainerQuestions>
    <label className='container'>
<input className='inputStyle' type="checkbox" />
<span className='checkmark'></span>
</label>
<ContainerAlignItems>
<label id='labelCultura' htmlFor="">Cultura</label>
<p className='pForm'>Viagem focada na cultura de onde está.</p>
</ContainerAlignItems>
</ContainerQuestions>


<ContainerQuestions>
    <label className='container'>
<input className='inputStyle' type="checkbox" />
<span className='checkmark'></span>
</label>
<ContainerAlignItems>
<label id='labelCultura' htmlFor="">Cultura</label>
<p className='pForm'>Viagem focada na cultura de onde está.</p>
</ContainerAlignItems>
</ContainerQuestions>


<ContainerQuestions>
    <label className='container'>
<input className='inputStyle' type="checkbox" />
<span className='checkmark'></span>
</label>
<ContainerAlignItems>
<label id='labelCultura' htmlFor="">Cultura</label>
<p className='pForm'>Viagem focada na cultura de onde está.</p>
</ContainerAlignItems>
</ContainerQuestions>


<ContainerQuestions>
    <label className='container'>
<input className='inputStyle' type="checkbox" />
<span className='checkmark'></span>
</label>
<ContainerAlignItems>
<label id='labelCultura' htmlFor="">Cultura</label>
<p className='pForm'>Viagem focada na cultura de onde está.</p>
</ContainerAlignItems>
</ContainerQuestions>


<ContainerQuestions>
    <label className='container'>
<input className='inputStyle' type="checkbox" />
<span className='checkmark'></span>
</label>
<ContainerAlignItems>
<label id='labelCultura' htmlFor="">Cultura</label>
<p className='pForm'>Viagem focada na cultura de onde está.</p>
</ContainerAlignItems>
</ContainerQuestions>



</Form>
<button className='buttonVoltar'>Voltar</button>

<button className='buttonProsseguir'>Prosseguir</button>

</ContainerQuiz>



</QuizPageGrid>
</LayoutGrid>


)




}

export default QuizObejtivoViagem;