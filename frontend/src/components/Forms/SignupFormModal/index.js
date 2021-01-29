import { useState } from "react";
import { Modal } from "../../../context/ModalProvider/ModalProvider.jsx";
import SignupForm from "./SignupFormModal";

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
};

export default SignupFormModal;
