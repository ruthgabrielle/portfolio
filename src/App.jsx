import { useContext } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Intro from "./components/intro";
import ProductList from "./components/list";
import Toggle from "./components/toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {" "}
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
