import * as React from 'react';
import { useTheme } from '@mui/joy/styles'
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import './template.css';
import Mainbody from './Mainbody';
import { v4 as uuid } from "uuid";
import {Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


/**********************************************
  Design credit: https://flutter.dev/
 **********************************************/

function Template() {
	const [color, setColor] = React.useState('primary');
	const [solid, setSolid] = React.useState(true);
	const theme = useTheme();
  
	const shade = (x) => theme.vars.palette[color][x];
	const color1 = solid ? shade(800) : shade(600);
	const color2 = solid ? shade(600) : shade(200);
	const color3 = shade(900);
	const gradient1 = `${color1}, ${color2} 65%`;
	const gradient2 = `${color1} 65%, ${color3}`;
	const textColor = { color: solid ? shade(50) : shade(700) };

	const navigate = useNavigate(); 
	const createForm = () =>{		
		const id_ = uuid();
		console.log(id_);	
		navigate(`/form/${id_}`);
	}

	return (
    <>
      <div className="template_section">
        <div className="template_top">
		<Sheet
			variant={solid ? 'solid' : 'soft'}
			color={color}
			invertedColors
			sx={[
				{
				flexGrow: 1,
				position: 'relative',
				display: 'flex',
				p: '3rem 1rem',
				paddingLeft: '15%',
				overflow: 'clip',
				'&::after': {
					content: `""`,
					display: 'block',
					width: '20rem',
					height: '40rem',
					background: `linear-gradient(to top, ${gradient1}, ${gradient2})`,
					position: 'absolute',
					transform: 'rotate(-45deg)',
					top: { xs: '-80%', sm: '-95%', md: '-65%', lg: '-70%' },
					right: { xs: '-70%', sm: '-15%' },
				},
				},
				solid ? { bgcolor: shade(800) } : { bgcolor: shade(100) },
			]}
			>
			<div>
				<Typography level="h1" component="h2" sx={textColor}>
				Quiz creator
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, py:4 }}>
				<Button className='create'
					style={{borderRadius: '99'}}
					endDecorator={<Add />}
					sx={[
					
					solid
						? { '&:active': { bgcolor: shade(200) } }
						: { '&:active': { bgcolor: shade(700) } },
					]}
					onClick={createForm}
				>
					create
				</Button>
				</Box>
			</div>
			<Sheet
				sx={{
				zIndex: 1,
				position: 'absolute',
				bottom: '1.5rem',
				right: '1.5rem',
				bgcolor: 'transparent',
				display: 'flex',
				gap: 2,
				'& button': { borderRadius: '50%' },
				}}
			>
				<IconButton variant="solid" onClick={() => setSolid((state) => !state)}>
				<InvertColorsIcon fontSize="xl" />
				</IconButton>
			</Sheet>
			</Sheet>
        </div>
        <div className="template_body">
			<Mainbody />
        </div>
      </div>
    </>
  );
}

export default Template;
