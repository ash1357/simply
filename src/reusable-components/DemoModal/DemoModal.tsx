import React from 'react';
import Modal from 'react-modal';
import DemoForm from '../DemoForm/DemoForm';
import ModalStyle from './DemoModal.module.css';
import Text from '../../symply-ui/Text';
import xIcon from '../../../content/assets/xIcon.svg';

type DemoModalProps = {
  open?: boolean;
  toggleModal: () => void;
  title?: string;
  subtitle?: string;
};

const DemoModal = (props: DemoModalProps) => {
  const { open = false, toggleModal, title = '', subtitle = '' } = props;
  return (
    <Modal
      isOpen={open}
      className={ModalStyle.demoContent}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 300000,
        },
      }}
      onRequestClose={toggleModal}
      shouldCloseOnEsc={true}
    >
      <img src={xIcon} onClick={toggleModal} className={ModalStyle.closeIcon} />
      <Text
        lg="40px"
        sm="22px"
        fontFamily="Moret"
        color="white"
        styleLG={{ lineHeight: '45px' }}
        styleSM={{ lineHeight: '25px', marginBottom: '1rem' }}
      >
        {title}
      </Text>
      <Text
        lg="18px"
        sm="16px"
        fontFamily="Barlow"
        color="white"
        styleLG={{ lineHeight: '45px' }}
        styleSM={{ lineHeight: '20px', marginBottom: '1rem' }}
      >
        {subtitle}
      </Text>
      <DemoForm close={toggleModal} />
    </Modal>
  );
};

export default DemoModal;
