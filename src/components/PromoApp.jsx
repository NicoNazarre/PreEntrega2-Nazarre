import iconoLeniano from "./images/icono-legnano.png";

const PromoApp = () => {
    return (
        <div className="container-fluid bg-primary py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={iconoLeniano} alt={"Leniano App"} width={100} />
                            </div>
                            <div className="col-md-9 d-flex align-items-center">
                                <div>
                                    <h2>Descárgate nuestra App</h2>
                                    <p>Descárgate nuestra app y no te pierdas nuestras novedades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <button className="btn bg-light-subtle">Descargar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoApp;