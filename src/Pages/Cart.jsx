import { useEffect } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  useEffect(() => {
    document.getElementById("myButton").addEventListener("click", function () {
      Swal.fire({
        title: "Payment Received",
        text: "Thanks for the payment.",
        icon: "success",
        confirmButtonText: "OK",
      });
    });

    let totalPrice = 0;
    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach((item) => {
      const price = parseFloat(item.querySelector(".item-price").textContent.substring(1));
      const quantity = parseInt(item.querySelector(".item-quantity").textContent);
      const total = price * quantity;
      item.querySelector(".item-total").textContent = `₹${total.toFixed(2)}`;
      totalPrice += total;
    });
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total in Cart</th>
          </tr>
        </thead>
        <tbody id="cart-items">
          <tr className="cart-item">
            <td>
              <img
                src="https://img.freepik.com/premium-photo/tomato-with-water-droplets-wooden-background-selective-focus_1132132-220.jpg?w=740"
                alt="Tomato"
              />
              <span>Tomato</span>
            </td>
            <td className="item-price">₹45</td>
            <td className="item-quantity">2</td>
            <td className="item-total">₹90.00</td>
          </tr>
          <tr className="cart-item">
            <td>
              <img
                src="https://img.freepik.com/free-photo/bowl-with-potatoes-table_23-2148540418.jpg?t=st=1718099969~exp=1718103569~hmac=db465c9fe3e4d65b01aefe93b66d8d2dc8afb386ebe7588e9bbdd50ca94c2479&w=740"
                alt="Potato"
              />
              <span>Potato</span>
            </td>
            <td className="item-price">₹35</td>
            <td className="item-quantity">3</td>
            <td className="item-total">₹105.00</td>
          </tr>
          {/* Add more items as needed */}
        </tbody>
      </table>
      <div className="total-price">
        <h4>
          Total: ₹<span id="total-price">0.00</span>
        </h4>
      </div>
      <div className="payment-button">
        <button type="button" id="myButton">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
