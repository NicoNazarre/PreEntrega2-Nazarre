import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json"

const ItemListContainer = ({greeting}) => {
    const[items, setItems] = useState([]);

    useEffect(() => {
            const promesa = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(arrayProductos);
                }, 2000);
            });
            promesa.then((respuesta) => {
                setItems(respuesta);
            });
    }, []);
    
    return (
        <div className="container my-5">
            <div className="row">
                <ItemList items={items} />
                <ItemCount stock={10} />
            </div>
        </div>
    )
}

export default ItemListContainer;