import { createContext, ReactNode } from "react";

import { Dispatch, SetStateAction } from "react";
import { MODE_AUTH } from "./types";


export interface ProviderProps {
 mode: string
 setMode: Dispatch<SetStateAction<MODE_AUTH>>;
}

export const Context = createContext<ProviderProps | null>(null);

export const Provider = ({ children, props }: {
  children: ReactNode,
  props: ProviderProps
}) => {
  return (
    <Context.Provider value={props}>
      {children}
    </Context.Provider>
  );
};