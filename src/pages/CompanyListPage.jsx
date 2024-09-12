import { useEffect } from "react";
import Companies from "../components/Companies";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CompanyListPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Header />
      <Companies />
    </div>
  );
};

export default CompanyListPage;
