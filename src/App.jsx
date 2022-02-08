class ProductTable extends React.Component {
    render() {
        return <h3> Product Table</h3>
    }
}

class ProductAdd extends React.Component {
    render() {
        return <h3> Product Add</h3>
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <div>
                <h1>Product List</h1>
                <ProductTable />
                <ProductAdd />
            </div>
        )

    }
}

const App = () =>(
    <div className="rootCont">
        <h1>Company Inventory</h1>
        <h4>Showing all available products</h4>
        <hr></hr>
        <ProductList />
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))