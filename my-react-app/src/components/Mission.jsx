import React from 'react'
import '../styles/MyJob.css'
import {Trans, useTranslation} from 'react-i18next'

const Mission = () => {
  const {t} = useTranslation()
  return (
    <div id='mission'>
        <h5>
            {t("mymission.title")}
        </h5>
        <p>
            {t("mymission.subtitle")} <br /> <br /> 
            <strong><i>
              <span>#OldSchoolBarbershop</span>
            </i></strong>
        </p>
    </div>
  )
}

export default Mission