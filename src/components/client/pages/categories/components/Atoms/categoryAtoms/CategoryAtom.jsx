import css from './CategoryAtom.module.css';

const CategoryAtom = ({ title, _, isActive }) => {
  const categoryAddress = `http://localhost:5000/categories/${title}`;
  console.log(isActive);
  return (
    <a
      className={isActive ? css.CategoryNameAtomActive : css.CategoryNameAtom}
      href={categoryAddress}
    >
      {title}
    </a>
  );
};

export { CategoryAtom };
