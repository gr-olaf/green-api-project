import { Box, IconButton, TextField } from '@mui/material';
import { AiOutlineSend } from 'react-icons/ai';

const MessageContainer = ({
	message,
	handleSend,
	current,
	messages,
	setMessage,
}) => {
	return (
		<Box
			sx={{
				padding: '20px',
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
			}}
		>
			<Box sx={{ borderBottom: '1px solid #c7c7c7b1', paddingBlock: '10px' }}>
				{current}
			</Box>
			<Box
				sx={{
					flexGrow: '1',
					padding: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'end',
					gap: '10px',
				}}
			>
				{messages.map((element, index) =>
					element.typeWebhook === 'outgoing' ? (
						<Box
							key={index}
							sx={{
								alignSelf: 'end',
								background: '#d9fdd3',
								padding: '5px',
								borderRadius: '5px',
							}}
						>
							{element.message}
						</Box>
					) : (
						<Box key={index}>{element.message}</Box>
					)
				)}
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					gap: '10px',
				}}
			>
				<TextField
					disabled={!current}
					placeholder="Введите сообщение"
					fullWidth
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<IconButton onClick={handleSend}>
					<AiOutlineSend />
				</IconButton>
			</Box>
		</Box>
	);
};

export default MessageContainer;
