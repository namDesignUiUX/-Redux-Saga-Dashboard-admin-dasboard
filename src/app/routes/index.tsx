import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import LoginAndRegistered from "../../_start/layout/LoginAndRegistered";
import SidebarLayout from "../../_start/layout/SidebarLayout";
import SuspenseLoader from "../../_start/layout/SuspenseLoader/SuspenseLoader";
const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Status404 = Loader(lazy(() => import("../../_start/layout/Status404")));
const Status500 = Loader(lazy(() => import("../../_start/layout/Status500")));
const Products = Loader(lazy(() => import("../../_start/layout/products")));

export const notAuth: RouteObject = {
  path: "/",
  children: [
    { path: "login", element: <LoginAndRegistered /> },
    {
      path: "status",
      children: [
        {
          element: <Navigate to="404" replace />,
        },
        {
          path: "404",
          element: "<Status404 />",
        },
        {
          path: "500",
          element: <Status500 />,
        },
      ],
    },
    { path: "*", element: <Status404 /> },
  ],
};

export const auth: RouteObject = {
  path: "/",
  children: [
    { path: "/login", element: <Navigate to="/dashboards/chart" replace /> },
    { path: "", element: <Navigate to="/dashboards/chart" replace /> },
    {
      path: "status",
      children: [
        {
          element: <Navigate to="404" replace />,
        },
        {
          path: "404",
          element: "<Status404 />",
        },
        {
          path: "500",
          element: <Status500 />,
        },
      ],
    },
    { path: "*", element: <Status404 /> },
  ],
};

export const dashboardsRoutes: RouteObject = {
  path: "dashboards",
  element: <SidebarLayout />,
  children: [
    {
      path: "",
      element: <Navigate to="/dashboards/product" replace />,
    },
    {
      path: "product",
      element: <Products />,
    },
    {
      path: "messenger",
      element: " <Messenger />",
    },
  ],
};
