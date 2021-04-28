import { createContext, ReactNode, useState } from 'react';
import Person from '../models/Person';

export type PersonContextType = {
  person: Person | null;
  setData: (person: Person) => void;
};

export interface PersonContextProviderProps {
  children: ReactNode
}

export const PersonContext = createContext<PersonContextType>({ person: null, setData: person => console.log('nothing important here...')});

export default function PersonContextProvider({ children }: PersonContextProviderProps) {
  const [person, setPerson] = useState(new Person(0.00, 0.00));
  const setData = (data: Person) => {
    setPerson(person.copy(data))
  }

  return <PersonContext.Provider value={{person, setData}}>
    {children}
  </PersonContext.Provider>
}

