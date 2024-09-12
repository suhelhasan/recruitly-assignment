import { useEffect, useState } from "react";
import { getCompany } from "../api/CompanyService";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Flex, Group, Button, Text, Modal } from "@mantine/core";
import CreateCompanyForm from "../components/CreateCompanyForm";

const CompanyDetailPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    getCompany(id).then((response) => {
      setCompany(response.data);
    });
  }, [id]);

  let updateData = (data) => {
    setCompany(data);
  };
  return (
    <Flex
      mih={"100vh"}
      w={"100vw"}
      pt='100px'
      pb='100px'
      bg='#e9f3ff'
      justify='center'
      align='center'
      direction='column'
      // wrap='wrap'
    >
      <Header />
      {company ? (
        <>
          <Flex h={"100%"} w={"60%"} direction='column'>
            <Flex mt='10px'>
              <Text size='xl' fw={700} c='#000' w='250px'>
                Company Name:{" "}
              </Text>
              <Text size='xl' fw={700} c='#0c2875' pl={"20px"}>
                {company.name ? company.name : "NA"}
              </Text>
            </Flex>
            <Flex mt='10px'>
              <Text size='xl' fw={700} c='#000' w='250px'>
                Company Website:{" "}
              </Text>
              <Text size='xl' fw={700} c='#0c2875' pl={"20px"}>
                {company.website ? company.website : "NA"}
              </Text>
            </Flex>
            <Flex mt='10px'>
              <Text size='xl' fw={700} c='#000' w='250px'>
                Company Phone:{" "}
              </Text>
              <Text size='xl' fw={700} c='#0c2875' pl={"20px"}>
                {company.phone ? company.phone : "NA"}
              </Text>
            </Flex>
            <Flex mt='10px'>
              <Text size='xl' fw={700} c='#000' w='250px'>
                Company Email:{" "}
              </Text>
              <Text size='xl' fw={700} c='#0c2875' pl={"20px"}>
                {company.email ? company.email : "NA"}
              </Text>
            </Flex>

            {/* <button onClick={updateCompanyFun}>Update</button> */}
            <Group justify='space-between' mt='xl'>
              <Button
                radius='xl'
                onClick={() => {
                  setOpened(true);
                }}
                color='#0c2875'
              >
                Update Company
              </Button>
            </Group>
          </Flex>
          <Modal
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
            title='Update Company'
            withCloseButton={true}
            centered
            size='lg'
            zIndex={9999}
          >
            <CreateCompanyForm
              updateData={updateData}
              setOpened={setOpened}
              formType='update'
              dataProvided={{
                id: id,
                name: company.name,
                email: company.email,
                phone: company.phone,
                website: company.website,
              }}
            />
          </Modal>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Flex>
  );
};

export default CompanyDetailPage;
