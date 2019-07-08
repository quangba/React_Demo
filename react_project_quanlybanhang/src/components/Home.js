import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="listings">
                    <div className="wrapper">
                        <ul className="properties_list">
                            <li>
                                <a>
                                    <img src="img/11.jpg" className="property_img" />
                                </a>
                                <span className="price">$2500</span>
                                <div className="property_details">
                                    <h1>
                                        <a >Khi mọi điểm tựa đều mất</a>
                                    </h1>
                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/10.jpg" className="property_img" />
                                </a>
                                <span className="price">$1000</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Bí mật của những bí mật</a>
                                    </h1>
                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/9.jpg" className="property_img" />
                                </a>
                                <span className="price">$500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Thói quen của bạn trẻ thành đạt</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/8.jpg" className="property_img" />
                                </a>
                                <span className="price">$2500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Thích nghĩ để thành công</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/7.jpg" className="property_img" />
                                </a>
                                <span className="price">$1000</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Hành trình về phương đông</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/6.jpg" className="property_img" />
                                </a>
                                <span className="price">$500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Yêu thương và tự do</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/5.jpg" className="property_img" />
                                </a>
                                <span className="price">$2500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Hai số phận</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/4.jpg" className="property_img" />
                                </a>
                                <span className="price">$1000</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Khéo ăn khéo nói sẽ có được thiên hạ</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/3.jpg" className="property_img" />
                                </a>
                                <span className="price">$500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Quẳng gánh lo đi và vui sống</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/2.jpg"  className="property_img" />
                                </a>
                                <span className="price">$500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Đắt nhân tâm</a>
                                    </h1>

                                </div>
                            </li>
                            <li>
                                <a>
                                    <img src="img/1.jpg"  className="property_img" />
                                </a>
                                <span className="price">$500</span>
                                <div className="property_details">
                                    <h1>
                                        <a>Yêu thương và tự do</a>
                                    </h1>

                                </div>
                            </li>
                        </ul>
                    </div>
                </section> 

	<footer>
                    <div className="wrapper footer">
                        <ul>
                            <li className="links">
                                <ul>
                                    <li><a>About</a></li>
                                    <li><a>Support</a></li>
                                    <li><a>Terms</a></li>
                                    <li><a>Policy</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </li>

                            <li className="links">
                                <ul>
                                    <li><a>Appartements</a></li>
                                    <li><a>Houses</a></li>
                                    <li><a>Villas</a></li>
                                    <li><a>Mansions</a></li>
                                    <li><a>...</a></li>
                                </ul>
                            </li>

                            <li className="links">
                                <ul>
                                    <li><a>New York</a></li>
                                    <li><a>Los Anglos</a></li>
                                    <li><a>Miami</a></li>
                                    <li><a>Washington</a></li>
                                    <li><a>...</a></li>
                                </ul>
                            </li>

                            <li className="about">
                                <p>La Casa is real estate minimal html5 website template, designed and coded by pixelhint, tellus
						varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum</p>
                                <ul>
                                    <li><a className="facebook" target="_blank"></a></li>
                                    <li><a className="twitter" target="_blank"></a></li>
                                    <li><a className="google" target="_blank"></a></li>
                                    <li><a className="skype"></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="copyrights wrapper">
                        CodeGym © 2019
		</div>
                </footer>
            </div>
        );
    }
}

export default Home;