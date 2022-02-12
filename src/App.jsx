class ProductTable extends React.Component {
    render() {
        return (
            <table className="bordered-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price $</th>
                  <th>Category</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.props.products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td><a href={item.url} target="_blank"> View </a></td>
                        </tr>
                      ))
                  }
              </tbody>
            </table>
          );
    }
}

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"name": "","price": "","category" : "","url" : ""}
    }

    onAddHandler(event) {
        event.preventDefault();
        this.props.onAdd({...this.state});
        
    }

    onChangeHandler(event) {
        event.preventDefault()
        const fieldName  = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newState = this.state
        newState[fieldName] = fieldValue
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <h3> Add a new product to Inventory</h3>
                <hr></hr>
                <form onSubmit={(event)=>this.onAddHandler(event)} className="product-form">
                    <div className="form-input">
                        <label htmlFor="category">
                            Category
                        </label>
                        <select name="category" onChange={this.onChangeHandler.bind(this)}>
                            <option value=""    >---select category---</option>
                            <option value="shirt">shirt</option>
                            <option value="jeans">jeans</option>
                            <option value="jacket">jacket</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <label htmlFor="price">
                            Price Per Unit
                        </label>
                        <input name="price" placeholder="$" onChange={this.onChangeHandler.bind(this)}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">
                            Product Name
                        </label>
                        <input name="name" onChange={this.onChangeHandler.bind(this)}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="url">
                            Image URL
                        </label>
                        <input name="url" onChange={this.onChangeHandler.bind(this)}></input>
                    </div>
                        <button className="submit-btn" type='submit'>Add Product</button>
                </form>
            </div>
        )
    }
}

class ProductList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            products:[]
        }
        this.addProduct = this.addProduct.bind(this)
    }

     addProduct(product) {
        const products = this.state.products;
        product.id = products.length +1;
        products.push(product)
        this.setState({products: products})
    }

    render() {
        return (
            <div className="productList">
                <h1>Product List</h1>
                <ProductTable products={this.state.products}/>
                <ProductAdd onAdd={this.addProduct} />
            </div>
        )

    }
}

class App extends React.Component{
    render() {
        return <div className="rootCont">
            <h2>Company Inventory</h2>
            <h3>Showing all available products</h3>
            <hr></hr>
            <ProductList />
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))