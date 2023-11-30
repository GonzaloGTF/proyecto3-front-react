//employees by rol
export function searchEmploys(setEmployees, rol) {
    fetch(`http://localhost:3000/users/${rol}`)
        .then(res => res.json())
        .then(res => {
            setEmployees(res)
        })
        .catch(e => console.log(e))
}

