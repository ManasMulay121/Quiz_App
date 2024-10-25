import React, { useState } from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/icons-material/CheckBox'; 
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from 'react-icons/bs'; 
import IconButton from '@mui/material/IconButton';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; 
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Accordion from '@mui/material/Accordion'; 
import AccordionSummary from '@mui/material/AccordionSummary'; 
import AccordionDetails from '@mui/material/AccordionDetails'; 
import Button from '@mui/material/Button';
import { FcRightUp, FcUnlock } from 'react-icons/fc';  
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Question_form.css';
import { MenuItem, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

function Question_form() {	
	const [questions, Setquestions] = useState([
		{
			questionText: "What is the capital of India?",
			questionType: "Radio",
			options: [
				{ optionText: "Pune" },
				{ optionText: "Delhi" }
			],
			answer:false,
			answerKey : "", 
			points:0,
			open: true,
			required: false
		}
	]);

	function changeQuestion(text, i) {
		const newQuestions = [...questions];
		newQuestions[i].questionText = text;
		Setquestions(newQuestions);
		// Console log after the state has been updated
		console.log("Updated questions:", newQuestions);
	}

	function changeOptionText(text, questionIndex, optionIndex) {
		const newQuestions = [...questions];
		newQuestions[questionIndex].options[optionIndex].optionText = text;
		Setquestions(newQuestions);
		console.log("Updated option text:", newQuestions);
	}

	function addQuestionType(i, type) {
		let qs = [...questions];
		console.log(type);
		qs[i].questionType = type;
		Setquestions(qs);
	}

	function removeOption(i, j){
		var RemoveOptionQuestion = [...questions];
		if(RemoveOptionQuestion[i].options.length > 1){
			RemoveOptionQuestion[i].options.splice(j, 1);
			Setquestions(RemoveOptionQuestion);
			console.log(i +"__"+ j);
		}
	}

	function addOption(i){
		var optionsOfQuestion = [...questions];
		if(optionsOfQuestion[i].options.length < 30){
			optionsOfQuestion[i].options.push({ optionText: "Option " + (optionsOfQuestion[i].options.length + 1) });
		}else{
			console.log("Max 30 options");
		}
		Setquestions(optionsOfQuestion);
	}

	function copyQuestion(i){
		let qs =  [...questions];
		var newQuestion = qs[i]
		Setquestions([...questions, newQuestion])
	}
	
	function deleteQuestion(i){
		let qs = [...questions];
		if(questions.length > 1){
			qs.splice(i, 1);
		}
		Setquestions(qs);
	}

	function requiredQuestion(i){
		var reqQuestion = [...questions];
		reqQuestion[i].required = !reqQuestion[i].required
		console.log(reqQuestion[i].required +  " " + i);
		Setquestions(reqQuestion);
	}

	function addMoreQuestionField(){
		Setquestions([...questions, {questionText:"Question", questionType:"radio", options:[{optionText:"option 1"}], open:true, required:false}])
	}

	function setOptionAnswer(ans, qno){
		var Questions = [...questions];
		Questions[qno].answerKey = ans;
		Setquestions(Questions);

	}

	function setOptionPoints(points, qno){
		var Questions = [...questions];
		Questions[qno].points = points;
		Setquestions(Questions);
		console.log(qno + " " + points);
	}

	function doneAnswer(i){
		var answerOfQuestion = [...questions];
		answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
		Setquestions(answerOfQuestion);


	}
	function questionsUI() {
		return questions.map((ques, i) => (
			<div key={i}>
				<Accordion expanded={ques.open} className={ques.open ? 'add border' : ''}>
					<AccordionSummary
						aria-controls='panel1a-content'
						id='panel1a-header'
						elevation={1} 
						style={{ width: "100%" }}
					>
						{!questions[i].open ? (
							<div className="saved_questions">
								<Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
									{i + 1}.  {ques.questionText}
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
						) : ""}
					</AccordionSummary>
					<div className="question_boxes">
						<AccordionDetails className='add_question'>
							
							<div className="add_question_top">
								<input 
									type="text" 
									className='question' 
									placeholder='Question' 
									value={ques.questionText} 
									onChange={(e) => changeQuestion(e.target.value, i)} 
								/>
								<CropOriginalIcon style={{color:"#5f6368", fontSize:"13px"}}/>
								<Select className='select'>
									<MenuItem id='text' value='text' onClick={() => addQuestionType(i, "text")}>
										<SubjectIcon style={{marginRight: "10px"}} /> Paragraph
									</MenuItem>
									<MenuItem id='checkbox' value='Checkbox' onClick={() => addQuestionType(i, "checkbox")}>
										<Checkbox style={{marginRight: '10px', color: '#70757a'}} checked /> Checkboxes
									</MenuItem>
									<MenuItem id='radio' value='Radio' onClick={() => addQuestionType(i, "radio")}>
										<Radio style={{marginRight: '10px', color: '#70757a'}} checked /> Multiple Choice
									</MenuItem>
								</Select>
							</div>
							{ques.options.map((op, j) => (
								<div className="add_question_body" key={j}>
									{ques.questionType !== "text" ? 
										<input type={ques.questionType} style={{marginRight:'10px'}} /> : 
										<ShortTextIcon style={{marginRight:'10px'}} />
									}
									<div>
										<input 
											type="text" 
											className='text_input' 
											placeholder='Option text' 
											value={op.optionText} 
											onChange={(e) => changeOptionText(e.target.value, i, j)}
										/>
									</div>
									<CropOriginalIcon style={{color:'#5f6368'}} />
									<IconButton aria-label='delete'>
										<CloseIcon onClick = {() => {removeOption(i, j)}} />
									</IconButton>
								</div>
							))}
							{ques.options.length < 5 ? (
								<div className="add_question_body">
									<FormControlLabel 
										disabled 
										control={
											ques.questionType !== "text" ? 
												<input type={ques.questionType} color='primary' style={{marginLeft:'10px', marginRight:'10px'}} disabled /> : 
												<ShortTextIcon style={{marginRight:'10px'}}/>
										}
										label={
											<div>
												<input type="text" className='text_input' style={{fontSize:'13px', width:'60px'}} placeholder='Add other' />
												<Button size='small' onClick={() => {addOption(i)}} style={{textTransform:'none', color:'#4285f4', fontSize:'13px',fontWeight:'600'}}>Add option</Button>
											</div>
										} 
									/>
								</div>
							) : ''}
							<div className="add_footer">
								<div className="add_question_bottom_left">
									<Button size='small' style={{textTransform:'none', fontSize:'13px', fontWeight:'600'}}>
										<FcRightUp style={{border:'2px solid', padding:'2px', marginRight:'8px'}} />Answer Key
									</Button>
								</div>
								<div className="add_question_bottom">
									<IconButton onClick={() => {copyQuestion(i)}} aria-label='copy'>
										<FilterNoneIcon />
									</IconButton>
									<IconButton  onClick={() => deleteQuestion(i)} aria-label='delete'>
										<BsTrash />
									</IconButton>
									<IconButton>
										<span style={{color:'#5f6368', fontSize:'13px'}}>Required<Switch name='checkedA' color='primary' onClick={() => requiredQuestion(i)} checked={ques.required} /> </span>
									</IconButton>
									<IconButton>
										<MoreVertIcon />
									</IconButton>
								</div>
							</div>
						</AccordionDetails>
						<div className="question_edit">
							<AddCircleOutlineIcon onClick={() => {addMoreQuestionField()}} className='edit'/>
							<OndemandVideoIcon className='edit' />
							<CropOriginalIcon className='edit'/>
							<TextFieldsIcon className='edit' />
						</div>
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
