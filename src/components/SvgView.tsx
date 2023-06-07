import React from 'react';

interface Props {
    id:string,
}
//в props передаем название нужного svg через switch-case возвращаем
export const SvgView = ({id}:Props) => {
    switch (id){
        case 'telegram':
            return(
                <svg width="40px" height="40px" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215">
                    <linearGradient id="linear-gradient" x1="0" y1="90%" x2="110%" y2="30%">
                        <stop offset="10%" stopColor="#70f0ee"/>
                        <stop offset="100%" stopColor="#4e69d4"/>
                    </linearGradient>
                    <g id="Telegram">
                        <circle fill="url(#linear-gradient)" id="Background" cx="107.5" cy="107.5" r="107.5"/>
                        <path id="Telegram-2" fill="#fff"
                              d="M603.31,105.65q46.89-20.43,62.53-26.94c29.78-12.38,36-14.53,40-14.61A7.09,7.09,0,0,1,710,65.35a4.49,4.49,0,0,1,1.53,2.9,19.25,19.25,0,0,1,.18,4.23c-1.61,17-8.6,58.09-12.15,77.08-1.5,8-4.46,10.73-7.33,11-6.22.57-11-4.12-17-8.07-9.44-6.19-14.77-10-23.93-16.08-10.59-7-3.72-10.81,2.31-17.07,1.58-1.64,29-26.6,29.54-28.86a2.18,2.18,0,0,0-.5-1.9,2.49,2.49,0,0,0-2.22-.21q-1.41.31-45.22,29.89-6.42,4.41-11.63,4.3c-3.83-.09-11.19-2.17-16.67-4-6.71-2.18-12-3.33-11.58-7Q595.7,108.68,603.31,105.65Z"
                              transform="translate(-554)"/>
                    </g>
                </svg>
            )
        case 'vk':
            return (
                <svg width="40px" height="40px" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215">
                    <linearGradient id="linear-gradient" x1="0" y1="90%" x2="110%" y2="30%">
                        <stop offset="10%" stopColor="#70f0ee"/>
                        <stop offset="100%" stopColor="#4e69d4"/>
                    </linearGradient>
                    <g id="VK">
                        <circle fill="url(#linear-gradient)" id="Background" cx="107.5" cy="107.5" r="107.5"/>
                        <path id="VK-2" fill="#fff"
                              d="M111.44,147.14C69.76,147.14,46,118.56,45,71H65.87c.69,34.9,16.08,49.69,28.27,52.74V71h19.67v30.1c12-1.29,24.69-15,28.95-30.1h19.67c-3.28,18.59-17,32.31-26.75,37.95A60.16,60.16,0,0,1,167,147.14H145.36c-4.65-14.48-16.24-25.68-31.55-27.2v27.2Z"/>
                    </g>
                </svg>
            )
        case 'mail':
            return (
                <svg width="40px" height="40px" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215">
                    <linearGradient id="linear-gradient" x1="0" y1="90%" x2="110%" y2="30%">
                        <stop offset="10%" stopColor="#70f0ee"/>
                        <stop offset="100%" stopColor="#4e69d4"/>
                    </linearGradient>
                    <g id="Mail.ru">
                        <circle fill="url(#linear-gradient)" id="Background" cx="107.5" cy="107.5" r="107.5"/>
                        <path id="Mail.ru-2" fill="#fff"
                              d="M719.58,384.58c0,19.76-9.25,29-20.87,29a18.86,18.86,0,0,1-16-8.83A28.83,28.83,0,1,1,691,384.58V394c0,4.77,3.36,8.13,7.71,8.13,5.18,0,9.38-4.35,9.38-17.52a46.2,46.2,0,1,0-21.29,38.67l7.56,8.69A56.92,56.92,0,0,1,662,441.89a57.45,57.45,0,1,1,57.58-57.31ZM662.14,402.1a17.52,17.52,0,1,0-17.52-17.52A17.52,17.52,0,0,0,662.14,402.1Z"
                              transform="translate(-554 -277)"/>
                    </g>
                </svg>
            )
        default:
            return (<svg></svg>)
    }
};
