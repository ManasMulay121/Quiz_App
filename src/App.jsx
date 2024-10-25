import { React, useState } from 'react'
import Login from './login'
import Student from './student'
import Admin from './admin'
import { Form, Route ,Routes } from 'react-router-dom'
import Template from '../components/template';
import Formheader from '../components/Formheader'
import Centeredtabs from '../components/tabs'
import Question_form from '../components/Question_from'

function App() {
  return (
	<>
		<Routes>
			<Route path="/" element={<Template />} />
			<Route path="/form/:id" element={
				<div>
					<Formheader />
					<Centeredtabs />
					<Question_form />
				</div>
			}/>
		</Routes>
	</>
  )
}

export default App
