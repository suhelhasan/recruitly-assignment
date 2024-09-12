import { useEffect, useState } from "react";
import { getCompanies, updateCompany } from "../api/CompanyService";
import { Table, Flex, Button, Text, Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import CreateCompanyForm from "./CreateCompanyForm";
import { useDisclosure } from "@mantine/hooks";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((response) => {
      if (response.status == 200) {
        setCompanies(response.data.data);
        console.log(response.data);
      }
    });
  }, []);

  let createCompany = () => {
    updateCompany({ name: "danish company Loading" }).then((response) => {
      let companiesArr = [response.data, ...companies];
      setCompanies(companiesArr);
    });
  };
  const [opened, setOpened] = useState(false);
  // const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        // opened={opened}
        // onClose={close}
        // title='Authentication'
        // withCloseButton={true}
        // centered
        // // zIndex={200}
        // // xOffset={0}
        // // yOffset={0}
        // withinPortal={true}
        // withOverlay={true}
        // fullScreen={true}
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
        title='Create Company'
        withCloseButton={true}
        centered
        size='lg'
        zIndex={9999}
      >
        <Text>Modal with size auto will fits its content</Text>
        <Flex mt='100px'>
          <CreateCompanyForm />
        </Flex>
      </Modal>

      <Flex
        mih={"100vh"}
        w={"100vw"}
        pt='100px'
        pb='100px'
        bg='#e9f3ff'
        justify='center'
        align='center'
        direction='column'
        wrap='wrap'
        // pos={"relative"}
      >
        <Flex w={"80%"} mt={"20px"} mb={"20px"} justify='space-between'>
          <Text size='xl' fw={700} c='#0c2875'>
            Company Data
          </Text>
          <Button
            w='20%'
            onClick={() => {
              setOpened(true);
            }}
            c='#0c2875'
            bg='transparent'
            bd='1px solid #0c2875'
          >
            Create new company
          </Button>
        </Flex>
        <Table
          w='80%'
          withColumnBorders={true}
          withTableBorder={true}
          ta='center'
          mt='10px'
          borderColor={"#0c2875"}
          radius='md'
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta='center' p='15px' fw={800}>
                Company name
              </Table.Th>
              <Table.Th ta='center' p='15px' fw={800}>
                Website
              </Table.Th>
              <Table.Th ta='center' p='15px' fw={800}>
                Email
              </Table.Th>
              <Table.Th ta='center' p='15px' fw={800}>
                Phone
              </Table.Th>
              <Table.Th ta='center' p='15px' fw={800}>
                View Details
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {companies?.map((company) => (
              <Table.Tr key={company.id} p='10px'>
                <Table.Td>{company.name ? company.name : "NA"}</Table.Td>
                <Table.Td>{company.website ? company.website : "NA"}</Table.Td>
                <Table.Td>{company.email ? company.email : "NA"}</Table.Td>
                <Table.Td>{company.phone ? company.phone : "NA"}</Table.Td>
                <Table.Td>
                  {" "}
                  <Link to={`/company/${company.id}`} c='#0c2875'>
                    Details
                  </Link>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Flex>
    </>
  );
};

export default CompanyList;
