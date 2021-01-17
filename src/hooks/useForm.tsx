import { useState } from "react"


const useForm = () => {
    const [values, setValues] = useState<{[key: string]: any}>({})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log('test')
        const name = event.target.name;
        const value = event.target.value;
        setValues(prevValues => { return {...prevValues, [name]: value}})
    }

    return {values, handleChange}
    
}

export default useForm;