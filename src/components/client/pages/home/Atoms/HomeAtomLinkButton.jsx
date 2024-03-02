const HomeAtomLinkButton = ({ title, children }) => {
  const categoryAddress = `http://localhost:3000/categories/${title}`;
  return <a href={categoryAddress}>{children}</a>;
};

export { HomeAtomLinkButton };
