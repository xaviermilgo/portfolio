import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class ContactView extends React.Component{
    render() {
        const {contacts} = this.props;
        return (
            <div ref={this.props.reference}>
                <div className="pb-3 pt-3 text-center" style={{backgroundColor: '#00000010'}}>
                    <div className='row m-0'>
                        {contacts.map(
                            contact => (
                                <div className="col point" key={contact.url} style={{minWidth: '150px'}}>
                                    <a href={contact.url} className='text-white text-decoration-none fa-lg'>
                                        <FontAwesomeIcon icon={contact.icon}/>
                                    </a>
                                    <div className="font-weight-light small">
                                        <div>{contact.text}</div>
                                             {contact.type}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}