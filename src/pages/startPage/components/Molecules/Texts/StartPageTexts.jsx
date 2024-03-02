import { StartPageTitle } from '../../Atoms/StartPageTitle/StartPageTitle.jsx';
import { StartPageText } from '../../Atoms/StartPageText/StartPageText.jsx';
import css from './StartPageTexts.module.css';

const StartPageTexts = () => {
  return (
    <div className={css.StartPageTexts}>
      <StartPageTitle />
      <StartPageText />
    </div>
  );
};

export { StartPageTexts };
