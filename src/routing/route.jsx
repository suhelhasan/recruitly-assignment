import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import CompanyListPage from "../pages/CompanyListPage";
import CompanyDetailPage from "../pages/CompanyDetailPage";
import AddEditCompanyPage from "../pages/AddEditCompanyPage";

export default function route() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/companylist' element={<CompanyListPage />} />
      <Route path='/company/:id' element={<CompanyDetailPage />} />
      {/* <Route path='/company/new' element={<AddEditCompanyPage />} /> */}
      {/* <Route path='/company/edit/:id' element={<AddEditCompanyPage />} /> */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
