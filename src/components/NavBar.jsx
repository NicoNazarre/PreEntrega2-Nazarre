import CartWidget from "./CartWidget";
import logo from "./images/icono-legnano.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img src={logo} alt="Leniano" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={"/"}>Productos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/Diablo-Rosso"}>Diablo Rosso</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/MT-60"}>MT 60</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/Scorpion-Trail"}>Scorpion Trail</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />

                </div>
            </div>
        </div>
        )
        }


        export default NavBar;