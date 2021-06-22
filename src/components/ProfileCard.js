import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


const ComponentName = styled.h1`
    color:${props => props.theme.titleColor};
`;

const Card = styled.div`
    display:flex;
    color:${props=> props.theme.textColor};
    border: 4px solid;
    border-radius: 50px 25px;
    border-color:${props=> props.theme.borderColor};
    padding:1rem 3rem;
    box-shadow: 0 4px 24px rgb(5 5 5 / 12%), 0 1px 1px rgb(5 5 5 / 12%);
`;

const ProfileCard = withAxios(class ProfileCardRaw extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    state = {
        name:"",
        gender:"",
        photoLink:"",
        age:-1
    }

    componentWillMount(){
        this.props.axios('https://randomuser.me/api/').then(res=>{
            const person = res.data.results[0];

            let fullName = person["name"].first +" "+person["name"].last;
            let gender = person.gender;
            let imageSrc = person.picture.large;
            let age= person.dob.age;
            this.setState({ name:fullName, gender:gender, photoLink:imageSrc, age:age });
            console.log(this.state);
        })
    }
    render(){
        let name = JSON.stringify((this.state.name || {})).replace(/\"/g, "");
        let gender = JSON.stringify((this.state.gender || {})).replace(/\"/g, "");
        let age = JSON.stringify((this.state.age || {})).replace(/\"/g, "");
        let photosrc = (this.state.photoLink || {});
        return (
            <div id="profilecard">
                <ComponentName>ProfileCard</ComponentName>
                <Card>
                    <img src={photosrc}  alt="PFP"/>
                    <p><strong>{name}</strong><br/>Gender: {gender[0].toUpperCase()+gender.substring(1)}<br/>Age: {age}</p>


                </Card>
            </div>
        )
    }
});

export default ProfileCard;