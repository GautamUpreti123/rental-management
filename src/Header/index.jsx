import * as React from 'react';
import './header.css'
import Dropdown from './Dropdown/index'
import history from '../history'

const Header = (props) => {
    return (
        <div className="header">
            <span onClick={() => history.push("home")} style={{ cursor: "pointer" }} className="title-uppr">Rental Management System</span>
            <div className="dropdown-header">
                <span style={{ paddingRight: "45px", cursor: "pointer" }}>Select Location</span>
                <div className="dropdown-content">
                    <Dropdown selectedBranch={props.selectedBranch} menu={props.dropDownMenu} />
                </div>
            </div>
        </div>
    )
}

export default Header;