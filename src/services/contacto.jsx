import { useCallback, useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"

//put
export function fetchComent({ form }) {
    const { setError } = useContext(UserContext)
    const [send, setSend] = useState(null)


    const handleComent = useCallback((e) => {
        e.preventDefault()
        const { email, comentario } = form

        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, comentario })
        }

        fetch("http://localhost:3000/coments/new", data)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    setError(res.message)
                }
                else {
                    setError(null)
                    setSend(res.message)
                }
            })
            .catch(e => console.log(e))
    }, [form])

    return { handleComent, send, setSend }
}


//get
export function searchComments(setComments) {
    fetch(`http://localhost:3000/coments`)
        .then(res => res.json())
        .then(res => {
            setComments(res)
        })
        .catch(e => console.log(e))
}



//delete
export function deleteCommentFetch(id) {
    let data = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    }

    fetch(`http://localhost:3000/coments`, data)
        .then(res => res.text())
        .then(res => {

        })
        .catch(e => console.log(e))
}