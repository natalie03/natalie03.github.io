import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


export default class Work extends React.Component {
    constructor(props) {
        super(props);

        this.selectAccordionItem = this.selectAccordionItem.bind(this);
    }
    selectAccordionItem(index) {
        this.props.selectProject(index);
    }
    render() {
        let { projects, selectProject } = this.props;
        return (
            <Accordion onChange={ this.selectAccordionItem }>
            { projects.map(function(project, idx) {
                   return ( 
                    <AccordionItem key={idx} expanded={ idx == 0 ? true : false } >
                        <AccordionItemTitle>
                            <h3>{ project.name }</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>{ project.role }</p>
                            <p>Tech: { project.tech }</p>
                            <a href={ project.url }>See it</a>
                        </AccordionItemBody>
                    </AccordionItem> 
                    )               
                })
            }

            </Accordion>
        );
    }
}
