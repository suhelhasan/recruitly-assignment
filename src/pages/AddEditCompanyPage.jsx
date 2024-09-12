import CompanyForm from "../components/CompanyForm";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { getCompany } from "../api/companyService";
import { useEffect, useState } from "react";

const AddEditCompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    if (id) {
      getCompany(id).then((response) => {
        setCompany(response.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Header />
      <CompanyForm company={company} isEditMode={!!id} />
    </div>
  );
};

export default AddEditCompanyPage;
