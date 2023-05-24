import { Container } from '@mui/material';
import LoginForm from '../LoginForm/LoginForm';
import MainPage from '../MainPage/MainPage';
import { useSelector } from 'react-redux';

const LandingWindow = () => {
	const isLogin =
		useSelector((state) => state.user.isLogin) ||
		!!localStorage.getItem('idInstance');

	return (
		<Container
			maxWidth={!isLogin ? 'sm' : 'md'}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#ffffff',
				zIndex: '2',
				marginTop: '100px',
				boxShadow:
					'0 17px 50px 0 rgba(11, 20, 26, 0.19), 0 12px 15px 0 rgba(11, 20, 26, 0.24)',
				borderRadius: '3px',
			}}
		>
			{!isLogin ? <LoginForm /> : <MainPage />}
		</Container>
	);
};

export default LandingWindow;
