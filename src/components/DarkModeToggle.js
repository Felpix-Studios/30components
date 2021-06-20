import React from 'react';
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const ComponentName = styled.h1`
    color:${props => props.theme.titleColor};
`;

const ComponentText = styled.p`
    color:${props=> props.theme.textColor}
`;

const ToggleButton = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px; 
    text-align:center;
    padding:6px; 
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: 500ms cubic-bezier(0.26, 0.8, 0.29, 0.98);
`;

class DarkModeToggle extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    render(){
        return (
            <div id="darkmodetoggle">
                <ComponentName>DarkModeToggle</ComponentName>
                <ToggleButton onClick={(e)=>{
                    console.log(this.props.theme);
                    if(this.props.theme==="light"){
                        this.props.setTheme("dark");
                    }else{
                        this.props.setTheme("light");
                    }
                }}>
                    {this.props.theme==="light"?<HiMoon size={40}/>:<CgSun size={40}/>}
                </ToggleButton>
                <ComponentText>Currently {this.props.theme.charAt(0).toUpperCase()}{this.props.theme.slice(1)} Mode</ComponentText>
            </div>
        )
    }
}

export default DarkModeToggle;