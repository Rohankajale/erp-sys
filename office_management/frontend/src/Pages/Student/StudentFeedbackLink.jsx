import {  withRouter } from 'react-router-dom'

import React from 'react';

const StudentFeedbackLink = () => {
    return <a href="http://127.0.0.1:5978" style={{color: 'teal', fontSize: '70px', margin: '15px 10px 1500px 25px'}}>Feedback Form: For Submitting Feedback</a>
}

export default withRouter(StudentFeedbackLink)
