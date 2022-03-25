const Td = (props) => {
  let td_html = <td {...props}>{props.children}</td>;
  return td_html;
};

export default Td;
