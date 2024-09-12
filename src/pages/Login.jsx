import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Stack,
  Flex,
  useMatches,
} from "@mantine/core";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    redirect();
  }, [isAuthenticated]);

  let redirect = () => {
    if (isAuthenticated) {
      navigate("/companylist");
    }
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      login();
      redirect();
    } else {
      alert("Invalid credentials");
    }
  };

  const widthForDevices = useMatches({
    base: "90%",
    sm: "90%",
    lg: "40%",
  });

  return (
    <Flex
      mih={"100vh"}
      w={"100vw"}
      bg='#e9f3ff'
      justify='center'
      align='center'
      direction='row'
      wrap='wrap'
    >
      <Header hideButton={true} />
      <Paper radius='md' p='xl' withBorder w={widthForDevices}>
        <form>
          <Stack>
            <TextInput
              required
              label='Username'
              placeholder='enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              radius='md'
            />

            <PasswordInput
              required
              label='Password'
              placeholder='your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              radius='md'
            />
          </Stack>

          <Group justify='space-between' mt='xl'>
            <Button
              type='submit'
              radius='xl'
              onClick={handleLogin}
              color='#0c2875'
            >
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}
