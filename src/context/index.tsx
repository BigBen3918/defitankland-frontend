import { createContext, useContext, useReducer, useMemo } from "react";

import { StoreObject } from "../components/interfaces";

const INIT_STATE: StoreObject = {
    count: 0,
};

const App = createContext({});

export function useGlobalContext() {
    return useContext(App);
}

function reducer(state: any, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    /* ------------ Context Value ------------- */
    return (
        <App.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch,
                    },
                ],
                [state, dispatch]
            )}
        >
            {children}
        </App.Provider>
    );
}
