import { useContext } from 'react';
import { ProgramInfoContext } from '../context/ProgramInfoContext';

export const useProgramInfo = () => useContext(ProgramInfoContext);
