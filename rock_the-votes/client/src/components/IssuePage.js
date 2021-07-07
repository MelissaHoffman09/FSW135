  
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IssuesList from './IssuesList'

export default function IssuesPage(props) {
    const { userAxios } = props
    const [issues, setIssues] = useState([])

    useEffect(() => {
        axios.get("/publicIssues")
            .then(res => {
                setIssues(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }, [])

    return (
        <div className="container">
            <h1>Issues</h1>
            <p>All registered members can vote, comment or create a post</p>
            <IssuesList 
                issues={issues} 
                userAxios={userAxios} 
            />
        </div>
    )
}