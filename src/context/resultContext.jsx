import { createContext, useState } from 'react';

export const PaintContext = createContext();

export const PaintProvider = (props) => {
  const [requiredArea, setRequiredArea] = useState(0);
  const [suggestedPurchase, setSuggestedPurchase] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PaintContext.Provider value={{ activeStep, setActiveStep, requiredArea, suggestedPurchase, setRequiredArea, setSuggestedPurchase }}>
      {props.children}
    </PaintContext.Provider>
  )
}
