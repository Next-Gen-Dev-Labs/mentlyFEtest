'use client'
import React, { createContext, useContext, useState } from 'react'


const BoardContext = createContext()


export const BoardProvider = ({ children }) => {
    const [boardChanger, setBoardChanger] = useState('Dashboard')

    return (
        <BoardContext.Provider value={{ boardChanger, setBoardChanger }}>
            {children}
        </BoardContext.Provider>
    )
}


export const useGlobalBoard = () => {
    return useContext(BoardContext)
}
