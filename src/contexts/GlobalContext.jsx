import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    let usuarioLogado = 'Gill Bates'


    return (
        <GlobalContext.Provider value={{ usuarioLogado,isVisible, setIsVisible }}>
            {children}
        </GlobalContext.Provider>
    )
}
