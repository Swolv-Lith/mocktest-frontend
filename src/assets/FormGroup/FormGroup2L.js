import React from 'react'
import '../../App.css'

export default function FormGroup2Left() {
  return (
    <div class="form-group">
      <div class="form-row form-row-3">
        <select name="estado_do_imovel">
          <option class="option" value="Novo ou Usado?">Novo ou Usado?</option>
          <option class="option" value="Imóvel na planta">Imóvel na planta</option>
          <option class="option" value="Imóvel Novo">Imóvel Novo</option>
          <option class="option" value="Imóvel Usado">Imóvel Usado</option>
        </select>
        <span class="select-btn">
          <i class="zmdi zmdi-chevron-down"></i>
        </span>
      </div>
      <div class="form-row form-row-4">
        <select name="tipo_do_imovel">
          <option value="Tipo do Imóvel">Tipo do Imóvel</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Sobrado">Sobrado</option>
        </select>
        <span class="select-btn">
          <i class="zmdi zmdi-chevron-down"></i>
        </span>
      </div>
    </div>
  )
}