import Tree from 'react-d3-tree';
import React, { Component } from 'react';
import resolveAsset from "../../assets";
import "./graph.css";

class Label extends React.Component{
    render() {
        const {nodeData} = this.props;
        const {img, name, children_type} = nodeData;
        const style = {
            height: 91,
            backgroundColor: '#020A32'
        };
        return (
            <div style={style} className='d-flex flex-column justify-content-center text-white text-center shadow-sm rounded'>
                <div className='flex-grow-1 align-items-center d-flex justify-content-center p-1'>
                    <div>
                        {img?(
                            <div>
                                <img alt='' height={32} width={32} src={resolveAsset(img)}/>
                            </div>
                        ):null}
                        {name}
                    </div>
                </div>
                {nodeData._children &&
                <div className='border-dark border-top w-100'>
                    {nodeData._collapsed?(
                        <span style={{fontSize: '14px'}}>{children_type} <span className='fa fa-caret-square-o-down'/></span>
                    ):(
                        <span style={{fontSize: '14px'}}>Hide <span className='fa fa-caret-square-o-up'/></span>
                    )}
                </div>
                }
            </div>
        )
    }
}

class SkillsGraph extends Component {
    static defaultProps = {
        data: {name: 'Loading'}
    };
    state = {
        height: 150,
        zoom: 1,
        translation: {
            x: 0,
            y: 40
        }
    };

    componentDidMount() {
        this.resetDims()
    }

    resetDims(){
        const greatDims = this.tree.getElementsByTagName('g')[0].getBoundingClientRect();
        const svgDims = this.tree.getElementsByTagName('svg')[0].getBoundingClientRect();
        let svgDxr = Math.round(svgDims.x);
        let greatDxr = Math.round(greatDims.x);
        let buffer = Math.round((svgDims.width - greatDims.width) / 2);
        if (buffer < 0){
            buffer = 0
        }
        if (svgDxr !== greatDxr && buffer === 0) {
            this.setState({translation: {x: this.state.translation.x + (svgDxr - greatDxr), y: 40}})
        } else {
            const w = Math.round(svgDims.width / 2);
            if (buffer !== 0 && this.state.translation.x !== w){
                this.setState({translation: {x: w, y: 40}})
            }
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const great = this.tree.getElementsByTagName('g')[0];
        let {width, height} = great.getBoundingClientRect();
        const maxWidth = document.getElementById('graph-tree-skills-container').getBoundingClientRect().width;
        let zoom = Math.round(maxWidth) / Math.round(width);
        if (zoom > 1){
            zoom = 1
        }
        height = height|0;
        if (zoom !== this.state.zoom || height !== this.state.height){
            this.setState({zoom, height}, this.resetDims);
        } else {
            this.resetDims()
        }
    }

    render() {
        const {data} = this.props;
        const {height, zoom, translation} = this.state;
        const style = {
            height,
            zoom,
            transition: 'height 500ms'
        };
        return (
            <div className='m-4'>
                <div id='graph-tree-skills-container'>
                    <div style={style} ref={rf => this.tree = rf}>
                        <Tree
                            onUpdate={({node})=>node?this.setState({}):null}
                            zoomable={false}
                            transitionDuration={0}
                            shouldCollapseNeighborNodes={true}
                            translate={translation}
                            data={data}
                            // pathFunc='elbow'
                            orientation='vertical'
                            allowForeignObjects
                            useCollapseData
                            separation={{
                                siblings: 1,
                                nonSiblings: 1
                            }}
                            nodeLabelComponent={{
                                render: <Label/>,
                                foreignObjectWrapper: {
                                    x: -58,
                                    y: -40
                                }
                            }}
                            nodeSvgShape={{
                                shape: "rect",
                                shapeProps: {
                                    stroke: "#fff0",
                                    fill: "#fff0",
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsGraph;
