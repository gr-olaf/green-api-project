import {
	Box,
	Button,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	TextField,
	Tooltip,
} from '@mui/material';
import { BiMessageDetail } from 'react-icons/bi';
import { IoMdArrowBack } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import SideBarItem from '../SideBarItem/SideBarItem';
import { useState } from 'react';
import UserAPI from '../../http/userAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNumber, setLogin, setNumber } from '../../store/userSlice';

const SideBar = ({ toggle, setToggle }) => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();
	const numbers = useSelector((state) => state.user.numbers);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleClickLogout = () => {
		dispatch(setLogin());
		UserAPI.logout();
	};

	const handleClick = () => {
		if (!value) return;
		dispatch(setNumber(value));
		dispatch(setCurrentNumber(value));
		setValue('');
		setToggle(false);
	};

	return (
		<Box sx={{ borderRight: '1px solid #c7c7c7b1', width: '300px' }}>
			{!toggle ? (
				<SideBarItem flexDirection="column">
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-around',
							width: '100%',
							borderBottom: '1px solid #c7c7c7b1',
						}}
					>
						<Tooltip title="Новый чат">
							<IconButton onClick={() => setToggle(true)}>
								<BiMessageDetail />
							</IconButton>
						</Tooltip>
						<Tooltip title="Выйти">
							<IconButton onClick={handleClickLogout}>
								<MdLogout />
							</IconButton>
						</Tooltip>
					</Box>
					<List sx={{ width: '100%' }}>
						{numbers.map((element, index) => (
							<ListItem
								key={index}
								sx={{ borderBottom: '1px solid #c7c7c7b1' }}
							>
								<ListItemButton
									onClick={() => dispatch(setCurrentNumber(element))}
								>
									{element}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</SideBarItem>
			) : (
				<SideBarItem flexDirection="column">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
						<Tooltip title="Назад">
							<IconButton onClick={() => setToggle(false)}>
								<IoMdArrowBack />
							</IconButton>
						</Tooltip>
						<TextField
							type="number"
							placeholder="7 999 99 99"
							label="Введите номер"
							value={value}
							onChange={handleChange}
							sx={{
								'input::-webkit-inner-spin-button': {
									display: 'none',
								},
							}}
						/>
					</Box>
					<Button
						variant="outlined"
						color={!value ? 'error' : 'success'}
						onClick={handleClick}
						sx={{ padding: '10px 20px' }}
					>
						Написать
					</Button>
				</SideBarItem>
			)}
		</Box>
	);
};

export default SideBar;
