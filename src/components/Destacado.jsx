import imagenPrincipal from "./images/mejores-marcas-de-cubiertas-para-motos-bridgestone.jpg"

const Destacado = () => {
return (
    <div className="container-fluid my-3">
        <div className="row">
            <div className="col">
                <img src={imagenPrincipal} alt={"Imagen Principal"} className={"img-fluid"} />
            </div>
        </div>
    </div>
)
}

export default Destacado;