import React, { useState } from "react"
import axios from "axios"

const UserContext = React.createContext()
const UserAxios = axios.create()

UserAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        sightings: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [comments, setComments] = useState([])

//~~~~~~~~~ AUTH ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
          .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
          })
          .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
          .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserSightings()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
          })
          .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            sightings: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

//~~~~~~~~~ SIGHTINGS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    function getAllSightings() {
        UserAxios.get("/api/sighting")
          .then(res => setUserState(prevUserState => ({...prevUserState, sightings: res.data})))
          .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserSightings() {
        UserAxios.get("/api/sighting/user")
          .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                sightings: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function addSighting(newSighting) {
        UserAxios.post("/api/sighting", newSighting)
          .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                sightings: [...prevUserState.sightings, res.data]
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteSighting(sightingId) {
        UserAxios.delete(`/api/sighting/${sightingId}`)
          .then(res => {
            setUserState(prevUserState => {
                const newSightings = prevUserState.sightings.filter(sighting => sighting._id !== sightingId)
                return ({
                    ...prevUserState,
                    sightings: newSightings
                })
            })
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function editSighting( sightingId, updates) {
        UserAxios.put(`/api/sighting/${sightingId}`, updates)
          .then(res => {
            setUserState(prevUserState => {
                const updatedSightings = prevUserState.sightings.map(sighting => sighting._id !== sightingId ? sighting : res.data)
                return ({
                    ...prevUserState,
                    sightings: updatedSightings
                })
            })
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

//~~~~~~~~~ COMMENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    function getAllComments() {
        UserAxios.get("/api/comment")
          .then(res => setComments(res.data))
          .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(sightingId, newComment) {
        UserAxios.post(`/api/comment/${sightingId}`, newComment)
          .then(res => {
            setComments(prevComments => ([
                ...prevComments,
                res.data
            ]))
          })
          .catch(err => console.log(err.response.data.errMgs))
    }

//~~~~~~~~~ VOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    function upVoteSighting(sightingId) {
        UserAxios.put(`/api/sighting/upVote/${sightingId}`)
          .then(res => {
            setUserState(prevUserState => (
                {
                    ...prevUserState,
                    sightings: prevUserState.sightings.map(sighting => sightingId !== sighting._id ? sighting : res.data)
                }
            ))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

    function downVoteSighting(sightingId) {
        UserAxios.put(`/api/sighting/downVote/${sightingId}`)
          .then(res => {
            setUserState(prevUserState => (
                {
                    ...prevUserState,
                    sightings: prevUserState.sightings.map(sighting => sightingId !== sighting._id ? sighting : res.data)
                }
            ))
          })
          .catch(err => console.log(err.response.data.errMsg))
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    return (
        <UserContext.Provider
            value={{
                ...userState,
                comments,
                signup,
                login,
                logout,
                resetAuthErr,
                getAllSightings,
                getUserSightings,
                addSighting,
                deleteSighting,
                editSighting,
                getAllComments,
                addComment,
                upVoteSighting,
                downVoteSighting
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }