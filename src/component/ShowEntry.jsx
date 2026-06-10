import { useState} from "react";
import { Button, Modal, ModalBody } from "flowbite-react";

const ShowEntry = ({entry}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return <div className="flex flex-col items-center font-semibold text-blue-700"> 
                <Button onClick={() => setIsModalOpen(true)}>Open Entry</Button>
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalBody>
                    <div>
                        <img
                        src={entry.imgUrl}
                        alt="img"
                    />
                    </div>
                    
                    <span className="font-semibold text-blue-700">Title:{entry.title}, Date: {entry.date}  ,Content: {entry.content} </span>
                    <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                </ModalBody>      
            </Modal>
            </div>;
};

export default ShowEntry;
