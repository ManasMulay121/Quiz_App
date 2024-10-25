import {React, useState} from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // Corrected import
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { BsFileText } from 'react-icons/bs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FcRightUp } from 'react-icons/fc';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Question_form.css';
import { MenuItem, Typography } from '@mui/material';



function Question_form() {	
	const [questions, setquestions] = useState([
		[{	
			questionText: "What is capital of India",
			questionType: "Radio",
			options: [
				{ optionText: "Delhi" },
				{ optionText: "Pune" },
				{ optionText: "Mumbai" },
				{ optionText: "Other" },

			],
			open: true,
			required: false
		}]
	]);

	function questionsUI() {
		return questions.map((ques, i) => (
			<div key={i}>
				<Accordion expanded={questions[i].open} className={questions[i].open ? 'add border' : ''}>
					<AccordionSummary
						aria-controls='panel1a-content'
						id='panel1a-header'
						elevation={1} 
						style={{ width: "100%" }}
					>
						{questions[i].open ? (
							<div className="saved_questions">
								<Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
									{i + 1}. {ques.questionText}
								</Typography>
								{ques.options.map((op, j) => (
									<div key={j}>
										<div style={{ display: "flex" }}>
											<FormControlLabel 
												style={{ marginLeft: "5px", marginBottom: "5px" }} 
												disabled 
												control={<input type={ques.questionType} color='primary' style={{ marginRight: '3px' }} required={ques.required} />} 
												label={
													<Typography style={{ fontFamily: 'Roboto', fontSize: '13px', letterSpacing: '.2px', lineHeight: '20px', color: '#202124' }}>
														{op.optionText}
													</Typography>
												} 
											/>
										</div>
									</div>
								))}
							</div>
						) : " "}
					</AccordionSummary>

					<div className="question_boxes">
						<AccordionDetails className='add_question'>
							<div className="add_question_top">
								<input type="text" className='question' placeholder='Question' value={ques.questionText}></input>
								<CropOriginalIcon style={{color:"#5f6368", fontSize:"13px"}}/>
								<Select className='select'>
									<MenuItem id='text' value='text'><SubjectIcon style={{marginRight:"10px"}} />Paragraph</MenuItem>
									<MenuItem id='checkbox' value='Checkbox'><CheckBoxIcon style={{marginRight:'10px', color:'#70757a'}} checked />Checkboxes </MenuItem>
									<MenuItem id='radio' value='Radio' > <Radio style={{marginRight:'10px', color:'#70757a'}} checked />Multiple Choice </MenuItem>
								</Select>
							</div>
							{ques.options.map((op, j) =>(
								<div className="add_question_body" key={j}>
									{
										(ques.questionType != "text") ? 
										<input type={ques.questionType} style={{marginRight:'10px'}} /> :
										<ShortTextIcon style={{marginRight:'10px'}} />
									}
									<div>
										<input type="text" className='text_input' placeholder='option' value={ques.options[j].optionText} />
									</div>
									<CropOriginalIcon style={{color:'#5f6368'}} />
									<IconButton aria-label='delete'>
										<CloseIcon />
									</IconButton>
								</div>
							))}
						</AccordionDetails>
					</div>
				</Accordion>
			</div>
		));
	}

	return (
		<div className="question_form">
			<br />
			<div className="section">
				<div className="question_title_section">
					<div className="question_form_top">
						<input type="text" className='question_form_top_name' placeholder='Untitled Document' style={{ color: 'black' }} />
						<input type="text" className='question_form_top_desc' placeholder='Form Description' />
					</div>
					{questionsUI()}
				</div>
			</div>	
		</div>
	);
}

export default Question_form;