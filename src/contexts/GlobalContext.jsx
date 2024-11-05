import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    let usuarioLogado = 'Joabe'


    return (
        <GlobalContext.Provider value={{ usuarioLogado,isVisible, setIsVisible }}>
            {children}
        </GlobalContext.Provider>
    )
}
