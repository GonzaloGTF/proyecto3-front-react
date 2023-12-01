import UserContext from "../UserContext"
import { useCallback, useContext, useState } from "react"
import { useEmploy } from "../hooks/useEmploy"


export function employPut({ employForm, profesion }) {
    const { user, setUser, setError } = useContext(UserContext)


    const handleEmploy = useCallback((e) => {
        e.preventDefault()

        const { servicios, localidad, descripcion } = employForm
        const id = user._id

        if (servicios !== "") {
            profesion.push(servicios)
        }

        let data = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ profesion, localidad, descripcion, id })
        }

        fetch("http://localhost:3000/users/employ", data)
            .then(res => res.json())
            .then(res => {
                if (res._id) {
                    setUser(res)
                    setError(null)
                }
                else {
                    setError(res.message)
                }

            })
            .catch(e => console.log(e))



    }, [employForm, user, profesion])

    return { handleEmploy }
}



//Acept-Decline employ
export function processPending(emp, boolean) {

    const id = emp._id
    let data = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ id, boolean })
    }

    fetch("http://localhost:3000/users/select", data)
        .then(res => res.text())
        .then(res => {
        })
        .catch(e => console.log(e))

}