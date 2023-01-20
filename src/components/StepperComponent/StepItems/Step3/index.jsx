import styled from "styled-components";
import { useState } from "react";

const StepTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
`;

const Container = styled.div`

`;

const InputText = styled.input`
background: #FFFFFF;
border: 1px solid #8D8D8D;
border-radius: 10px;
padding: 8px;

`;

const InputTextLabel = styled.label`
font-family: ${props => props.theme.fonts[0]};
display: block;

`;

const Form = styled.div`
margin-left: 110px;
float: left;
display: block;
`;

const FormTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #8D8D8D;
`;

const CalculeteButton = styled.button`
background: #5AADE5;
border-radius: 10px;
border: none;
padding: 8px;
color: #fff;
margin-left: 10px;
cursor: pointer;
&:hover {
  background: #137bc0;
}
`;

export default function Step3() {
  const [wallHeights, setWallHeights] = useState([0]);
  const [wallWidths, setWallWidths] = useState([0]);
  const [numberOfWindows, setNumberOfWindows] = useState(0);
  const [windowWidths, setWindowWidths] = useState([]);
  const [windowHeights, setWindowHeights] = useState([]);
  const [numberOfDoors, setNumberOfDoors] = useState(0);
  const [doorWidths, setDoorWidths] = useState([]);
  const [doorHeights, setDoorHeights] = useState([]);
  const [requiredArea, setRequiredArea] = useState(0);
  const [suggestedPurchase, setSuggestedPurchase] = useState([]);

  function addWall() {
    setWallHeights([...wallHeights, 0]);
    setWallWidths([...wallWidths, 0]);
  }

  function calculateRequiredArea() {
    let wallArea = 0;
    for (let i = 0; i < wallHeights.length; i++) {
      let currentWallArea = wallHeights[i] * wallWidths[i];
      wallArea += currentWallArea;
    }

    let windowArea = 0;
    for (let i = 0; i < windowWidths.length; i++) {
      let currentWindowArea = windowWidths[i] * windowHeights[i];
      windowArea += currentWindowArea;
    }

    let doorArea = 0;
    for (let i = 0; i < doorWidths.length; i++) {
      let currentDoorArea = doorWidths[i] * doorHeights[i];
      doorArea += currentDoorArea;
    }

    let totalArea = wallArea - windowArea - doorArea;
    setRequiredArea(totalArea);
    suggestPurchase(totalArea);
  }

  function suggestPurchase(requiredArea) {
    const cans = [0.5, 2.5, 3.6, 18];
    let remainingArea = requiredArea;
    let suggestion = [];
    let i = cans.length - 1;
    while (i >= 0) {
      if (remainingArea >= cans[i]) {
        let canAmount = Math.floor(remainingArea / cans[i]);
        suggestion.push({ size: cans[i], amount: canAmount });
        remainingArea -= canAmount * cans[i];
      }
      i--;
    }
    setSuggestedPurchase(suggestion);
  }

  return (
    <Container>
      <StepTitle>
        3. Qual a dimensão da área que pretende pintar?
      </StepTitle>

      <Form>
        <FormTitle>Coloque as dimensões a ser pintada (m)</FormTitle>
        <button onClick={addWall}>Add Wall</button>
        {
          wallHeights.map((_, index) => (
            <div key={index}>
              <InputTextLabel>Altura da parede: {index + 1}:</InputTextLabel>

              <InputText type="number" id="wall-height" name="altura" onChange={e => setWallHeights(wallHeights.map((val, i) => i === index ? e.target.value : val))}
              ></InputText>

              <InputTextLabel>Largura da parede: {index + 1}</InputTextLabel>
              <InputText type="number" name="wall-width" onChange={e => setWallWidths(wallWidths.map((val, i) => i === index ? e.target.value : val))}></InputText>
            </div>
          ))
        }
      </Form>
      <Form>
        <FormTitle>Coloque as dimensões da JANELA (m)</FormTitle>

        <InputTextLabel >Numero de Janelas</InputTextLabel>
        <InputText type="number" id="numero de janelas" name="altura" onChange={e => setNumberOfWindows(e.target.value)}></InputText>

        <InputTextLabel for={'input_altura'}>Altura</InputTextLabel>
        <InputText type="text" id="input_altura" name="altura" onChange={e => setWindowHeights(e.target.value)}></InputText>

        <InputTextLabel>Largura</InputTextLabel>
        <InputText type="text" name="largura" onChange={e => setWindowWidths(e.target.value)} ></InputText>
      </Form>

      <Form>
        <FormTitle>Coloque as dimensões da PORTA (m)</FormTitle>

        <InputTextLabel for={'input_altura'}>Número de Portas</InputTextLabel>
        <InputText type="number" id="input_altura" name="altura" onChange={e => setNumberOfDoors(e.target.value)}></InputText>

        <InputTextLabel for={'input_altura'}>Altura</InputTextLabel>
        <InputText type="number" id="input_altura" name="altura" onChange={e => setDoorWidths(e.target.value)}></InputText>

        <InputTextLabel>Largura</InputTextLabel>
        <InputText type="number" name="largura" onChange={e => setDoorHeights(e.target.value)}></InputText>
      </Form>

      <CalculeteButton onClick={calculateRequiredArea}>Calcular</CalculeteButton>

      <h2>Area: {requiredArea} metros2</h2>
      <h2>Sugerimos que compre:</h2>
      <ul>
        {suggestedPurchase.map((can, index) => (
          <li key={index}>{can.amount} galão de {can.size} litro(s)</li>
        ))}
      </ul>


    </Container>
  );
} 