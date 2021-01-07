import React from 'react'
import './App.css'
import LeftForm from './LeftForm/LeftForm'
import RightForm from './RightForm/RightForm'

function App() {
  return (
    <div class="page-content">
			<div class="form-v10-content">
				<form class="form-detail" action="/send-email" method="POST">
					<LeftForm />
					<RightForm />
				</form>
			</div>
		</div>
	)
}

export default App