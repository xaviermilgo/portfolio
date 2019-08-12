import React from "react";
import resolveAsset from "../assets";

class Project extends React.Component{
    render() {
        const {project} = this.props;
        const imageBackground = {
            minHeight: '160px',
            height: '50%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };
        const imageBackgroundLarge = {
            ...imageBackground,
            backgroundImage: `url(${resolveAsset(project['image'])})`
        };
        const imageBackgroundPhone = {
            ...imageBackground,
            backgroundImage: `url(${resolveAsset(project['image_phone'])})`
        };
        return (
            <div className="p-3 m-3 col-12 col-sm-5 col-md-4 col-lg-3 d-flex flex-column shadow rounded" style={{backgroundColor: '#041232'}}>
                <div className='position-relative w-100 h-100'>
                    <div>
                        <div style={imageBackgroundLarge} className="w-100 d-none d-md-block"/>
                        <div style={imageBackgroundPhone} className="w-100 d-md-none"/>
                        <div className="p-2 projdesc">
                            <h5 className="card-title"><b>{project.title}</b></h5>
                            <p className="card-text">{project.description}</p>
                            <div className="p-0 m-0 justify-content-around d-flex">
                                {project.skills.map(
                                    skl => (
                                        <img src={resolveAsset(skl.img)} key={`${project.title}-${skl.name}`} alt={skl.name} title={skl.name} width={25}/>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute w-100' style={{bottom: 0}}>
                        <button className="btn btn-outline-warning rounded-0">
                            Preview
                        </button>
                    </div>
                    <div className='invisible'>
                        <button className="btn btn-outline-warning rounded-0">
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default class ProjectsView extends React.Component{
    render() {
        const {projects} = this.props;
        return (
            <div ref={this.props.reference} className='text-center p-4'>
                <h5>Projects</h5>
                <div className='p-4 d-flex flex-wrap justify-content-center'>
                    {projects.map((project, key)=><Project key={key} project={project}/>)}
                </div>
            </div>
        );
    }
}