import React from 'react';
import { _useProgramInfo } from '../__hooks/_useProgramInfo';

import { ProgramInfoContext } from '../context/ProgramInfoContext';

type Props = {};

export const ProgramInfoProvider: React.FC<Props> = ({ children }) => {
	const context = _useProgramInfo();

	return <ProgramInfoContext.Provider value={context}>{children}</ProgramInfoContext.Provider>;
}
