import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/Navbar"
import { DCPage, MarvelPage, SearchPage } from "../pages"
import { LoginPage } from "../../auth"
import { HeroPage } from "../pages/HeroPage"

export const HeroesRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DCPage />} />
                    <Route path="/" element={<MarvelPage />} />
                    <Route path="hero/:id" element={<HeroPage/>} />
                    <Route path="search" element={<SearchPage />} />
                </Routes>        
                </div>  
        </>
    )
}