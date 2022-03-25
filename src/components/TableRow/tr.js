const Tr = (props) => {
  let tr_html = <tr {...props}>{props.children}</tr>;
  return tr_html;
};

export default Tr;
