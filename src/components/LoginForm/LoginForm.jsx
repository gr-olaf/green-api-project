import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/userSlice';
import UserAPI from '../../http/userAPI';

const LoginForm = () => {
	const [idInstance, setIdInstance] = useState('');
	const [apiTokenInstance, setApiTokenInstance] = useState('');

	const dispatch = useDispatch();

	const handleClick = () => {
		UserAPI.login(idInstance, apiTokenInstance);
		setIdInstance('');
		setApiTokenInstance('');
		dispatch(setLogin());
	};

	return (
		<Box
			sx={{
				width: '500px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				gap: '20px',
				padding: '30px',
				margin: '50px',
			}}
		>
			<Typography variant="h2">Вход</Typography>
			<TextField
				type="number"
				placeholder="Введите idInstance"
				fullWidth
				value={idInstance}
				onChange={(e) => setIdInstance(e.target.value)}
				sx={{
					'input::-webkit-inner-spin-button': {
						display: 'none',
					},
				}}
			></TextField>
			<TextField
				placeholder="Введите apiTokenInstance"
				fullWidth
				value={apiTokenInstance}
				onChange={(e) => setApiTokenInstance(e.target.value)}
			></TextField>
			<Button variant="outlined" fullWidth onClick={handleClick}>
				Войти
			</Button>
		</Box>
	);
};

export default LoginForm;
