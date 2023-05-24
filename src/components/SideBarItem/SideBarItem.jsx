import { Box } from '@mui/material';

const SideBarItem = ({ children, flexDirection }) => {
	return (
		<Box
			flexDirection={flexDirection}
			sx={{
				paddingBlock: '20px',
				paddingRight: '20px',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			{children}
		</Box>
	);
};

export default SideBarItem;
