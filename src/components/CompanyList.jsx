import { useEffect, useState } from "react";
import { getCompanies, updateCompany } from "../api/CompanyService";
import { List, ListItem, Table, Flex, Button, Text } from "@mantine/core";
// import { Table } from '@mantine/core';
import { Link } from "react-router-dom";

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
      // console.log("response", response.data);
    });
  };

  return (
    <Flex
      mih={"100vh"}
      w={"100vw"}
      mt='50px'
      // bg='rgba(0, 0, 0, .1)'
      // gap='md'
      justify='center'
      align='center'
      direction='column'
      wrap='wrap'
    >
      <Flex
        // mih={"100vh"}
        w={"80%"}
        mt={"20px"}
        mb={"20px"}
        // bg='rgba(0, 0, 0, .1)'
        // gap='md'
        justify='space-between'
        // align='space-between'
        // direction='column'
        // wrap='wrap'
      >
        <Text size='xl' fw={700} c='teal.4'>
          Company Data
        </Text>
        <Button w='20%' onClick={createCompany}>
          Create new company
        </Button>
      </Flex>
      <Table
        w='80%'
        // borderColor='black'
        withColumnBorders={true}
        withTableBorder={true}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {companies?.map((company) => (
            <Table.Tr key={company.name}>
              <Table.Td>{company.name}</Table.Td>
              <Table.Td>{company.name}</Table.Td>
              <Table.Td>{company.name}</Table.Td>
              <Table.Td>
                {" "}
                <Link to={`/company/${company.id}`}>Visit</Link>{" "}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Flex>
  );
};

export default CompanyList;
