import { CategoryOrganism } from '../Organisms/categoryOrganisms/CategoryOrganism.jsx';

const CategoryTemplate = ({ titles, name }) => {
  return (
    <div>
      <CategoryOrganism titles={titles} name={name} />
    </div>
  );
};

export { CategoryTemplate };
