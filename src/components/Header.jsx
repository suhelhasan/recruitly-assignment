import { Button } from "@mantine/core";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { updateCompany } from "../api/CompanyService";

// const Header = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <header>
//       <Button onClick={handleLogout}>Logout</Button>
//     </header>
//   );
// };

// export default Header;

import { AppShell } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

export default function Demo() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppShell
      header={{ height: 60, width: "100vh" }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding='md'
    >
      <AppShell.Header
        // display='flex'
        // justify='space-between'
        // align='center'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10%",
        }}
        // direction='column'
        // wrap='wrap'
      >
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' /> */}
        <div>Logo</div>
        <Button onClick={handleLogout}>Logout</Button>
      </AppShell.Header>

      {/* <AppShell.Navbar p='md'>Navbar</AppShell.Navbar> */}

      {/* <AppShell.Main>Main</AppShell.Main> */}
    </AppShell>
  );
}
