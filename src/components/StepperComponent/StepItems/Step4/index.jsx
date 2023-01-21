import styled from "styled-components";
import bucket_image from '../../../../assets/bucket.svg'
import { useContext } from "react";
import { PaintContext, PaintProvider } from "../../../../context/resultContext";



const StepTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
font-size: 18px;
`;

const StepSubTitle = styled.h4`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
color: #8D8D8D;
font-size: 14px;
font-weight: 300;
`;

const BucketImage = styled.img`
padding: 10px;
`;

const ImageContainer = styled.div`
width: 100%;
display: inline-block;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;
`;



const ResultContainer = styled.div`
display: inline-block;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
width: 33.33%;

`;

const ResultText = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
font-size: 18px;
color: #8D8D8D;
`;

export default function Step4() {

  const bucket_quantity = [18, 3, 2, 5];
  const { requiredArea, suggestedPurchase } = useContext(PaintContext);

  return (
    <div>
      <StepTitle>4. Resultado</StepTitle>

      <ResultContainer>
        <ResultText>{requiredArea} m²</ResultText> <StepTitle>Area Total</StepTitle>
      </ResultContainer>
      {
        suggestedPurchase.map((item, index) => (
          <ResultContainer key={index}>
            <ResultText>
              {item.size} L
            </ResultText>
            <StepTitle>
              {item.amount} Galões
            </StepTitle>
          </ResultContainer>
        ))
      }

    </div>
  );
} 