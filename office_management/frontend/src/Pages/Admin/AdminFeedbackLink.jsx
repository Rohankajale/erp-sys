import {  withRouter } from 'react-router-dom'

import React from 'react';

const AdminFeedbackLink = () => {
    return <a href="http://127.0.0.1:5978/admin?" style={{display: 'block', height: '100vh', width: '100vw', backgroundColor: 'black',borderStyle: 'solid', bottom: '10px',left: '10px', top: '100px',borderWidth: '5px',color: 'teal', fontFamily: 'monospace',fontSize: '70px', textAlign: 'center'}}>Feedback: For assessing students feedback</a>
}
//xhr - promises asunc problem
export default withRouter(AdminFeedbackLink)