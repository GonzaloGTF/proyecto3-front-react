//employees by rol
export function searchEmploys(setEmployees, rol) {
    fetch(`p01--proyecto3-back-nest--k4bvp5frjj2w.code.run/users/${rol}`)
        .then(res => res.json())
        .then(res => {
            setEmployees(res)
        })
        .catch(e => console.log(e))
}

