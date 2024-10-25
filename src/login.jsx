import * as React from 'react';
import '@fontsource/inter';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);
  
	// necessary for server-side rendering
	// because mode is undefined on the server
	React.useEffect(() => {
	  setMounted(true);
	}, []);
	if (!mounted) {
	  return null;
	}

	return (
	  <Select
		value={mode}
		onChange={(event, newMode) => {
		  setMode(newMode);
		}}
		sx={{ width: 'max-content' }}
	  >
		<Option value="light">Light</Option>
		<Option value="dark">Dark</Option>
	  </Select>
	);
  }

export default function Login() {
  return (
    <CssVarsProvider>
		<ModeToggle />
    	<Sheet variant="outlined" sx={{
						width: 300,
						mx: 'auto', // margin left & right
						my: 15, // margin top & bottom
						py: 3, // padding top & bottom
						px: 2, // padding left & right
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						borderRadius: 'sm',
						boxShadow: 'md',
					}}>
				<Typography level='h2' sx={
					{
						textAlign:'center',
						py:3
					}
				}>Welcome!</Typography>
					<FormControl>
						<FormLabel>Login as</FormLabel>
						<RadioGroup defaultValue="student" name="radio-buttons-group" orientation='horizontal'>
							<Radio value="student" label="Student" size="md" />
							<Radio value="admin" label="Admin" size="md" />
						</RadioGroup>
					</FormControl>
					<FormControl>
					<FormLabel>Login Id</FormLabel>
					<Input
						// html input attribute
						name="LoginId"
						type="text"
						placeholder="Enter the login Id"
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input
						name="password"
						type="password"
						placeholder="Enter password"
					/>
				</FormControl>
				<Button sx={{ mx:14, mt: 1}}>
					Log in
				</Button>
		</Sheet>
    </CssVarsProvider>
  );
}
