import { useEffect, useState, useContext } from "react";
import{useNavigate} from "react-router-dom";
import { TbSearch } from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";


import "./Header.scss";
const Header = () => {

   const [scrolled, setScrolled] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [showSearch, setShowSearch] = useState(false);
   const handleScroll = () =>{
    const offset = window.scrollY;
    if(offset > 200){
        setScrolled(true);

    }
    else{
        setScrolled(false)
    };
   };
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

   }, []);

    return ( 
        <>
    <header className={`main-header ${scrolled ? 'sticky-headeer' : ''}`}>
        <div className="header-content">
        <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
        </ul>
        <div className="center">MYSTORE.</div>
        <div className="right">
            <TbSearch onClick={() => setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
                <CgShoppingCart />
                <span>5</span>
            </span>
        </div>
        </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
    </>);
};

export default Header;

//4bd7a9b41daec3d91bcf1d29b8db25b5b19a52bbacc65c1defe5cfcf9b1c8f9e6f8735e65080bf57c35c32b057b83d6433f1031a714e79c19dd7a9beeda135486d95f106931f7dc4a3bb9c9a18bfd9ebfde49fd494425f20e133fb5af10076d8eccf1ab1af9e9e19c30b710eb12a69c22a875a2f3f80f4520e3e80cb417d0b70
