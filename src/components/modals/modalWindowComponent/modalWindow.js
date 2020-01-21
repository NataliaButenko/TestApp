import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class ModalWindow extends Component {
  constructor() {
    super()
  }

  render() {
    const { hideModalWindow } = this.props;
    return (
      <div className='modalbackground' id ='modalWindow'>
        <div className='modalWindow'>
          <p>Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?</p>
          <button className='btn-in-modal btn btn-info' onClick={ hideModalWindow }>Нет</button>
          <Link to='/response-page'><button className='btn-in-modal btn btn-info'>Да</button></Link>
        </div>
      </div>
    )
  }
}
