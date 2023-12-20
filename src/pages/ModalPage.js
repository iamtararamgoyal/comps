import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit odio sed dolor gravida bibendum. Nulla a tellus urna. Donec sagittis mollis sapien vitae ullamcorper. Nullam hendrerit, erat quis pellentesque porta, nisl velit posuere nisl, ut congue metus ipsum ut ligula. Quisque facilisis congue odio, facilisis accumsan augue fringilla id. Quisque quis tincidunt leo. Sed bibendum enim id arcu interdum, sed tempor dui ullamcorper. Fusce semper mauris nec metus venenatis, vitae blandit tellus tempus. Nam id nisi sed ante iaculis auctor. Curabitur tincidunt leo ut quam mollis vulputate. Phasellus tempus aliquet tincidunt. 
        </p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}
export default ModalPage;