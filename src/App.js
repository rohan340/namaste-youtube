import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import store from "./Utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
