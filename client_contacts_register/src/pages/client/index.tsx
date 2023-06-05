import { toast } from "react-toastify";
import { ClientCard } from "../../components/ClientCard"
import { api } from "../../services/api";
import { useEffect, useState } from 'react'
import { Header } from "../../components/Header";

interface iClient{
    id: string
    name: string,
    contacts: iContact[]
}

interface iContact {
    id: string,
    email: string,
    phone: string
}

export const Client = () => {
    const [clientList, setClientList] = useState([] as iClient[]);
    
    useEffect(() => {
        const getClients = async () => {
            try{
                const response = await api.get('client')

                if(response.data.length < 1){
                    toast.error('Nenhum cliente cadastrado')
                } else {
                    setClientList(response.data)
                }
            } catch (err){
                console.error(err)
                toast.error('Internal Server Error. Try again in a later.')
            }

        }
        getClients()
    
        return
    }, [])
    

    return (
        <>
            <Header title="LISTA DE CLIENTES" buttonAdress="/register" buttonText="register" />
            {
                clientList.map( (client: iClient) => (
                    <ClientCard clientName={client.name} contacts={client.contacts} myKey={client.id} key={client.id}/>
                ))
            }

        </>
    )
}