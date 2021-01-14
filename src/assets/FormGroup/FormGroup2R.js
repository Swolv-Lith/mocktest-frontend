import React from 'react'
import '../../App.css'

export default function FormGroup2Right() {
  return (
    <div class="form-group">
      <div class="form-row form-row-1">
        <input type="text" name="code" class="code" placeholder="DDD" required />
      </div>
      <div class="form-row form-row-2">
        <input type="text" name="phone" class="phone" placeholder="Número de Contato" required />
      </div>
    </div>
  )
}