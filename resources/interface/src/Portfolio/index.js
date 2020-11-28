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
import portfolioInfo from "../api.js";

library.add(
    faEnvelope, faPhone,
    faLinkedin, faLinkedinIn,
    faAd, faHome,
    faWrench, faIdCard,
    faCogs, faAddressBook
);

const rootStyle = {
    background: 'linear-gradient(135deg, rgb(1, 2, 33), rgb(12, 15, 100))'
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
        }
    }

    render() {
        const {skills, projects, contacts, basicInfo} = portfolioInfo;
        const {landingSection, aboutSection, skillsSection, projectsSection, contactSection} = this.state.refs;

        return (
            <div style={rootStyle} className='text-white'>
                <NavBar refs={this.state.refs}/>
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
