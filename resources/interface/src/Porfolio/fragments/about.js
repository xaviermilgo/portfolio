import React from "react";
import ReactMarkdown from "react-markdown";

export default class AboutView extends React.Component{
    render() {
        const { aboutMeHead, aboutMeBody, extraMd } = this.props.about;
        return (
            <div ref={this.props.reference} className='text-center p-4'>
                <h5>About me</h5>
                <div>
                    <b className='mt-3'>{aboutMeHead}</b>
                    <p className='text-white-50 font-weight-light container mt-2'>
                        {aboutMeBody}
                    </p>
                </div>
                <div className="my-3">
                    <ReactMarkdown source={extraMd} escapeHtml={false}/>
                </div>
            </div>
        );
    }
}