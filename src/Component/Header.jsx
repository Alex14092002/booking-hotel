import React, { useState } from "react";

import "./Header.css";
import { Link , NavLink } from "react-router-dom";
const Header = () => {
  const [barMobie, setbarMobi] = useState(false);


  return (
    <>
      <div className="sticky-top main-header">
        <div className="container header ">
          <div className="logo">
            <img
              src="https://www.sedonavietnam.com/wp-content/uploads/2018/02/SSHCMC-Logo.jpg"
              alt=""
              width="150px"
            />
          </div>
          <div className="list-category">
            <ul>
              <li>
               
                <NavLink  activeClassName="active"   to="/">TRANG CHỦ</NavLink>
              </li>
              <li>
                <NavLink to="/uudai"> CÁC ƯU ĐÃI</NavLink>
              </li>
              <li>
                <NavLink to="/phong1nguoi">PHÒNG NGỦ 1 NGƯỜI</NavLink>
              </li>
              <li>
                <NavLink to="/phong2nguoi">PHÒNG NGỦ 2 NGƯỜI</NavLink>
              </li>
              <li>
                <NavLink to='/homestay'>HOME STAY</NavLink>
              </li>
              <li>
                <NavLink to="/tienich">TIỆN ÍCH</NavLink>
              </li>
              <li>
                <NavLink to="/lienhe">LIÊN HỆ VỚI CHÚNG TÔI</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn-datphong">
            <Link to="">ĐẬT PHÒNG</Link>
          </div>
          <div className="hambur-menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>


        <div className="sidebarMobi">
         
           <ul>
            <li className="logo-mobile">
              <img src="https://www.sedonavietnam.com/wp-content/uploads/2018/02/SSHCMC-Logo.jpg" alt=""  width='75%'/>
            </li>
              <li className="active">
                {" "}
                <Link to="">TRANG CHỦ</Link>{" "}
              </li>
              <li>
                <Link to=""> CÁC ƯU ĐÃI</Link>
              </li>
              <li>
                <Link to="">PHÒNG NGỦ 1 NGƯỜI</Link>{" "}
              </li>
              <li>
                <Link to="">PHÒNG NGỦ 2 NGƯỜI</Link>
              </li>
              <li>
                <Link>HOME STAY</Link>
              </li>
              <li>
                <Link to="">TIỆN ÍCH</Link>
              </li>
              <li>
                <Link to="">LIÊN HỆ VỚI CHÚNG TÔI</Link>
              </li>
            </ul>
           
        </div>
      </div>
    </>
  );
};

export default Header;
