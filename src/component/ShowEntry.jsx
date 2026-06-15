import { useState} from "react";
import { Button, Modal, ModalBody } from "flowbite-react";

const ShowEntry = ({entry}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return <div className="flex flex-col items-center font-semibold text-blue-700"> 
                <Button onClick={() => setIsModalOpen(true)}>Open Entry</Button>
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalBody className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2   items-center
                font-semibold text-blue-700 gap-x-[5px] bg-amber-100">
                    <div >
                        <img
                        src={entry.imgUrl}
                        alt="img"
                    />
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-semibold text-blue-700">Title:{entry.title}, Date: {entry.date}  
                            <br/>
                            Content: {entry.content} </span>
                        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                    </div>
                </ModalBody>      
            </Modal>
            </div>;
};

export default ShowEntry;
