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

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => {
      return theme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      {children}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};

function Root() {
  return (
    <MyThemeProvider>
      <BasketContextProvider
        defaultValue={{
          name: "chona",
        }}
      >
        <Layout />
      </BasketContextProvider>
    </MyThemeProvider>
  );
}

export { Root };
