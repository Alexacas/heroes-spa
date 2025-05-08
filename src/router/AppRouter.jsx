import { Route, Routes } from "react-router-dom";
import { MarvelPage,  DCPage} from "../heroes";
import { LoginPage } from "../auth/";
import { Navbar } from "../ui/Navbar";
import { HeroesRouter } from "../heroes/routes/HeroesRouter";

export const AppRouter = () => {
    return (
        <>    
            
            <Routes>
                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRouter />} />
            </Routes>        
          </>
    );
}