import React from "react";
import resolveAsset from "../assets";

export default class LandingView extends React.Component{
    render() {
        const {name, title, secondaryTitle, backgroundImage} = this.props.basicInfo;
        console.log(resolveAsset(backgroundImage));
        const dropStyle = {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${resolveAsset(backgroundImage)})`
        };
        const floatStyle = {
            opacity: 0.9,
            backgroundColor: 'rgb(2, 7, 32)'
        };
        return (
            <div ref={this.props.reference} className="m-0 d-flex align-items-center justify-content-center w-100 vh-100" style={dropStyle}>
                <div className="rounded p-4 text-center" style={floatStyle}>
                    <h1><b>{name}</b></h1>
                    <h5>{title}</h5>
                    <h5 className="border-top">{secondaryTitle}</h5>
                </div>
            </div>
        );
    }
}