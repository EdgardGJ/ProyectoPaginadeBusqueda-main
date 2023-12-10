import React from "react"
import axios from "axios"
import YouTube from "react.youtube";

function App() {
    const API_URL =;
    const API_KEY =;
    const IMAGE_PATH = ;
    const URL_IMAGE = ;

    //variables de estado
    const [movies, setMovies] = useStates([])
    const [searchKey, setSearchkey] = useStates("")
    const [trailer, setTrailer] = useStates(null)
    const [movie, setMovie] = useStates({ title: "Loading Movies"})
}