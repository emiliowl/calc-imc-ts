import { createContext, ReactNode, useState } from 'react';
import Person from '../models/Person';

export type PersonContextType = {
  person: Person | null;
  setPerson: (person: Person) => void;
};

export interface PersonContextProviderProps {
  children: ReactNode
}

export const PersonContext = createContext<PersonContextType>({ person: null, setPerson: person => console.log('nothing important here...')});

export default function PersonContextProvider({ children }: PersonContextProviderProps) {
  const [person, setPerson] = useState(new Person(0.00, 0.00));

  return <PersonContext.Provider value={{person, setPerson}}>
    {children}
  </PersonContext.Provider>
}

