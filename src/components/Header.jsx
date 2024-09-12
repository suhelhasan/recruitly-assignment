import { Button } from "@mantine/core";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AppShell, Image } from "@mantine/core";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

export default function Header({ hideButton }) {
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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        <Link to={`/`}>
          <Image src={logo} radius='md' h={30} w='auto' fit='contain' />
        </Link>
        {!hideButton && (
          <Button onClick={handleLogout} color='#0c2875'>
            Logout
          </Button>
        )}
      </AppShell.Header>
    </AppShell>
  );
}
