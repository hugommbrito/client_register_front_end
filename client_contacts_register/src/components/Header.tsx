import { useNavigate } from 'react-router-dom'

interface iHeaderProps{
    title: string,
    buttonAdress: string,
    buttonText: string
}

export const Header = ({ title, buttonAdress, buttonText }: iHeaderProps) => {
    const navigate = useNavigate()

    return (
        <header className="flex justify-center shadow-lg py-7">
            <div className="w-11/12 max-w-3xl relative">
                <h1 className="text-xl text-center font-mono font-bold text-gray-700" >{title}</h1>
                <button
                    className="w-60 max-w-full h-7 block mx-auto mt-3 border-gray-500 border rounded-full ring-1 ring-gray-300
                               hover:ring-4 hover:ring-gray-200
                               sm:absolute sm:w-20 sm:top-0 sm:right-0 sm:mt-0"
                    onClick={() => navigate(buttonAdress)}
                >
                    {buttonText}
                </button>
            </div>
        </header>
    )
}