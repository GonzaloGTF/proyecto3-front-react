import { useCallback, useEffect, useState } from "react"
import { searchEmploys } from "../services/busqueda"
import { processPending } from "../services/employ"

export function useEmploy() {
    const [employForm, setEmployForm] = useState({ servicios: "", localidad: "", descripcion: "" })
    const [profesion, setProfesion] = useState([])
    const [employs, setEmploys] = useState(null)
    const [employPending, setEmployPending] = useState(null)
    const [filter, setFilter] = useState({ nombre: "", localidad: "" })
    const [employsFilter, setEmploysFilter] = useState([])
    const [selectEmploy, setSelectEmploy] = useState(null)



    //form add-employ
    const handleEmployForm = useCallback((e) => {
        let employTemp = { ...employForm }
        employTemp[e.target.name] = e.target.value

        setEmployForm(employTemp)
    }, [employForm])

    const handleProfChange = (prof) => {
        if (profesion.includes(prof)) {
            setProfesion(profesion.filter((item) => item !== prof));
        } else {
            setProfesion([...profesion, prof]);
        }
    };


    //find employ
    useEffect(() => {
        searchEmploys(setEmploys, "employ")
    }, []);

    //find pending
    useEffect(() => {
        searchEmploys(setEmployPending, "pending")
    }, []);


    //filters-employees
    useEffect(() => {
        let employsFilterTemp = null

        if (employs !== null) {
            employsFilterTemp = [...employs]
        }

        if (employsFilterTemp !== null) {

            let users = employsFilterTemp.filter(employ => (
                employ.nombre.includes(filter.nombre) &&
                employ.localidad.includes(filter.localidad) &&
                profesion.every(prof => employ.servicios.includes(prof))
            ))
            setEmploysFilter(users)
        }
    }, [employs, filter, profesion]);


    const handleFilter = useCallback((e) => {
        let filterTemp = { ...filter }
        filterTemp[e.target.name] = e.target.value

        setFilter(filterTemp)
    }, [filter])


    //employ select
    function selectEmployFunction(i) {
        setSelectEmploy(employsFilter[i])
    }

    //Acept-Decline select
    function process(emp, boolean) {
        processPending(emp, boolean)
        const employTemp = employPending.filter(empl => empl._id !== emp._id);
        setEmployPending(employTemp)

    }

    return {
        employForm, handleEmployForm,
        profesion, handleProfChange,
        employsFilter, handleFilter,
        selectEmploy, setSelectEmploy,
        selectEmployFunction, employPending,
        setEmployPending, process
    }
}