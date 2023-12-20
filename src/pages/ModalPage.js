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
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </div>
    );
}
export default ModalPage;