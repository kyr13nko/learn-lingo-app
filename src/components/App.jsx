/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("../pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const refreshUser = () => {
    console.log("isRefreshing", isRefreshing);
  };

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch, refreshUser]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
