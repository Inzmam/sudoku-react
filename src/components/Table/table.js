const Table = (props) => {
  let table_html = <table {...props}>{props.children}</table>;
  return table_html;
};

export default Table;
