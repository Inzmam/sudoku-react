const H3 = (props) => {
  let h3_html = <h3 {...props}>{props.children}</h3>;
  return h3_html;
};

export default H3;
