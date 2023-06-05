import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface iClientCardProps {
    myKey: string,
    clientName: string,
    contacts: iClientContact[]
}

interface iClientContact {
    id: string,
    email: string,
    phone: string
}

export const ClientCard = ({clientName, contacts, myKey}: iClientCardProps) => {
    const [showContacts, setShowContacts] = useState<boolean>(false)

    const handleChevronClick = () => {
        setShowContacts(!showContacts)
    }

    return (
        <>
            <div key={myKey} className="w-11/12 max-w-3xl mx-auto mt-7 px-5 py-3 flex justify-between rounded-lg shadow-md transition-all duration-300 ease-in-out">
                <h3 className="font-sans" >{clientName}</h3>
                {
                showContacts ?
                <ChevronDoubleUpIcon className='h-5 w-5 animate-pulse' onClick={handleChevronClick}/>  :
                <ChevronDoubleDownIcon className='h-5 w-5 animate-pulse' onClick={handleChevronClick}/>
                }
            </div>
            {
                showContacts && 
                <div className="w-10/12 max-w-2xl mx-auto mt-2 py-1 flex justify-evenly rounded-lg shadow-md bg-slate-100 transition-all duration-300 ease-in-out">
                    <h3 className="font-sans w-1/2 text-center" >Email</h3>
                    <h3 className="font-sans w-1/2 text-center" >Phone</h3>
                </div> 
            }
            {
                showContacts &&
                contacts.map( contact => (
                    <div key={contact.id} className="w-10/12 max-w-2xl mx-auto mt-2 py-1 flex  rounded-lg shadow-md bg-slate-50 transition-all duration-300 ease-in-out">
                        <h3 className="font-sans w-1/2 text-center" >{contact.email}</h3>
                        <h3 className="font-sans w-1/2 text-center" >{contact.phone}</h3>
                    </div>
                ))
            }
        </>
    )
}