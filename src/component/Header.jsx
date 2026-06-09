import { useState } from "react";
import HeaderForm from "./HeaderForm";
import { Button, Modal, ModalBody } from "flowbite-react";



const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        
    <div className='flex  '>
        <div className='text-2xl'>Daily Routine</div>
        <Button onClick={() => setIsModalOpen(true)}>Add new Entry</Button>

        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalBody>
                <HeaderForm/>
                <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </ModalBody>
          
        </Modal>
      
      </div>
    );
};

export default Header;