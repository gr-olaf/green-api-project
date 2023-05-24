import { Box } from '@mui/material';
import LandingWindow from './components/LandingWindow/LandingWindow';
import LandingWrapperBefore from './components/LandingWrapperBefore/LandingWrapperBefore';

function App() {
	return (
		<Box>
			<LandingWrapperBefore />
			<LandingWindow />
		</Box>
	);
}

export default App;
