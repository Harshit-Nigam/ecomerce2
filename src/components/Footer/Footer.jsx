import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet et, earum modi eos vel nihil fugiat temporibus eligendi in, quasi quidem accusamus esse quisquam voluptatum! Incidunt quaerat accusamus sunt!
                </div>
            </div>
            <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow />
                <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quasi?
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt />
                <div className="text">
                    1234567890
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope />
                <div className="text">
                 lelo2GMAIL.COM
                </div>
            </div>

            </div>
            <div className="col">
            <div className="title">Categories</div>
            <span className="text">menu item1</span>
            <span className="text">menu item2</span>
            <span className="text">menu item3</span>
            <span className="text">menu item4</span>
            <span className="text">menu item5</span>
            <span className="text">menu item6</span>
            </div>
            <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy</span>
            <span className="text">returns</span>
            <span className="text">T&C</span>
            <span className="text">contact us</span>
            </div>
        </div>
        <div className="bootom-bar">
            <div className="bootom-bar-content">
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.</div>
            </div>
            <img src={Payment} alt="" />
        </div>
    </footer>;
};

export default Footer;
