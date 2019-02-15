import React, { Component } from 'react';

import CertificationIntro from './CertificationIntro/CertificationIntro';
import DemoVideo from './DemoVideos/DemoVideo';

class CertificationCourse extends Component {
    
    render() {
        return(<div name="CertificationCourse">
                <CertificationIntro />
                <DemoVideo />
            </div>
        );
    }
}

export default CertificationCourse;