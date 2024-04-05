import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import ProductList from './pages/ProductList/ProductList';
import Rootlayout from './Rootlayout/Rootlayout';
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Rootlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "productlist/:category",
        element: <ProductList />,
      },
      {
        path: "product/:category/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ]
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
