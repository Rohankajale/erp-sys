import {  withRouter } from 'react-router-dom'

import React from 'react';

const FacultyFeedbackLink = () => {
    return <a href="http://127.0.0.1:5978/login" style={{display: 'grid',borderStyle: 'solid' , position: 'relative', bottom: '10px',left: '10px', top: '100px',borderWidth: '5px',color: 'teal', fontFamily: 'monospace',fontSize: '70px', margin: '15px 10px 1500px 25px', textAlign: 'center'}}>Feedback:For assessing students feedback</a>
}

export default withRouter(FacultyFeedbackLink)
