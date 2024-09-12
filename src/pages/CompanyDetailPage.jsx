import { useEffect, useState } from "react";
import { getCompany, updateCompany } from "../api/CompanyService";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
// import { useParams } from 'react-router-dom';

const CompanyDetailPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(id).then((response) => {
      setCompany(response.data);
    });
  }, [id]);

  let updateCompanyFun = () => {
    updateCompany({ name: "suhel", id: id }).then((response) => {
      setCompany(response.data);
      console.log("response", response);
    });
  };

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <h1>{company.name}</h1>

      <button onClick={updateCompanyFun}>Update</button>
      {/* Add more details as needed */}
    </div>
  );
};

export default CompanyDetailPage;
