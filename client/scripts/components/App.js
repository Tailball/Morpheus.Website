import React from 'react';

import name from '../../styles/img/morpheus.svg';
import name2 from '../../styles/img/morpheus2.svg';
import name3 from '../../styles/img/morpheus3.svg';
import logo from '../../styles/img/logo.svg';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(this.setEffect, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setEffect() {
        const rand = Math.random() * 6;
        const n1 = document.querySelector('#name');
        const n2 = document.querySelector('#name2');
        const n3 = document.querySelector('#name3');

        switch(Math.floor(rand)) {
            case 0:
            case 1:
            case 2:
                n1.classList.remove('power');
                n2.classList.remove('power');
                n3.classList.remove('power');

                n1.classList.add('shock');
                n2.classList.add('shock');
                n3.classList.add('shock');
            break;

            case 3:
            case 4:
                n1.classList.remove('shock');
                n2.classList.remove('shock');
                n3.classList.remove('shock');

                n1.classList.add('power');
                n2.classList.add('power');
                n3.classList.add('power');
            break;

            case 5:
                n1.classList.remove('power');
                n2.classList.remove('power');
                n3.classList.remove('power');

                n1.classList.remove('shock');
                n2.classList.remove('shock');
                n3.classList.remove('shock');
            break;
        }
    }

    renderGfx() {
        return (
            <div className="wrapper">
                <img id="name" className="" src={name}></img>
                <img id="name2" className="" src={name2}></img>
                <img id="name3" className="" src={name3}></img>
                <img id="logo" src={logo}></img>

                <div className="social-icons">
                    <p>social links</p>
                    <div className="social-icons--icons">
                        <a href="https://www.facebook.com/morpheusband/" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>

                        <a href="" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>

                        <a href="https://www.youtube.com/channel/UCx0EfqB7cy9ZSTCAl3xTgkQ" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.renderGfx()
        )
    }
}

export default App;