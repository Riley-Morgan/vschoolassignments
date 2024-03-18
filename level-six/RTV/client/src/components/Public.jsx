import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Public() {

    const { getAllIssues, issues } = useContext(UserContext)

    useEffect(() => {
        getAllIssues()
    }, [])



    return (
        <div className="public">
            <div className='issue-list'>
                {issues.map(issue => <Issue {...issue} key={issue._id}/>)}
            </div>
        </div>
    )
}