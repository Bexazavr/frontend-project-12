import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ChannelList from "../../components/ChannelList/ChannelList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  channelsSelectors,
  channelsActions,
} from "../../slices/channelsSlice.js";
import {
  messagesSelectors,
  messagesActions,
} from "../../slices/messagesSlice.js";

const MainPage = () => {
  const getHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      return { Authorization: `Bearer ${user.token}` };
    }
    return;
  };

  const channels = useSelector((state) => {
    const allChannels = channelsSelectors.selectAll(state);
    return allChannels;
  });

  const messages = useSelector((state) => {
    const allMessages = messagesSelectors.selectAll(state);
    return allMessages;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const channels = await axios.get("/api/v1/channels", {
        headers: getHeader(),
      });

      dispatch(channelsActions.addChannels(channels.data));
    };
    getData();
  }, []);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <ChannelList>
          {channels.map(({ id, name }) => {
            return (
              <li className="nav-item w-100" key={id}>
                <button
                  className={`w-100 rounded-0 text-start btn`}
                  type="button"
                >
                  <span className="me-1">#</span>
                  {name}
                </button>
              </li>
            );
          })}
        </ChannelList>
        <ChatWindow />
      </Row>
    </Container>
  );
};

export default MainPage;
