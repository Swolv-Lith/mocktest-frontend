import React from 'react'
import '../App.css'

const LeftForm = props => {
  return (
    <div class="form-left">
      <h2>Informações do Imóvel Desejado</h2>
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

export default LeftForm