import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { MessageAPI } from '../../http/messageAPI';
import { setCurrentMessage } from '../../store/messageSlice';
import MessageContainer from '../MessageContainer/MessageContainer';

const MainPage = () => {
	const [toggle, setToggle] = useState(false);
	const [message, setMessage] = useState('');

	const current = useSelector((state) => state.user.currentNumber);
	const messages = useSelector((state) => state.message.messages);
	const dispatch = useDispatch();

	useEffect(() => {
		setInterval(() => {
			MessageAPI.getMessageNotification().then((data) => {
				if (!data) return;
				if (data.body.messageData.typeMessage === 'textMessage') {
					dispatch(
						setCurrentMessage({
							typeWebhook: 'incoming',
							message: data.body.messageData.textMessageData.textMessage,
						})
					);
				}
				MessageAPI.deleteMessageNotification(data.receiptId);
			});
		}, 10000);
	}, []);

	const handleSend = () => {
		if (!current) return;
		dispatch(setCurrentMessage({ typeWebhook: 'outgoing', message }));
		MessageAPI.sendMessage(`${current}@c.us`, message);
		setMessage('');
	};

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '500px',
				display: 'grid',
				gridTemplateColumns: '1fr 3fr',
			}}
		>
			<SideBar toggle={toggle} setToggle={setToggle} />
			<MessageContainer
				message={message}
				setMessage={setMessage}
				handleSend={handleSend}
				current={current}
				messages={messages}
			/>
		</Box>
	);
};

export default MainPage;
