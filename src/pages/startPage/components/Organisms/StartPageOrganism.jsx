import { Logo } from 'components/Atoms/Logo/Logo.jsx';
import { StartPageTexts } from '../Molecules/Texts/StartPageTexts.jsx';
import { StartPageButtons } from '../Molecules/Buttons/StartPageButtons.jsx';
import css from './StartPageOrganism.module.css';

const StartPageOrganism = () => {
  return (
    <div className={css.StartPageOrganism}>
      <Logo />
      <StartPageTexts />
      <StartPageButtons />
    </div>
  );
};

export { StartPageOrganism };
