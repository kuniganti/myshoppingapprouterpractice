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
import AuthenticationPage, {
  action as LoginAction,
} from "./Pages/AuthenticationPage";
import { tokenloader, checkAuthLoader } from "./Util/util";
import { LogoutAction } from "./Pages/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: tokenloader,
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
                loader: checkAuthLoader,
              },
            ],
          },
        ],
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "authentication",
        element: <AuthenticationPage />,
        action: LoginAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
