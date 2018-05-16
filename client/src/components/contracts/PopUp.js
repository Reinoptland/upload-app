import React, {PureComponent} from 'react'

export default class Popup extends PureComponent {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{"hello"}</h1>
          <button >close me</button>
          </div>
        </div>
      );
    }
  }