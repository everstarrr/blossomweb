"use client"
import { createContext, useContext, useState } from "react";

type SignupDialogType = {
  step: number;
  next: () => void;
  reset: () => void;
  setLogin: (step?: number) => void;
};

const SignupDialogContext = createContext<SignupDialogType | undefined>(
  undefined
);

export const SignupDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState(1);
  const next = () => setStep((prev) => prev + 1);
  const reset = () => setStep(1);
  const setLogin = () => setStep(5);

  return (
    <SignupDialogContext.Provider value={{ step, setLogin, next, reset }}>
      {children}
    </SignupDialogContext.Provider>
  );
};

export const useSignupDialog = () => {
  const context = useContext(SignupDialogContext);
  if (!context) throw new Error('useSignupDialog must be used within SignupDialogProvider');
  return context;
};