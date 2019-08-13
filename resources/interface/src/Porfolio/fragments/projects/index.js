import React from "react";
import resolveAsset from "../../assets";
import './modal.css';

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
        console.log(project);
        return (
            <div className="p-3 m-3 col-12 col-sm-5 col-md-4 col-lg-3 d-flex flex-column shadow rounded" style={{backgroundColor: '#041232'}}>
                <div className='position-relative w-100 h-100 d-flex flex-column'>
                    <div className='flex-grow-1'>
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
                    <div className='w-100 d-flex justify-content-around mt-4 border-secondary border-top pt-3'>
                        <a href={project['repo_link']} target='_blank' rel='noreferrer noopener'>
                            <button className='btn btn-outline-primary'>
                                View Code
                            </button>
                        </a>
                        {project['live']?(
                            <a href={project['link']} target='_blank' rel='noreferrer noopener'>
                                <button className='btn btn-outline-success'>
                                    View Site
                                </button>
                            </a>
                        ):null}
                    </div>
                </div>
            </div>
        )
    }
}

export default class ProjectsView extends React.Component{
    state = {
        modalData: undefined
    };
    showModal(modalData){
        this.setState({modalData})
    }
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