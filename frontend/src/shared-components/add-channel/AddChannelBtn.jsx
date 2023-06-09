import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../slices/channelsSlice.js';

import AddChannelModal from './AddChannelModal';

const AddChannelButton = (props) => {
  const { socket } = props;
  const [modalShow, setModalShow] = useState(false);

  const channels = useSelector(selectors.selectAll);
  const channelsNames = channels.map((channel) => channel.name);

  return (
    <>
      <button
        onClick={() => setModalShow(true)}
        type="button"
        className="p-0 text-primary btn btn-group-vertical"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="20"
          height="20"
          fillRule="currentColor"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <span className="visually-hidden">+</span>
      </button>

      <AddChannelModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        allchannels={channelsNames}
        socket={socket}
      />
    </>
  );
};

export default AddChannelButton;
