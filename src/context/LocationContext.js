import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(localStorage.getItem('location') || 'Istanbul');

    useEffect(() => {
        localStorage.setItem('location', location)
    }, [location]);

    const values = {
        location,
        setLocation,
    };

    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>
}

export const useLocation = () => useContext(LocationContext);