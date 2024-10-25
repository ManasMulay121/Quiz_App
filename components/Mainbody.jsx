import * as React from 'react'
import './Mainbody.css'
import '@fontsource/inter';
import { Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import quiz_image from './images/quiz_image2.png';
import './Mainbody.css';

function Mainbody(){
	return(
		<div className="mainbody">
			<div className="mainbody_top" style={{fontSize:"16px" , fontWeight:"500"}}>
				<Typography>Recent Quizes</Typography>
			</div>
			<div className="mainbody_docs">
				<div className="doc_card">
					<img src={quiz_image} alt="Quiz!" className='doc_image' />
					<div className="doc_card_content">
						<Typography level='h5'></Typography>
						<div className="doc_content" style={{fontSize:'12px', color:'grey'}}>
							<div className="content_left">
								<StorageIcon style={{color:'white', fontSize:'12px', backgroundColor:'#6E2594', padding:'3px', marginRight:'3px', borderRadius:'2px' }} />
								
							</div>
							<MoreVertIcon style={{fontSize:'16px', color:'grey'}}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mainbody