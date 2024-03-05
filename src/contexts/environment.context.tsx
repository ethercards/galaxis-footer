import React, { FC, ReactNode, createContext } from 'react';
import EnvironmentsModel from '../models/environments.model';

interface EnvironmentContextModel {
  environments: EnvironmentsModel;
}

export const EnvironmentContext = createContext<EnvironmentContextModel>(
  {} as EnvironmentContextModel,
);

type Props = {
  children: ReactNode;
  environments: EnvironmentsModel;
};

const EnvironmentProvider: FC<Props> = ({ environments, children }) => {
  return (
    <EnvironmentContext.Provider value={{ environments }}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentProvider;
