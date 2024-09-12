import { MantineProvider } from "@mantine/core"; // Import MantineProvider
import Routes from "./routing/route";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <div className='app'>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </MantineProvider>
    </div>
  );
}
