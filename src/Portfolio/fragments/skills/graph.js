import Tree from 'react-d3-tree';
import React, {useRef} from 'react';

function Label(props) {
    const {nodeData: {img, name, children_type, _children, _collapsed, collapsible = true} = {}} = props;
    const style = {
        height: 90,
        backgroundColor: '#020A32'
    };
    return (
        <div style={style}
             className='d-flex flex-column justify-content-center text-white text-center shadow-sm rounded'>
            <div className='flex-grow-1 align-items-center d-flex justify-content-center p-1'>
                <div>
                    {img ? (
                        <div>
                            <img alt='' height={32} width={32} src={img}/>
                        </div>
                    ) : null}
                    {name}
                </div>
            </div>
            {_children && collapsible &&
            <div className='border-dark border-top w-100'>
                {_collapsed ? (
                    <span style={{fontSize: '14px'}}>{children_type} <span
                        className='fa fa-caret-square-o-down'/></span>
                ) : (
                    <span style={{fontSize: '14px'}}>Hide <span className='fa fa-caret-square-o-up'/></span>
                )}
            </div>
            }
        </div>
    )
}

function SkillsGraph(props) {
    const {data = {name: 'Loading'}} = props;
    const tree = useRef(null);

    const recenterTree = () => {
        const svgElement = tree.current.children[0].children[0];
        const {x, y, width, height} = svgElement.children[0].getBBox();
        const viewBox = {minX: x, minY: y, width, height};

        const {width: boundingWidth} = svgElement.getBoundingClientRect();
        // Don't break the Aspect ratio
        if (boundingWidth > width) {
            viewBox.minX = ((width - boundingWidth) / 2) + viewBox.minX
            viewBox.width = boundingWidth
        }

        const newProperties = {
            viewBox: `${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`,
        };
        for (const property in newProperties) {
            svgElement.setAttribute(property, newProperties[property])
        }
    }

    React.useEffect(() => {
        recenterTree();
        const debouncedRecenter = (() => {
            let timer;
            return () => {
                clearTimeout(timer);
                timer = setTimeout(recenterTree, 150)
            }
        })()
        window.addEventListener('resize', debouncedRecenter);
        return () => {
            window.removeEventListener('resize', debouncedRecenter)
        }
    }, [])

    return (
        <div className='m-4' ref={tree} style={{transition: 'height 300ms'}}>
            <Tree
                className='m-4'
                onUpdate={({node}) => node ? recenterTree() : null}
                zoomable={false}
                transitionDuration={0}
                shouldCollapseNeighborNodes={true}
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
                    class: "",
                    shapeProps: {
                        stroke: "#fff0",
                        fill: "#fff0",
                    }
                }}
            />
        </div>
    );
}

export default SkillsGraph;
