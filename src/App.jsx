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
const defaultState = {"name": "","price": "$","category" : "","url" : ""}
class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState
    }

    onAddHandler(event) {
        event.preventDefault();
        this.state.price = this.state.price.slice(1, this.state.price.length)
        this.props.onAdd({...this.state});
        this.setState({...defaultState})
    }

    setPrice(val){
        this.setState({price: val})
    }
    setCategory(val){
        this.setState({category: val})
    }
    setUrl(val){
        this.setState({url: val})
    }
    setName(val){
        this.setState({name: val})
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
                        <select name="category" onChange={(e)=>{this.setCategory(e.target.value)}} value={this.state.category}>
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
                        <input name="price" placeholder="$" onChange={(e)=>this.setPrice(e.target.value)} value={this.state.price}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">
                            Product Name
                        </label>
                        <input name="name" onChange={(e)=>{this.setName(e.target.value)}} value={this.state.name}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="url">
                            Image URL
                        </label>
                        <input name="url" onChange={(e)=>{this.setUrl(e.target.value)}} value={this.state.url}></input>
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