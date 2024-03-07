import { CategoryOrganism } from '../Organisms/categoryOrganisms/CategoryOrganism.jsx';

const CategoryTemplate = ({ titles, name }) => {
  return (
    <>
      <CategoryOrganism titles={titles} name={name} />
    </>
  );
};

export { CategoryTemplate };
