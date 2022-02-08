class ProductTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h3", null, " Product Table");
  }

}

class ProductAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h3", null, " Product Add");
  }

}

class ProductList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Product List"), /*#__PURE__*/React.createElement(ProductTable, null), /*#__PURE__*/React.createElement(ProductAdd, null));
  }

}

const App = () => /*#__PURE__*/React.createElement("div", {
  className: "rootCont"
}, /*#__PURE__*/React.createElement("h1", null, "Company Inventory"), /*#__PURE__*/React.createElement("h4", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductList, null));

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));