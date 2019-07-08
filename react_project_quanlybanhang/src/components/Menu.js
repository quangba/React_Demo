import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <div>
         
                <section className="hero">
                    <header>
                        <div className="wrapper">
                            <a><img src="img/book-library.png" className="logo" /></a>
                            <a className="hamburger"></a>
                            <nav>
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/quan-ly-sach">Quản lý</NavLink></li>
                                    <li><NavLink>Liên hệ</NavLink></li>
                                </ul>

                            </nav>
                        </div>
                    </header>
                </section>
            </div>
        );
    }
}

export default Menu;        