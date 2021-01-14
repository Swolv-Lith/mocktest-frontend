import React from 'react'
import '../../App.css'

export default function CheckboxRightForm() {
  return (
    <div class="form-checkbox">
      <label class="container">
        <p>Eu aceito os <a href="terms.html" class="text">Termos e Condições</a> do seu site.</p>
        <input type="checkbox" name="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  )
}