import React from 'react';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = styled.nav`
    position:fixed;
    top:0;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: auto;
    z-index:2;
    background: ${props => props.theme.navBackground};
`;
class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.props.theme.pageBackground);
    }

    render(){
        return (
        <div className="navbar">
            <Nav>
                <ul>
                    <li>
                        <Link to = "/">Clear</Link>
                    </li>
                    <li>
                        <Link to = "/DarkModeToggle">1. DarkModeToggle</Link>
                    </li>
                </ul>
            </Nav>
        </div>
        )
    }
}

export default Navbar;