import React from 'react'
import '../../App.css'

export default function FormGroup1Right() {
  return (
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
  )
}
