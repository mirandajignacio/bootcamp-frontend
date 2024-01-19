import { useState } from "react";
import { Layout } from "../components/layout";
import { ThemeProvider } from "styled-components";
import { BasketContextProvider } from "../context/basket-context";
const themeDark = {
  colors: {
    primary: "#426b1f",
    secondary: "blue",
    danger: "red",
  },
  fontSize: {
    s: "12px",
    m: "16px",
    l: "20px",
  },
};

const themeLight = {
  colors: {
    primary: "red",
    secondary: "blue",
    danger: "red",
  },
  fontSize: {
    s: "12px",
    m: "16px",
    l: "20px",
  },
};

const getTheme = (theme) => (theme === "light" ? themeDark : themeLight);

function Root() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => {
      return theme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <BasketContextProvider>
        <Layout onClickToggleTheme={toggleTheme} />
      </BasketContextProvider>
    </ThemeProvider>
  );
}

export { Root };
