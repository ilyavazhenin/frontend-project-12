/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectors } from '../../../slices/channelsSlice.js';
import ActiveChannelContext from '../../../utils/active-channel-context.js';
import AddChannelBtn from '../../../shared-components/add-channel/AddChannelBtn.jsx';
import ChannelControlDropdown from './ChannelControlDroprown.jsx';
// import CurrentUserContext from '../../../utils/auth-context.js';

const ChannelsBox = (props) => {
  const { socket } = props;
  // const { user } = useContext(CurrentUserContext);
  // const dispatch = useDispatch();

  const { t } = useTranslation();
  const channels = useSelector(selectors.selectAll);
  const { activeChannel, setActiveChannel } = useContext(ActiveChannelContext);

  const activeChannelClasses = 'w-100 rounded-0 text-start text-truncate btn btn-secondary';
  const innactiveChannelClasses = 'w-100 rounded-0 text-start text-truncate btn';

  const isChannelActive = (currentIterId) => activeChannel.id === currentIterId;

  // useEffect(() => {
  //   socket.on('newChannel', (createdChannel) => {
  //     dispatch(channelsActions.addChannel(createdChannel));
  //     if (user.userName === createdChannel.createdByUser) {
  //       setActiveChannel({
  //         id: createdChannel.id,
  //         channelName: createdChannel.name,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>{t('chat.channelsHeader')}</b>
        <AddChannelBtn socket={socket} />
      </div>
      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        { channels.map((channel) => (
          <li key={channel.id} className="nav-item w-100">
            <div role="group" className="d-flex dropdown btn-group">
              <button
                type="button"
                className={
                  isChannelActive(channel.id) ? activeChannelClasses : innactiveChannelClasses
                }
                onClick={() => setActiveChannel({ id: channel.id, channelName: channel.name })}
              >
                <span className="me-1">#</span>
                {channel.name}
              </button>
              {
                channel.removable
                  ? (
                    <ChannelControlDropdown
                      active={isChannelActive(channel.id)}
                      channelId={channel.id}
                      socket={socket}
                    />
                  )
                  : null
              }
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default ChannelsBox;
