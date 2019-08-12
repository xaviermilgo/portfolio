import React from "react";
import SkillsGraph from "./graph";

export default class SkillsView extends React.Component{
    render() {
        const {skills} = this.props;
        const tree = {
            name: 'Coding',
            _collapsed: false,
            children: skills.map(a=>{return {...a, _collapsed: true}})
        };
        return (
            <div ref={this.props.reference} style={{backgroundColor: '#00000010'}}>
                <h5 className='text-center'>Skills</h5>
                <SkillsGraph data={tree}/>
            </div>
        );
    }
}