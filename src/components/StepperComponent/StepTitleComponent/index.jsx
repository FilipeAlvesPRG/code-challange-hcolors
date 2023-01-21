import styled from "styled-components";

const StepTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
`;


export default function StepTitleComponent({ props }) {
  return (
    <StepTitle>{props}</StepTitle>
  )
}