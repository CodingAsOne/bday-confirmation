import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "./components/ui/navbar";
import Router from "./routes/routes";
import Layout from "./components/Layout";

export default function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
