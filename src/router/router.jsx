import { createBrowserRouter } from "react-router-dom";
import { Root, rootLoader } from "../components/Root/Root";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { News, newsLoader } from "../components/News/News";
import { newsItemLoader, NewsView } from "../components/NewsView/NewsView";
import { loginAction } from "../components/Header/Login/Login";
import { Banner } from "../components/Banner/Banner";
import { logoutAction } from "../components/Header/Profile/Profile";

export const router = createBrowserRouter ([
  {
    path: '/',
    id: 'root',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Banner />
          },
          {
            path: 'news',
            element: <News />,
            loader: newsLoader,
          },
          {
            path: '/news/:id',
            element: <NewsView />,
            loader: newsItemLoader
          }
        ]
      }
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
  }
]);
