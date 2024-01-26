import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
 

  return (
    <div className="contact-container" id='appointment'>
      <h2>Faça um agendamento</h2>
      <form id='appointment'>
        <label htmlFor="name">Nome:</label>
        <input className='form-control' type="text" id="name" name="name" placeholder='Qual o seu nome?' required/>
        <label htmlFor="email">E-mail:</label>
        <input className='form-control' type="email" id="email" name="email" placeholder='Insira o seu email' required/>
        <label htmlFor="service">Qual o tipo de serviço?</label>
        <select name="service" id="service" className='form-control' required>
          <optgroup>
            <option value="none" disabled>-- Escolha uma opção --</option>
            <option value="haircut">Corte 14€</option>
            <option value="beard">Barba €10</option>
            <option value="cutBeard">Corte + Barba 24€</option>
          </optgroup>
        </select>
        <label htmlFor="date">Qual a data do agendamento?</label>
        <input type="date" name="date" id="date" className='form-control'/>
        <select name="service" id="service" className='form-control' required>
          <optgroup>
            <option value="none" disabled>-- Escolha uma opção --</option>
            <option value="9">09:00h</option>
            <option value="9-30">09:30h</option>
            <option value="10">10:00h</option>
            <option value="10-30">10:30h</option>
            <option value="11">11:00h</option>
            <option value="11-30">11:30h</option>
            <option value="12">12:00h</option>
            <option value="12-30">12:30h</option>
            <option value="13">13:00h</option>
            <option value="13-30">13:30h</option>
            <option value="15">15:00h</option>
            <option value="15-30">15:30h</option>
            <option value="16">16:00h</option>
            <option value="16-30">16:30h</option>
            <option value="17">17:00h</option>
            <option value="17-30">17:30h</option>
            <option value="18">18:00h</option>
            <option value="18-30">18:30h</option>
            <option value="19">19:00h</option>
          </optgroup>
        </select>
        <button type="submit" className='btn btn-dark form-control'>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
