import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="blog-footer fixed-bottom">

            <div id="links">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <small> by Node Quantum v0.7</small>
                        </div>

                        <div className="col-sm-8 text-center offset">
                            <ul className="list-inline">
                                <li><NavLink to={'/'}>Inicio</NavLink></li>
                                <li><a href="https://www.observaciudadania.org/" target="_blank">Sobre Nosotros</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 text-right offset">
                            <ul className="list-inline">
                                <li><a href="https://www.facebook.com/observaciudadania" target="_blank"><i
                                  className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/observaciudadania" target="_blank"><i
                                  className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/observaciudadania/" target="_blank"><i
                                  className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCRk_2lqkIE8WENW1hRLzZNA"
                                       target="_blank"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;