const hello = (name?: string) => {
  return `Hello, ${name ? name : "Guest"}!`;
};

export { hello };
