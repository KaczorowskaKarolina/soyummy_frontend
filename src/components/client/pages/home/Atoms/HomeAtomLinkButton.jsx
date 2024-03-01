const HomeAtomLinkButton = ({ title, children }) => {
  const categoryAddress = `http://localhost:5000/categories/${title}`;

  return <a href={categoryAddress}>{children}</a>;
};

export { HomeAtomLinkButton };
