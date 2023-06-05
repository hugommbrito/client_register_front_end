import { RegisterData } from "../pages/register/validator"
import { UseFormRegister } from 'react-hook-form'

interface iTextInputProps{
    label: string,
    placeholder?: string,
    required?: boolean | false,
    registerName: 'name' | 'email' | 'phone',
    register: UseFormRegister<RegisterData>,
    error: boolean,
    helperText: string | undefined
}

export const TextInput = ({ label, placeholder, required, registerName, register, error, helperText }: iTextInputProps) => {
    return (
        <>
            <label htmlFor={label} className="text-gray-600" >{label}</label>
            {
                error &&
                <p className="text-xs text-red-700 inline-block ml-1" >{helperText}</p>
            }
            <input 
                type="text"
                id={label}
                placeholder={placeholder}
                required={required}
                className="w-full h-8  mb-3 p-4 border border-gray-400 rounded-lg text-gray-600 focus:shadow-md focus:outline-none"
                {...register(`${registerName}`)}
            />
        </>
    )
}