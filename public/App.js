class ProductTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price $"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, this.props.products.map(item => /*#__PURE__*/React.createElement("tr", {
      key: item.id
    }, /*#__PURE__*/React.createElement("td", null, item.name), /*#__PURE__*/React.createElement("td", null, item.price), /*#__PURE__*/React.createElement("td", null, item.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: item.url,
      target: "_blank"
    }, " View "))))));
  }

}

const defaultState = {
  "name": "",
  "price": "$",
  "category": "",
  "url": ""
};

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  onAddHandler(event) {
    event.preventDefault();
    this.state.price = this.state.price.slice(1, this.state.price.length);
    this.props.onAdd({ ...this.state
    });
    this.setState({ ...defaultState
    });
  }

  setPrice(val) {
    this.setState({
      price: val
    });
  }

  setCategory(val) {
    this.setState({
      category: val
    });
  }

  setUrl(val) {
    this.setState({
      url: val
    });
  }

  setName(val) {
    this.setState({
      name: val
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " Add a new product to Inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("form", {
      onSubmit: event => this.onAddHandler(event),
      className: "product-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-input"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "category"
    }, "Category"), /*#__PURE__*/React.createElement("select", {
      name: "category",
      onChange: e => {
        this.setCategory(e.target.value);
      },
      value: this.state.category
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "---select category---"), /*#__PURE__*/React.createElement("option", {
      value: "shirt"
    }, "shirt"), /*#__PURE__*/React.createElement("option", {
      value: "jeans"
    }, "jeans"), /*#__PURE__*/React.createElement("option", {
      value: "jacket"
    }, "jacket"))), /*#__PURE__*/React.createElement("div", {
      className: "form-input"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "price"
    }, "Price Per Unit"), /*#__PURE__*/React.createElement("input", {
      name: "price",
      placeholder: "$",
      onChange: e => this.setPrice(e.target.value),
      value: this.state.price
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-input"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Product Name"), /*#__PURE__*/React.createElement("input", {
      name: "name",
      onChange: e => {
        this.setName(e.target.value);
      },
      value: this.state.name
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-input"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "url"
    }, "Image URL"), /*#__PURE__*/React.createElement("input", {
      name: "url",
      onChange: e => {
        this.setUrl(e.target.value);
      },
      value: this.state.url
    })), /*#__PURE__*/React.createElement("button", {
      className: "submit-btn",
      type: "submit"
    }, "Add Product")));
  }

}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    const products = this.state.products;
    product.id = products.length + 1;
    products.push(product);
    this.setState({
      products: products
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "productList"
    }, /*#__PURE__*/React.createElement("h1", null, "Product List"), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement(ProductAdd, {
      onAdd: this.addProduct
    }));
  }

}

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "rootCont"
    }, /*#__PURE__*/React.createElement("h2", null, "Company Inventory"), /*#__PURE__*/React.createElement("h3", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductList, null));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));