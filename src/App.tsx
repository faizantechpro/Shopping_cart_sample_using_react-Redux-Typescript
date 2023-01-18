import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./@core/layout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { getFilteredOrders } from "./redux/actions/orders";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredOrders({ search_text: "" }) as any);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
