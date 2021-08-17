import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    icon: 'home',
                    text: 'Home',
                    ref: props.refs['landingSection']
                },
                {
                    icon: 'id-card',
                    text: 'About',
                    ref: props.refs['aboutSection']
                },
                {
                    icon: 'wrench',
                    text: 'Skills',
                    ref: props.refs['skillsSection']
                },
                {
                    icon: 'cogs',
                    text: 'Projects',
                    ref: props.refs['projectsSection']
                },
                {
                    icon: 'address-book',
                    text: 'Contact',
                    ref: props.refs['contactSection']
                }
            ]
        }
    }
    static scrollTo(ref){
        window.scrollTo(0, ref.current.offsetTop - 100)
    }
    render() {
        const style = {
            backgroundColor: '#0008'
        };
        return(
            <div>
                <ul className='navbar nav fixed-top nav-justified' style={style}>
                    {this.state.sections.map(
                        ({ref, icon, text}, index)=>(
                            <li className="nav-item" key={index}>
                                <div className="pointer" onClick={()=> NavBar.scrollTo(ref)}>
                                    <FontAwesomeIcon icon={icon} className='h6 m-0' style={{fontSize: '1.4em'}}/>
                                    <small className='d-none d-sm-block'>{text}</small>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}