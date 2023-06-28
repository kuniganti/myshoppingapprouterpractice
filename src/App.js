import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Products, { loadProducts } from "./Pages/Products";
import Profile from "./Pages/Profile";
import RootLayout from "./Pages/RootLayout";
import ProductDetailPage, {
  loadProduct,
  action as DeleteProductAction,
} from "./Pages/ProductDetail";
import NewProduct from "./Pages/NewProduct";
import ProductsRootLayout from "./Pages/ProductsRootLayout";
import EditProduct from "./Pages/EditProduct";
import { action as EditOrADDProductAction } from "./Component/ProductForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <ProductsRootLayout />,
        children: [
          { index: true, element: <Products />, loader: loadProducts },
          {
            path: "new",
            element: <NewProduct />,
            action: EditOrADDProductAction,
          },
          {
            path: ":productId",
            id: "product-detail",
            loader: loadProduct,
            children: [
              {
                index: true,
                element: <ProductDetailPage />,
                action: DeleteProductAction,
              },
              {
                path: "edit",
                element: <EditProduct />,
                action: EditOrADDProductAction,
              },
            ],
          },
        ],
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
