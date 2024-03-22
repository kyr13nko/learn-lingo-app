import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Modal from "../Modal/Modal";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import LoginForm from "../Forms/LoginForm/LoginForm";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Modal
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      >
        <RegistrationForm />
      </Modal>
      <Modal
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default Layout;
