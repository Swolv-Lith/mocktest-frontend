import React from 'react'
import '../App.css'
import RegistrarBusca from '../assets/Buttons/Buttons'
import CheckboxRightForm from '../assets/Checkbox/Checkbox'
import {FormGroup1Right, FormGroup2Right} from '../assets/FormGroup/FormGroups'

 export default function RightForm () {
  return (
    <div class="form-right">
			<h2>Informações de Contato</h2>
			<div class="form-row form-row-1">
				<input type="text" name="name" class="input-text" placeholder="Nome Completo" required/>
			</div>
			<div class="form-row">
				<input type="text" name="logradouro" class="logradouro" id="logradouro" placeholder="Logradouro" required/>
			</div>
			<FormGroup1Right />
			<FormGroup2Right />
			<div class="form-row">
				<input type="text" name="email" class="input-text" required
					pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="email@exemplo.com" />
			</div>
			<CheckboxRightForm />
			<RegistrarBusca />
		</div>
  )
}