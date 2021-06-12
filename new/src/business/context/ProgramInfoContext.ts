import { createContext } from 'react';
import { _useProgramInfo } from '../__hooks/_useProgramInfo';

type Context = ReturnType<typeof _useProgramInfo>;

export const ProgramInfoContext = createContext({} as Context);
