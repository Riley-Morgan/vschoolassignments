import React, { useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const UserAxios = axios.create()

UserAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        issues: [],
        errMsg: "",
        
    }

    const [userState, setUserState] = useState(initState)
    const [comments, setComments] = useState([])


    function signup(credentials) {
        axios.post('/auth/signup', credentials)
          .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
          })
          .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
          .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
          })
          .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getAllIssues() {
        UserAxios.get('/api/issue')
          .then(res => setUserState(prevState => ({...prevState, issues: res.data})))
          .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        UserAxios.get('/api/issue/user')
          .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        UserAxios.post('/api/issue', newIssue)
          .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId) {
        UserAxios.delete(`api/issue/${issueId}`)
          .then(res => {
            setUserState(prevState => {
                const newIssues = prevState.issues.filter(issue => issue._id !== issueId)
                return ({
                    ...prevState,
                    issues: newIssues
                })
            })})
          .catch(err => console.log(err.response.data.errMsg))
    }

    function editIssue( issueId, updates) {
        UserAxios.put(`/api/issue/${issueId}`, updates)
          .then(res => {  
            setUserState(prevState => {
                const updatedIssues = prevState.issues.map(issue => issue._id !== issueId ? issue : res.data)
                return ({
                    ...prevState,
                    issues: updatedIssues
                })
            })
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllComments() {
        UserAxios.get('/api/comment')
          .then(res => setComments(res.data))
          .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(issueId, newComment) {
        UserAxios.post(`/api/comment/${issueId}`, newComment)
          .then(res => {
            setComments(prevComments => ([
                ...prevComments,
                res.data
            ]))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function upVoteIssue(issueId) {
        UserAxios.put(`/api/vote/upVote/${issueId}`)
            .then(res => {
                setUserState(prevUserState => (
                    { ...prevUserState,
                         issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data)
                    }
                ))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function downVoteIssue(issueId) {
        UserAxios.put(`/api/vote/downVote/${issueId}`)
        .then(res => {
            setUserState(prevUserState => (
                { ...prevUserState,
                    issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data)
                }
                ))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                getAllComments,
                getUserIssues,
                getAllIssues,
                comments,
                addComment,
                deleteIssue,
                editIssue,
                upVoteIssue,
                downVoteIssue
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }