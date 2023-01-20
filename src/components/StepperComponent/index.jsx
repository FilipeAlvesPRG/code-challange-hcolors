import Stepper from "react-stepper-horizontal/lib/Stepper";
import Step1 from "./StepItems/Step1";
import React, { useContext } from "react";
import Step2 from "./StepItems/Step2";
import Step3 from "./StepItems/Step3";
import Step4 from "./StepItems/Step4";
import styled from "styled-components";

export default function StepperComponent({ onStepClick, step, steps, theme }) {

  return (
    <Stepper
      steps={steps}
      activeStep={step}
      activeColor={theme.breadcrumb.activeColor}
      activeBorderStyle="solid"
      activeBorderColor={theme.breadcrumb.activeBorderColor}
      completeBorderStyle="solid"
      completeColor={'#9BD9A7'}
    />

  );
}