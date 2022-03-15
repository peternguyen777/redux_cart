import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

const products = [
  {
    id: "p1",
    title: "Panang Curry",
    price: 8,
    description: "Yellow curry with broccolli, chicken and rice.",
  },
  {
    id: "p2",
    title: "Pad Thai",
    price: 12,
    description: "Delicious stir fried noodles, egg and chicken.",
  },
];

function App() {
  const cartToggle = useSelector((state) => state.cart.showCart);

  return (
    <Layout>
      {cartToggle && <Cart productsList={products} />}
      <Products productsList={products} />
    </Layout>
  );
}

export default App;
