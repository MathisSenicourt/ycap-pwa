import React from 'react';
import './verticalMenu.css';
import arrow from '../../assets/arrow.png';
import iconRed from '../../assets/icons-portail/icon-red.png';

function VerticalMenu({ isOpen, onClose ,historyData }) {
  return (
    <div className={`vertical-menu ${isOpen ? 'open' : ''}`}>
        <div className='header-menu'>
            <button onClick={onClose} className="arrow-button">
                <img src={arrow} alt="Fleche" className='img-arrow'/>
            </button>
            <h2 className="title-vertical-menu">Historique des découvertes</h2>
        </div>
        
        <ul className="history-list">
            {historyData.map((item, index) => (
            <li key={index} className="history-item">
                <div className="bullet">
                <img src={iconRed} alt="icon-red" className='icon-red-img'/>
                </div> 
                <p className="item-text">{item}</p> 
            </li>
            ))}
        </ul>
    </div>
  );
}

export default VerticalMenu;
