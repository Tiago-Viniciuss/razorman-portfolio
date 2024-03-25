import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ChangeLanguage.css'

const ChangeLanguage = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const handleChangeLanguage = (value) => {
        i18n.changeLanguage(value);

    }


    return (
        <div className='languageSelector'>
            <select onChange={(e) => handleChangeLanguage(e.target.value)} id="languageSelect" value={currentLanguage}>
                <option value="pt">PT</option>
                <option value="en">EN</option>
    </select>
        </div>
    );
};

export default ChangeLanguage;
