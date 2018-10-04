import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

import ErrorBoundary from './components/ErrorBoundary';
import Work from './components/Work';
import ComputerScreen from './components/ComputerScreen';

class App extends React.Component {
    constructor() {
        super();
        this.selectProject = this.selectProject.bind(this);
        this.state = {
            selected_project: 0,
            projects: [
                {
                    name: 'Mystery Man of Maryland',
                    role: 'Front End Developer',
                    url: 'https://mysterymanofmaryland.com/',
                    tech: 'Headless WordPress, ReactJS, CSS Animation, SVG Animation',
                    img: 'mystery.png'
                },
                {
                    name: '610 Magonlia',
                    role: 'Solo Developer',
                    url: 'https://610magnolia.com/',
                    tech: 'WordPress, PHP, LESS, JavaScript',
                    img: '610.png'
                },
                {
                    name: 'Mr. Boston Drinks',
                    role: 'Front End Developer',
                    url: 'https://mrbostondrinks.com/',
                    tech: 'Angular, Laravel, LESS, JavaScript, SVG Animation',
                    img: 'boston.png'
                },
                {
                    name: 'Louisville Collegiate School',
                    role: 'Lead Front End Developer',
                    url: 'https://louisvillecollegiate.org/',
                    tech: 'WordPress, LESS, JavaScript',
                    img: 'collegiate.png'
                },
                {
                    name: 'Louisville Waterfront Park',
                    role: 'Lead Front End Developer',
                    url: 'https://louisvillewaterfront.com/',
                    tech: 'WordPress, SVG Animation, CSS Animation',
                    img: 'waterfront.png'
                },
                {
                    name: 'Am I Eligible App',
                    role: 'Lead Front End Developer',
                    url: 'http://amieligible.louisvilleky.gov/',
                    tech: 'Laravel, Vue.js, AngularJS',
                    img: 'amieligible.png'
                }
            ]
        };
    }
    selectProject(project) {
        console.log(project);
        this.setState({ selected_project: project });
    }
    render() {
        let { projects, selected_project } = this.state;
        return (
            <div>
                <ErrorBoundary>
                <div className="flex-wrap-half">
                    <Work projects={ projects } selectProject={ this.selectProject } />
                    <ComputerScreen imgSrc={ projects[selected_project].img} />
                </div>
                </ErrorBoundary>
            </div>
        );
    }
}

$(document).ready(() => {
    let app = document.getElementById('app');

    if (app) {
        render(<App />, app);
    }
    prepare_collapse();

});
function toggleAriaExpanded(elem) {
    elem.attr('aria-expanded', function (i, attr) {
        return attr == 'true' ? 'false' : 'true';
    });
}
function prepare_collapse() {
    var collapses = $('.collapse');
    if (collapses.length < 1) {
        return;
    }
    collapses.on('click', 'button', function(e) {
        var collapse = $(this).data('target');
        $(collapse).toggleClass('in');
        toggleAriaExpanded($(this));
    });
}
