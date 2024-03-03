import css from './StartPageText.module.css';

const StartPageText = () => {
  return (
    <p className={css.StartPageText}>
      This app offers more than just a collection of recipes - it is designed to
      be your very own digital cookbook. You can easily save and retrieve your
      own recipes at any time.
    </p>
  );
};

export { StartPageText };
