import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    console.log("constructor - ShoppingCart");

    super(props);

    this.state = {
      products: [
        { id: 1, productName: "Phone", price: 8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
        { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
        { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
        { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
        { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render - ShoppingCart");

    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  componentDidMount = () => {
    console.log("componentDidMount - ShoppingCart");
  };

  // executes when user clicks on + button
  handleIncrement = (product, maxValue) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  // executes when user clicks on - button
  handleDecrement = (product, minValue) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on Delete (X) button in the Product component
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      // delete product based on index
      allProducts.splice(index, 1);

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
