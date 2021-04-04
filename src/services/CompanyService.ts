const prefix_company = "company";
const prefix_companies = "companies";

const GetAllCompanies = `/${prefix_companies}`;

const GetCompany = (companyName: string) => `/${prefix_company}/${companyName}`;

export { GetAllCompanies, GetCompany };
