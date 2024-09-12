import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
// import { Button, TextInput, Input } from "@mantine/core";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Input } from '@mantine/core';

// const Login = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();

//   useEffect(() => {
//     redirect();
//   }, [isAuthenticated]);

//   let redirect = () => {
//     if (isAuthenticated) {
//       navigate("/companylist");
//     }
//   };

//   const handleLogin = () => {
//     if (username === "admin" && password === "password") {
//       login();
//       redirect();
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <TextInput
//         label='Username'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <TextInput
//         label='Password'
//         type='password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button onClick={handleLogin}>Login</Button>
//     </div>
//   );
// };

// export default Login;

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Stack,
  Flex,
} from "@mantine/core";

export default function Login(props) {
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

  return (
    <Flex
      mih={"100vh"}
      w={"100vw"}
      bg='rgba(0, 0, 0, .1)'
      // gap='md'
      justify='center'
      align='center'
      direction='row'
      wrap='wrap'
    >
      <Paper radius='md' p='xl' withBorder {...props}>
        {/* <Text size='lg' fw={500}>
          Welcome to Mantine
        </Text> */}

        <form onSubmit={() => console.log("hello")}>
          <Stack>
            <TextInput
              required
              label='Username'
              placeholder='enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // error={"Invalid email"}
              radius='md'
            />

            <PasswordInput
              required
              label='Password'
              placeholder='your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // error={"Password should include at least 6 characters"}
              radius='md'
            />
          </Stack>

          <Group justify='space-between' mt='xl'>
            <Button type='submit' radius='xl' onClick={handleLogin}>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}
