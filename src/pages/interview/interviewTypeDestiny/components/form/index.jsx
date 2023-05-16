import React from "react";

function Form(){
    return(
        <FormStyled>
            <h1>Qual tipo de destino você prefere?</h1>
            
            <input type="radio" name="destiny_type"/>
            <label> Praia </label>
            <small>Belissimas praias ao redor do nosso Brasilzao</small>

            <h1>Qual tipo de destino você prefere?</h1>

            <input type="radio" name="destiny_type"/>
            <label> Natureza </label>
            <small>Conecte com a natureza com experiências incriveis</small>


            <h1>Qual tipo de destino você prefere?</h1>

            <input type="radio" name="destiny_type"/>
            <label> Urbano </label>
            <small>Conheça pontos turísticos nas cidades nas lindas</small>
        </FormStyled>
        
    )
}

export default Form;