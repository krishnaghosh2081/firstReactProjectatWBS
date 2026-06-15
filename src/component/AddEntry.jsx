import { useState } from "react";
import HeaderForm from "./HeaderForm";
import { Button, Modal, ModalBody } from "flowbite-react";



const AddEntry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        
    <div className='flex '>
        <Button onClick={() => setIsModalOpen(true)}>Add new Entry</Button>

        <Modal  show={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalBody className="bg-blue-200  items-center ">
                <HeaderForm/>
                <div className="justify-items-end"><Button onClick={() => setIsModalOpen(false)}>Close</Button></div>
                
            </ModalBody>
          
        </Modal>
      
      </div>
    );
};

export default AddEntry;