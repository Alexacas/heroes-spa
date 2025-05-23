import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
    const {id} = useParams();
    const hero = getHeroeById(id);
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1); 
    }
    

    console.log(hero);
    if (!hero) {
        return <Navigate to="/marvel" />;
    }
    return ( 
        
        <div className="row mt-5 ">
        
            <div className="col-4">
                <img src={`../assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__bounce animate__backInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characteres</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-primary"
                onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
     );
}