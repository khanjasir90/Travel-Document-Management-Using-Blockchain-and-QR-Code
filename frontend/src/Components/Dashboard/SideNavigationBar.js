import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { Fabars } from "react-icons/fa";

const SideNavigationBar = () => {
    const [customWidth, setCustomWidth] = useState(false);

    const closeNav = () => {
        setCustomWidth(false);
    }

    const openNav = () => {
        setCustomWidth(true)
    }
    return (
        <>
            <div className='side__nav'>
                <Container>
                    <p className='side_navigation_bar__link'>Hello NAME</p>
                    <p className='side_navigation_bar__link'>Account ID</p>
                    <p className='side_navigation_bar__link'>Logout</p>
                </Container>
            </div>
            {customWidth && <div id="mySidenav" style={{ width: "200px", cursor:"pointer", padding:"10px"}} className="side__nav__small">
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <Container>
                    <p className='side_navigation_bar__link'>Hello NAME</p>
                    <p className='side_navigation_bar__link'>Account ID</p>
                    <p className='side_navigation_bar__link'>Logout</p>
                </Container>
            </div>}
            {!customWidth && <div className='side__nav__small'>
                <button onClick={openNav}>
                    <i class='fa fa-bars' style={{padding:"20px"}}></i>
                </button>
            </div> }
        </>
    )
}

export default SideNavigationBar