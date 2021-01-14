import React from 'react'
import '../App.css'
import {FormGroup1Left, FormGroup2Left} from '../assets/FormGroup/FormGroups'

export default function LeftForm() {
  return (
    <div class="form-left">
      <h2>Informações do Imóvel Desejado</h2>
      <FormGroup1Left />
      <div class="form-row">
        <select name="mudanca">
          <option class="option" value="Quanto pretende se mudar?">Quanto pretende se mudar?</option>
          <option class="option" value="Mudança imediata">Mudança imediata</option>
          <option class="option" value="Apenas planejamento de mudança">Apenas planejamento de mudança</option>
          <option class="option" value="Pesquisa de mudança a longo prazo">Pesquisa de mudança a longo prazo</option>
        </select>
        <span class="select-btn">
          <i class="zmdi zmdi-chevron-down"></i>
        </span>
      </div>
      <FormGroup2Left />
      <div class="form-row">
        <div class="form-row-3">
          <select name="localizacao">
            <option class="option" value="Bairro do Imóvel">Bairro do Imóvel</option>
            <option class="option" value="Liberdade">Liberdade</option>
            <option class="option" value="Vila Mariana">Vila Mariana</option>
            <option class="option" value="República">República</option>
          </select>
          <span class="select-btn">
            <i class="zmdi zmdi-chevron-down"></i>
          </span>
        </div>
      </div>
    </div>
  )
}