import Stepper from "react-stepper-horizontal/lib/Stepper";
import React, { useContext } from "react";
import styled from "styled-components";

const StepContainer = styled.div`
margin: 0;
padding: 0;
cursor: pointer;
@media (max-width: 768px) {
 
}
`;

export default function StepperComponent({ step, steps, theme }) {

  return (
    <StepContainer>
      <Stepper
        steps={steps}
        activeStep={step}
        activeColor={theme.breadcrumb.activeColor}
        activeBorderStyle="solid"
        activeBorderColor={theme.breadcrumb.activeBorderColor}
        completeBorderStyle="solid"
        completeColor={'#9BD9A7'}
       completeBarColor={'#9BD9A7'}
       defaultBorderWidth={6}
      />
    </StepContainer>


  );
}