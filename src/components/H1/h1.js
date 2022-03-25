const H1 = (props) => {
  let h1_html = <h1 {...props}>{props.children}</h1>;
  return h1_html;
};

export default H1;
