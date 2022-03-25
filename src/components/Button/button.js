import './button.css';

const Button = (props) => {
  let button_html = <button {...props}>{props.children}</button>;
  return button_html;
};

export default Button;
