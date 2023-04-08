import SimpleModal from '../functions/SimpleModal';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  transition: 250,
};

const modals = new SimpleModal(options);

modals.init();

window.modals = modals;
