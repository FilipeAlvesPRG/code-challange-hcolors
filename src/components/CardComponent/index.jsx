import styled from "styled-components";
import internal_ambient from '../../assets/internal_ambient.svg';
import external_ambient from '../../assets/external_ambient.svg'
import both_ambients from '../../assets/both_ambients.svg'


const Card = styled.div`
border: 1px solid #8D8D8D;
border-radius: 10px;
background-color: #F9F9F9;
width: fit-content;
margin-left: 20px;
float: left;
`;

const CardRight = styled.div`
border: 1px solid #8D8D8D;
border-radius: 10px;
background-color: #F9F9F9;
width: fit-content;
margin-left: 20px;
float: left;
`;

const CardImage = styled.img`
padding: 20px;
`;

export const CardContainer = styled.div`
 display: flex;
  justify-content: space-between;
  margin-left:80px;
  margin-right: 80px;
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

`;

const CardRadioButton = styled.input`
float: center;
&:checked {
  background-color: #9BD9A7;
}
`;

export default function CardComponent({ image, title, id }) {
  return (
    <CardContainer>
      <Card>
        <CardImage src={image} />
        <CardTitle>{title}</CardTitle>
        <CardRadioButton type={'radio'} id={id} name={'ambient_type'}></CardRadioButton>
      </Card>
    </CardContainer>
  )
}