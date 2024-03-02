const HomeAtomLinkButton = ({ title, children }) => {
  console.log(title);
  const categoryAddress = `http://localhost:3000/categories/${title}`;
  return <a href={categoryAddress}>{children}</a>;
};

export { HomeAtomLinkButton };
