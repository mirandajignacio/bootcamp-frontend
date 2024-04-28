import { useState } from "react";
import { Layout } from "../components/layout";
import { ThemeProvider } from "styled-components";
import { BasketContextProvider } from "../context/basket-context";
export const darkTheme = {
  colors: {
    primary: "#426b1f",
    secondary: "blue",
    danger: "red",
  },
  breakPoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
  fontSize: {
    s: "12px",
    m: "16px",
    l: "20px",
  },
};

export const lightTheme = {
  colors: {
    primary: "red",
    secondary: "blue",
    danger: "red",
  },
  breakPoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
  fontSize: {
    s: "12px",
    m: "16px",
    l: "20px",
  },
};

const getTheme = (theme) => (theme === "light" ? darkTheme : lightTheme);

export const MyThemeProvider = ({ children }) => {
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
