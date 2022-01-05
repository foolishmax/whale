import React from 'react';
import { RadioGroupContextProps } from './Group';

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(
  null,
);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
