import { useEffect, useState } from "react";
import { TextInput, Group, Button, Stack } from "@mantine/core";
import { addCompany, updateCompany } from "../api/CompanyService";

export default function CreateCompanyForm({
  updateData,
  setOpened,
  formType,
  dataProvided = {},
}) {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setError] = useState("");

  useEffect(() => {
    if (Object.keys(dataProvided)?.length) {
      setName(dataProvided?.name);
      setWebsite(dataProvided?.website);
      setEmail(dataProvided?.email);
      setPhone(dataProvided?.phone);
    }
  }, []);

  let createCompany = () => {
    if (name) {
      addCompany({ name, website, email, phone }).then((response) => {
        updateData(response.data);
        setOpened(false);
        alert("New Company added");
      });
    } else {
      setError("Please enter the name");
    }
  };

  let updateCompanyFunction = (id) => {
    if (name) {
      updateCompany({ name, website, email, phone, id }).then((response) => {
        updateData(response.data);
        setOpened(false);
      });
    } else {
      setError("Please enter the name.");
    }
  };
  return (
    <form>
      <Stack>
        <TextInput
          required
          label='Company Name'
          placeholder='enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          radius='md'
          error={err}
        />

        <TextInput
          label='Website'
          placeholder='enter website'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          radius='md'
        />
        <TextInput
          label='Email'
          placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          radius='md'
        />
        <TextInput
          label='Phone'
          placeholder='enter phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          radius='md'
        />
      </Stack>

      <Group justify='space-between' mt='xl'>
        <Button
          // type='submit'
          radius='xl'
          onClick={() => {
            formType == "add"
              ? createCompany()
              : updateCompanyFunction(dataProvided?.id);
          }}
          color='#0c2875'
        >
          {formType == "add" ? "Add Company" : "Update Company"}
        </Button>
      </Group>
    </form>
  );
}
