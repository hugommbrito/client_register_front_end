import { useForm } from 'react-hook-form'
import { Header } from '../../components/Header'
import { TextInput } from '../../components/TextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterData, formSchema } from './validator'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<RegisterData>({
        resolver: zodResolver(formSchema)
    })

    const submitFunction = async (data: RegisterData) => {
        try{
            const response = await api.post('contact', data)
            if(response.status == 201){
                toast.success(response.data.message)
            }

        } catch (err: any) {
            console.error(err)
            if(err.response.status == 409){
                toast.error(err.response.data.message)
            } else {
                toast.error('Internal Server Error. Try again in a later.')
            }
        }
    } 

    return (
        <>
            <Header title='REGISTRO DE CLIENTES E CONTATOS' buttonAdress='/consult' buttonText='consulta' />
            <form onSubmit={handleSubmit(submitFunction)} className='w-11/12 max-w-3xl mx-auto mt-10' >
                <p className='mb-10 text-center font-sans text-lg font-extralight text-gray-600' >Preencha o formulário abaixo para cadastrar um novo cliente ou cadastrar um novo contato a um cliente pré-existente.</p>
                <TextInput label='Nome' placeholder='Seu nome completo' required={true} registerName='name' register={register} error={errors.name ? true : false} helperText={errors.name?.message} />
                <TextInput label='Email' placeholder='seumelhoremail@mail.com' required={true} registerName='email' register={register} error={errors.email ? true : false} helperText={errors.email?.message}/>
                <TextInput label='Telefone' placeholder='Apenas números'required={true} registerName='phone' register={register}error={errors.phone ? true : false} helperText={errors.phone?.message}/>
                <button 
                    type='submit'
                    className='w-60 max-w-full h-7 block mx-auto mt-3 border-gray-500 border rounded-lg ring-1 ring-gray-300
                               hover:ring-4 hover:ring-gray-200'
                >
                    CADASTRAR
                </button>
            </form>
        </>
    )
}