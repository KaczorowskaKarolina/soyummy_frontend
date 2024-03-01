import styles from './RectangleButton.module.css';

const RectangleButton = ({
  title,
  type = 'button',
  size,
  colorScheme,
  onClick = () => {},
}) => {
  const classes = `${styles.RectangleButton} ${styles[`${size}`]} ${
    styles[`${colorScheme}`]
  }`;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export { RectangleButton };

// title is a text that appears on button f.ex. 'Subscribe'

// type prop is a type of a button and a string. By default it's just a button
// but if you need it to be some other type
// just add attribute type whith the type you want
// when decalring component

// size property have a string value and it can be either
// 'small' or 'large' depending on which one you want

// colorScheme

// onClick is obvious. By default this prop is an empty function so
