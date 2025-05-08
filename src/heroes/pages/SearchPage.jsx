export const SearchPage = () => {
    return ( 
        <>
            <h1>SearchePage</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr />
                    <form>
                        <input type="text" 
                        placeholder="Buscar un heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <div className="alert alert-primary">
                        Buscando un heroe
                        </div>
                    <div className="alert alert-danger">
                        No encontramos ningun heroe
                        </div>  



                </div>
            </div>
        </>
     );
}