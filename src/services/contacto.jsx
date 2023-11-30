import { useCallback, useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"

//add comentario
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



    //find Comments


    return { handleComent, send, setSend, comments }
}

export function getComments() {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        searchComments()
    }, []);

    function searchComments() {
        fetch(`http://localhost:3000/coments`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setComments(res)
            })
            .catch(e => console.log(e))
    }

    return { comments }
}