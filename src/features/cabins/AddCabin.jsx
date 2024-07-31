import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Create New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// const [isOpenModal, setIsOpenModal] = useState(false);
// const handleModalToggle = () => setIsOpenModal((show) => !show);
// return (
//   <div>
//     <Button onClick={handleModalToggle}>Create New Cabin</Button>
//     {isOpenModal && (
//       <Modal>
//         <CreateCabinForm />
//       </Modal>
//     )}
//   </div>
// );
