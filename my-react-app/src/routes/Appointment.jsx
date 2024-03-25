import React, { useState, useEffect } from 'react';
import '../styles/Appointment.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Trans, useTranslation} from 'react-i18next'

const Appointment = () => {
  const {t} = useTranslation()
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userService, setUserService] = useState('Corte');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceHour, setServiceHour] = useState('09:00h');
  const [userMessage, setUserMessage] = useState('');

  function navigateTop() {
      window.scrollTo(0, 0);
  }

  const navigate = useNavigate()

  function navigateToHome() {
    navigate('/')
    window.scrollTo(0, 0);
}

  const sendEmail = (e) => {
    const appointment = document.getElementById('appointment')
    const appointmentButton = document.getElementById('appButton')

    e.preventDefault();
    
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
        alert(`Obrigado, ${userName}! O agendamento foi feito com sucesso para o dia ${formattedDate} às ${serviceHour}.`)
        setUserName('');
        setUserEmail('');
        setUserService('');
        setServiceDate('');
        setServiceHour('');
        setUserMessage('');
        navigateToHome();
      })
      .catch((error) => {
        console.log('ERRO:', error);
      });
  };

  

  return (
    <div className="contact-container" >
      <div id='appointmentContainer'>
        <form id='appointment' onSubmit={sendEmail}>
        <h2>{t("book.title")}</h2>
        <label htmlFor="name">{t("book.name")}</label>
          <input className='form-control' type="text" id="name" name="name" placeholder={t("book.placeholdername")} onChange={(e)=>setUserName(e.target.value)} value={userName} required/>
          <label htmlFor="email">E-mail:</label>
          <input className='form-control' type="email" id="email" name="email" placeholder={t("book.placeholderemail")} onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} required/>
          <label htmlFor="service">{t("book.service")}</label>
          <select name="service" id="service" className='form-control' onChange={(e)=>setUserService(e.target.value)} value={userService} required>
            <optgroup>
              <option value="none" disabled>{t("book.select")}</option>
              <option value="Corte de Cabelo">{t("book.haircut")}</option>
              <option value="Barba">{t("book.beard")}</option>
              <option value="Corte + Barba">{t("book.haircut+beard")}</option>
            </optgroup>
          </select>
          <label htmlFor="date">{t("book.date")}</label>
          <input type="date" name="date" id="date" className='form-control' onChange={(e)=>setServiceDate(e.target.value)} value={serviceDate} required/>
          <label htmlFor="hour">{t("book.hour")}</label>
          <select name="hour" id="hour" className='form-control' onChange={(e)=>setServiceHour(e.target.value)} value={serviceHour} required>
            <optgroup>
              <option value="none" disabled>{t("book.select")}</option>
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
          <label htmlFor="obs">{t("book.observation")}</label>
          <textarea className='form-control' name="message" id="message" cols="30" rows="10" placeholder={t("book.placeholderobservation")} onChange={(e)=>setUserMessage(e.target.value)} value={userMessage}></textarea>
          <button type="submit" className='btn btn-dark form-control'>{t("book.button1")}</button>
          <Link to={'/'} onClick={navigateTop}>
            <button className='btn btn-dark form-control'>{t("book.button2")}</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
