import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/data';
import { useEffect } from "react";

function App() {
  const { cartIsVisible } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Layout>
      {/* Display your fetched data here */}
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}


export default App;
