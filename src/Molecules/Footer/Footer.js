import React from 'react'
import { FooterWrapper } from './Footer.styled'

const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <div className='footer__container'>
                    <div>
                        <h3>Get to know us</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Join our Team
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Help</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Frequently asked questions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Customer Care
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className='footer__bottom'>
                    <li></li>
                    <li>
                        <a href="#">
                            Terms of use
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Privacy and Security
                        </a>
                    </li>
                </ul>
            </div>
        </FooterWrapper>
    )
}

export default Footer