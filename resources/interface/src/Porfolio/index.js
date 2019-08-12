import React, {Component} from "react";
import {LandingView, AboutView, SkillsView, ProjectsView, ContactView} from './fragments';
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faEnvelope,
    faPhone,
    faAd,
    faHome,
    faWrench,
    faIdCard,
    faCogs,
    faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import NavBar from "./fragments/navbar";
import "./index.css";


library.add(
    faEnvelope, faPhone,
    faLinkedin, faLinkedinIn,
    faAd, faHome,
    faWrench, faIdCard,
    faCogs, faAddressBook
);

const rootStyle = {
    background: 'linear-gradient(135deg, rgb(1, 2, 33), rgb(12, 15, 100)) fixed'
};

export default class PortFolio extends  Component{
    constructor(props) {
        super(props);
        const refs = {
            'landingSection': React.createRef(),
            'aboutSection': React.createRef(),
            'skillsSection': React.createRef(),
            'projectsSection': React.createRef(),
            'contactSection': React.createRef()
        };
        this.state = {
            basicInfo: {},
            skills: [],
            projects: [],
            contacts: [],
            refs: refs,
            loading: true
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_HOST_URL}api/`)
            .then(data=>data.json())
            .then(data =>{
                setTimeout(()=>this.setState({
                    skills: data['skills'],
                    projects: data['projects'],
                    contacts: data['contacts'],
                    basicInfo: data['basicInfo'],
                    loading: false
                }), 500)
            })
    }
    render() {
        const {skills, projects, contacts, basicInfo, refs, loading} = this.state;
        const {landingSection, aboutSection, skillsSection, projectsSection, contactSection} = refs;
        if (loading){
            return (
                <div style={rootStyle} className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
                    <div className="spinner">
                        <div className="dot1"/>
                        <div className="dot2"/>
                    </div>
                </div>
            )
        }
        return (
            <div style={rootStyle} className='text-white'>
                <NavBar refs={refs}/>
                <div>
                    <div>
                        <LandingView reference={landingSection} basicInfo={basicInfo}/>
                        <AboutView reference={aboutSection} about={basicInfo}/>
                        <SkillsView reference={skillsSection} skills={skills}/>
                        <ProjectsView reference={projectsSection} projects={projects}/>
                        <ContactView reference={contactSection} contacts={contacts}/>
                    </div>
                </div>
            </div>
        )
    }
}