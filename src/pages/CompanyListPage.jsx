// import { updateCompany } from "../api/CompanyService";
import CompanyList from "../components/CompanyList";
import Header from "../components/Header";
// import { useAuth } from "../context/AuthContext";

const CompanyListPage = () => {
  // const { isAuthenticated } = useAuth();
  // console.log("isAuthenticated", isAuthenticated);

  return (
    <div>
      <Header />
      <CompanyList />
    </div>
  );
};

export default CompanyListPage;
