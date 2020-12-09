//tag: [data fetch api]
import { React, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../App"

// Tuto
export const useFetch = (url) => {

    const { state } = useContext(AuthContext)
    // Correspond à l'état qui va s'ocupper de stocker les données de l'api
    const [data, setData] = useState()

    // Ici, on récupère les données de  l'api
    const getUrlData = async (url) => {
        await Axios.get(url, { headers: { Authorization: `Bearer ${state.token}` } })
            .then(async (res) => {
                // On ajoute les données dans data
                await setData(res.data);
            })
    }

    // Ce useEffect se comporte commme la méthode didMount. Cette fonction va l'executer à l'initialisation
    // du composant uniquement.
    useEffect(async () => {
        const fetchData = async () => {
            console.log("use Effect est appelé")
            await getUrlData(url)
        }
        fetchData()
    }, [])

    return ([data, setData]);
}