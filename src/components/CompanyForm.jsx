import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { addCompany, updateCompany } from "../api/companyService";

const CompanyForm = ({ company, isEditMode }) => {
  const [name, setName] = useState(company ? company.name : "");

  const handleSubmit = () => {
    const data = { name };

    if (isEditMode) {
      updateCompany(company.id, data).then(() => {
        alert("Company updated successfully!");
      });
    } else {
      addCompany(data).then(() => {
        alert("Company added successfully!");
      });
    }
  };

  return (
    <div>
      <TextInput
        label='Company Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        {isEditMode ? "Update Company" : "Add Company"}
      </Button>
    </div>
  );
};

export default CompanyForm;
