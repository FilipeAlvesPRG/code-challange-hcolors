import styled from "styled-components";


const StepTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
`;

const InputSelect = styled.select`
border: 1px solid #8D8D8D;
border-radius: 8px;
width: 300px;
padding: 8px;

&::-ms-expand {
  display: none;
}
`;

const InputContainer = styled.div`
width: 100%;
align-items: center;
text-align: center;
justify-content: center;
`;


export default function Step2() {
  return (
    <>
      <StepTitle>
        2. Em qual superfície a tinta será aplicada?
      </StepTitle>
      <InputContainer>
        <InputSelect>
          <option value="">Selecione uma opção</option>
          <option value="parede">Parede</option>
          <option value="gesso">Gesso e Drywall</option>
          <option value="azulejo">Azulejo</option>
          <option value="madeira">Madeira</option>
          <option value="piso">Piso</option>
          <option value="metal">Metal</option>
          <option value="telhado">telhado</option>
        </InputSelect>
      </InputContainer>


    </>
  );
} 