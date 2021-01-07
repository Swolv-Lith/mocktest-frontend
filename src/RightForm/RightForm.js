import React from 'react'
import '../App.css'

const RightForm = props => {
  return (
    <div class="form-right">
          <h2>Informações de Contato</h2>
          <div class="form-row form-row-1">
            <input type="text" name="name" class="input-text" placeholder="Nome Completo" required/>
          </div>
					<div class="form-row">
						<input type="text" name="logradouro" class="logradouro" id="logradouro" placeholder="Logradouro" required/>
					</div>
					<div class="form-group">
						<div class="form-row">
							<select name="bairro">
								<option value="Bairro">Bairro</option>
								<option value="Vila Olímpia">Vila Olímpia</option>
								<option value="Jaguaré">Jaguaré</option>
								<option value="Bauneário Cambureú">Bauneário Cambureú</option>
							</select>
							<span class="select-btn">
								<i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
						<div class="form-row">
							<select name="cidade">
								<option value="Cidade">Cidade</option>
								<option value="São Paulo">São Paulo</option>
								<option value="Osasco">Osasco</option>
								<option value="Santa Catarina">Santa Catarina</option>
							</select>
							<span class="select-btn">
								<i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="text" name="code" class="code" placeholder="DDD" required />
						</div>
						<div class="form-row form-row-2">
							<input type="text" name="phone" class="phone" placeholder="Número de Contato" required />
						</div>
					</div>
					<div class="form-row">
						<input type="text" name="email" class="input-text" required
							pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="email@exemplo.com" />
					</div>
					<div class="form-checkbox">
						<label class="container">
							<p>Eu aceito os <a href="terms.html" class="text">Termos e Condições</a> do seu site.</p>
							<input type="checkbox" name="checkbox" />
							<span class="checkmark"></span>
						</label>
					</div>
					<div class="form-row-last">
						<input type="submit" name="register" class="register" value="Registrar Busca" />
					</div>
				</div>
  )
}

export default RightForm