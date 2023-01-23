import styled from "styled-components";
import { useState, useContext } from "react";
import { PaintContext } from "../../../../context/resultContext";
import { Link } from "react-router-dom";
import StepTitleComponent from "../../StepTitleComponent";


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

const CalculeteButton = styled(Link)`
background: #5AADE5;
border-radius: 10px;
border: none;
padding: 8px;
color: #fff;
margin-left: 10px;
cursor: pointer;
text-decoration: none;
&:hover {
  background: #137bc0;
}
`;

const AddButton = styled.button`
margin-top: 10px;
  background: #5AADE5;
border-radius: 10px;
border: none;
color: #fff;
cursor: pointer;
text-decoration: none;
padding: 8px;
width: 60%;
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

  const { setRequiredArea, setSuggestedPurchase, requiredArea, suggestedPurchase, activeStep, setActiveStep, } = useContext(PaintContext);

  function addWall() {
    if (wallHeights.length < 4) {
      setWallHeights([...wallHeights, 1]);
      setWallWidths([...wallWidths, 1]);
    } else {
      alert("You cannot have more than 4 walls");
    }
  }

  function calculateRequiredArea() {
    let wallArea = 0;
    for (let i = 0; i < wallHeights.length; i++) {
      if (wallHeights[i] < 1 || wallHeights[i] > 50) {
        alert("A altura da parede deve estar entre 1 e 50 metros quadrados");
        return;
      }
      if (wallWidths[i] < 1 || wallWidths[i] > 50) {
        alert("A largura da parede deve estar entre 1 e 50 metros quadrados");
        return;
      }
      let currentWallArea = wallHeights[i] * wallWidths[i];
      wallArea += currentWallArea;
    }
    let totalArea = wallArea;
    if (numberOfWindows > 0) {
      totalArea -= (numberOfWindows * 2.4);
    }
    if (numberOfDoors > 0) {
      totalArea -= (numberOfDoors * 1.68);
    }
    if (totalArea > (wallArea / 2)) {
      totalArea = wallArea / 2;
    }
    setRequiredArea(totalArea);
    suggestPurchase(totalArea);
    console.log(totalArea);
    setActiveStep((i) => i + 1)
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
      <StepTitleComponent props={'3. Qual a dimensão da área que pretende pintar?'} />
      <Form>
        <FormTitle>Coloque as dimensões a ser pintada (m)</FormTitle>
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
        <AddButton onClick={addWall}>Adicionar parede</AddButton>

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

      <center>
        <CalculeteButton
          onClick={
            calculateRequiredArea}>
          Calcular
        </CalculeteButton>
      </center>


    </Container>
  );
} 