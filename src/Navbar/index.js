import React, { useEffect, useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsFillDoorOpenFill } from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { NavLink } from "./NavbarElements";
import { RiContactsBook2Fill } from "react-icons/ri"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import logo from './logo.png';

import './hambar.css';
const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
  ))`
	& .MuiTooltip-tooltip {
	  background: #FF3B30;
	  font-size: 18px;
	}
  `;

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize);
	}, []);

	
	const openNav = () => {
		document.getElementById("mySidepanel").style.width = "250px";
	}
	
	const closeNav = () => {
		document.getElementById("mySidepanel").style.width = "0";
	}
return (
	<div className="App">
		<div className='flex-container-top'>



			
			<a href="/" target="_blank"> {/**Was /Pub removed though so '/' this is the landing page */}
			<img src={logo} alt="logo" style={{width: '200px', height: '35px'}} className='logo-moriarty'/>
			</a>



			<button className='icon-hamburger-menu' onClick={openNav}>
				☰
			</button> 

			<div id="mySidepanel" className="sidepanel">
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
					x
				</a>

				<a href="/hambar" class="navbar__item"><GiMagnifyingGlass /> Recon</a>
				<a href="#" class="navbar__item"><GiAnvilImpact /> Weapon</a>
				<a href="#" class="navbar__item"><TfiEmail /> Delivery</a>
				<a href="#" class="navbar__item"><BsFillDoorOpenFill /> Exploit</a>
				<a href="#" class="navbar__item"><FaDownload /> Install</a>
				<a href="#" class="navbar__item"><IoLogoGameControllerB /> Control</a>
				<a href="#" class="navbar__item"><FaLaptopCode /> Actions</a>


			</div>



            <a href="/home">
            <AiFillHome className='icon-house' id = 'home' />
            </a>


			<a href= "/contacts" target="_blank">
              <RiContactsBook2Fill className='icon-tor' id ='tor'/>
            </a>

			<>

			<a href= "https://github.com/Fiery-Warrior/mm_pythonweb" target="_blank">
				<BsGithub className='icon-circle' id ='clock'/>
			</a>


				<StyledTooltip  title="Recon">
					<NavLink to="/reconicon" activeStyle>
						<GiMagnifyingGlass className='icon' id ='recon'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Weapon">
					<NavLink to="/weapon" activeStyle>
						<GiAnvilImpact className='icon' id ='weaponization'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Delivery">
					<NavLink to="/delivery" activeStyle>
						<TfiEmail className='icon' id ='delivery'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Exploit">
					<NavLink to="/exploit" activeStyle>
						<BsFillDoorOpenFill className='icon' id ='exploitation'/>
					</NavLink>
				</StyledTooltip >


				<StyledTooltip  title="Install">
					<NavLink to="/install" activeStyle>
						<FaDownload className='icon' id ='install'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Control">
					{/* <NavLink to="/control" activeStyle> */}
					<a href="/connections/"> {/** onClick={() => window.location.reload()} */}

						<IoLogoGameControllerB className='icon' id ='command-control'/>
						  </a>

					{/* </NavLink> */}
				</StyledTooltip >

				<StyledTooltip  title="Actions">
					<NavLink to="/objectives" activeStyle>
						<FaLaptopCode className='icon' id ='actions-on-objective'/>
					</NavLink>
				</StyledTooltip >

			</>


			<BsPersonCircle
				className="profile"
				id="profile"
				style={{ display: width > 1515 ? "block" : "none" }}
			/>

		

		</div>
		
	</div>
);
};

export default Navbar;

