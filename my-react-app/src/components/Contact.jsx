import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userService, setUserService] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceHour, setServiceHour] = useState('');
  const [userMessage, setUserMessage] = useState('');

  function makeAppointment() {
    const appointment = document.getElementById('appointment')
    const appointmentButton = document.getElementById('appButton')

    appointment.classList.add('visible')
    appointmentButton.style.display = 'none'
  }

  const sendEmail = (e) => {
    const appointment = document.getElementById('appointment')
    const appointmentButton = document.getElementById('appButton')

    e.preventDefault();

    appointment.classList.remove('visible')
    appointmentButton.style.display = 'block'
    
    const formatDate = (dateString) => {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
      return formattedDate;
    };

    const formattedDate = formatDate(serviceDate);

    const templateParams = {
      from_userName: userName,
      userService: userService,
      userEmail: userEmail,
      serviceDate: formattedDate,
      serviceHour: serviceHour,
      userMessage: userMessage
    };

    emailjs.send("service_5ncmbfl", "template_qtymn2a", templateParams, "M5TCiSZE8QOgiAt8N")
      .then((response) => {
        console.log('Email Enviado', response.status, response.text);
        setUserName('');
        setUserEmail('');
        setUserService('');
        setServiceDate('');
        setServiceHour('');
        setUserMessage('');
      })
      .catch((error) => {
        console.log('ERRO:', error);
      });
  };

  const handleRefresh = () => {
    window.location.reload();

    window.location.href = '#appointment';
  };

  return (
    <div className="contact-container" id='appointmentContainer'>
      <button id='appButton' className='btn btn-dark' onClick={makeAppointment}>Agendar um horário</button>
      <form id='appointment' onSubmit={sendEmail}>
      <label htmlFor="name">Nome:</label>
        <input className='form-control' type="text" id="name" name="name" placeholder='Qual o seu nome?' onChange={(e)=>setUserName(e.target.value)} value={userName}/>
        <label htmlFor="email">E-mail:</label>
        <input className='form-control' type="email" id="email" name="email" placeholder='Insira o seu email' onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
        <label htmlFor="service">Qual o tipo de serviço?</label>
        <select name="service" id="service" className='form-control' required onChange={(e)=>setUserService(e.target.value)} value={userService}>
          <optgroup>
            <option value="none" disabled>-- Escolha uma opção --</option>
            <option value="Corte de Cabelo">Corte 14€</option>
            <option value="Barba">Barba €10</option>
            <option value="Corte + Barba">Corte + Barba 24€</option>
          </optgroup>
        </select>
        <label htmlFor="date">Qual a data do agendamento?</label>
        <input type="date" name="date" id="date" className='form-control' onChange={(e)=>setServiceDate(e.target.value)} value={serviceDate}/>
        <label htmlFor="hour">Escolha o horário:</label>
        <select name="hour" id="hour" className='form-control' required onChange={(e)=>setServiceHour(e.target.value)} value={serviceHour}>
          <optgroup>
            <option value="none" disabled>-- Escolha uma opção --</option>
            <option value="09:00h">09:00h</option>
            <option value="09:30h">09:30h</option>
            <option value="10:00h">10:00h</option>
            <option value="10:30h">10:30h</option>
            <option value="11:00h">11:00h</option>
            <option value="11:30h">11:30h</option>
            <option value="12:00h">12:00h</option>
            <option value="12:30h">12:30h</option>
            <option value="13:00h">13:00h</option>
            <option value="13:30h">13:30h</option>
            <option value="15:00h">15:00h</option>
            <option value="15:30h">15:30h</option>
            <option value="16:00h">16:00h</option>
            <option value="16:30h">16:30h</option>
            <option value="17:00h">17:00h</option>
            <option value="17:30h">17:30h</option>
            <option value="18:00h">18:00h</option>
            <option value="18:30h">18:30h</option>
            <option value="19:00h">19:00h</option>
          </optgroup>
        </select>
        <label htmlFor="obs">Observações:</label>
        <textarea className='form-control' name="message" id="message" cols="30" rows="10" placeholder='Escreva algo relevante em relação ao serviço desejado...' onChange={(e)=>setUserMessage(e.target.value)} value={userMessage}></textarea>
        <button type="submit" className='btn btn-dark form-control'>Agendar Horário</button>
        <button onClick={handleRefresh} className='btn btn-dark form-control'>Cancelar</button>
      </form>
    </div>
  );
};

export default Contact;
