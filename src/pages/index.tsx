import Input from '@/webstack/form/input/Input';
import { useModal } from '@/webstack/modal/ModalContext';

const Index = () => {
  const { openModal } = useModal();

  return (
    <div>
      <Input type="button" onClick={() => openModal("HELLO WORLD")} >fdsa</Input>
      {/* 
      <button onClick={() => openModal("HELLO WORLD")}>
        Launch Modal
      </button> */}
    </div>
  );
};

export default Index;