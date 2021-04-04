import React, { useEffect, useState } from "react";
import { useApiGet } from "../hooks/useApiGet";
import { ICompany } from "../models/ICompany";
import { GetAllCompanies } from "../services/CompanyService";

export const CompanyContext = React.createContext<
  Partial<{ companies: ICompany[] }>
>({});

interface CompanyProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const CompanyConsumer = CompanyContext.Consumer;

export const CompanyProvider: React.FC<CompanyProviderProps> = ({
  children,
}) => {
  const [companies, setCompanies] = useState<ICompany[]>();
  const { data } = useApiGet({ url: GetAllCompanies });

  console.log(companies);
  useEffect(() => {
    if (data) setCompanies(data?.companies);
  }, [data]);

  return (
    <CompanyContext.Provider value={{ companies }}>
      {children}
    </CompanyContext.Provider>
  );
};
