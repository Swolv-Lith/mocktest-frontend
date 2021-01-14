import React from 'react'
import '../../App.css'

export default function FormGroup1Left() {
    return (
      <div class="form-group">
        <div class="form-row form-row-1">
          <select name="pagamento">
            <option class="option" value="Pagamento">Pagamento</option>
            <option class="option" value="Á vista">Á vista</option>
            <option class="option" value="Parcelado">Parcelado</option>
            <option class="option" value="Financiamento">Financiamento</option>
          </select>
          <span class="select-btn">
            <i class="zmdi zmdi-chevron-down"></i>
          </span>
        </div>
        <div class="form-row form-row-2">
          <select name="investimento">
            <option value="Quanto quer investir?">Quanto quer investir?</option>
            <option value="Menos de R$150.000">Menos de R$150.000</option>
            <option value="Entre R$150.000 e R$250.000">Entre R$150.000 e R$250.000</option>
            <option value="Mais de R$250.000">Mais de R$250.000</option>
          </select>
          <span class="select-btn">
            <i class="zmdi zmdi-chevron-down"></i>
          </span>
        </div>
      </div>
    )
  }