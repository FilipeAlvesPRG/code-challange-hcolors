import styled from "styled-components";
import bucket_image from '../../../../assets/bucket.svg'

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
width: 50%;

`;

const ResultText = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
font-size: 18px;
color: #8D8D8D;
`;

export default function Step4() {

  const bucket_quantity = [18, 3, 2, 5];

  return (
    <div>
      <StepTitle>4. Resultado</StepTitle>
      <StepSubTitle>Clique no formato da lata desejado para que a quantidade em litros seja convertida em número de latas</StepSubTitle>

      <ResultContainer>
        <ResultText>100</ResultText> <StepTitle>Litros</StepTitle>
      </ResultContainer>
      <ResultContainer>
        <ResultText>100</ResultText><StepTitle>Latas</StepTitle>
      </ResultContainer>


      <ImageContainer>
        {bucket_quantity.map((quantity, index) => (
          <BucketImage key={index} src={bucket_image} />
        ))}
        <a >
          <BucketImage src={bucket_image} />
        </a>

      </ImageContainer>
    </div>
  );
} 