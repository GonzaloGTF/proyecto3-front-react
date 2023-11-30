import { useCallback, useState } from "react"

export function useForm() {
    const [form, setForm] = useState("")

    const handleForm = useCallback((e) => {
        let userTemp = { ...form }
        userTemp[e.target.name] = e.target.value
        setForm(userTemp)
    }, [form])

    return { form, handleForm }
}
