import React from "react";
import form_image from "./images/form1.png"
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai"; 
import { IconButton } from "@mui/material";
import { IoMdFolderOpen } from "react-icons/io";

import { ColorLens } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import Button from "@mui/material/Button";
import './Formheader.css';

function Formheader(){
	return(	
		<div className="from_header">
			<div className="form_header_left">
				<img src={form_image} alt="form" style={{width:'40px', height:'45px'}} />
				<input type="text" placeholder="Untitled form" className="form_name" />
				<IoMdFolderOpen className="form_header_icon" style={{marginRight: '10px'}} />
				<FiStar className="form_header_icon" style={{marginRight:'10px'}} />
				<span style={{fontSize:'16px', fontWeight:'600'}} > All changes saved in drive</span>
			</div>
			<div className="form_header_right">
				<IconButton>
					<ColorLens size="small" className="form_header_icon"/>
				</IconButton>
				<IconButton>
					<AiOutlineEye className="form_header_icon" />
				</IconButton>
				<IconButton>
					<FiSettings className="form_header_icon" />
				</IconButton>
				<Button variant="contained" color="primary" href="#contained-buttons" >Send</Button>
				<IconButton>
				<MoreVert className="form_header_icon" />
				</IconButton>
			</div>
		</div>
	)
}

export default Formheader;