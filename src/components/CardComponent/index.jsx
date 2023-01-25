import styled from "styled-components";

const Card = styled.div`
border: 1px solid #8D8D8D;
border-radius: 10px;
background-color: #F9F9F9;
width: fit-content;

float: left;
`;

const CardImage = styled.img`
padding: 20px;
`;

export const CardContainer = styled.div`
 display: flex;
padding-left: 20px;
padding-right: 20px;
text-align: center;
justify-content: space-between;
align-items: center;
  @media (max-width: 768px) {
    display: flex;
   margin: 0;
   padding-top: 10px;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  }
`;

const CardTitle = styled.h5`
text-align: center;
font-family: ${props => props.theme.fonts[0]};
`;

const CardRadioButton = styled.input`
float: center;

&:checked {
  background-color: #9BD9A7;
}
`;

export default function CardComponent({ image, title, id, onChange, value }) {
  return (
    <CardContainer>
      <Card>
        <CardImage src={image} />
        <CardTitle>{title}</CardTitle>
        <CardRadioButton type={'radio'} value={value} id={id} name={'ambient_type'}
        onChange={onChange}
        ></CardRadioButton>
      </Card>
    </CardContainer>
  )
}