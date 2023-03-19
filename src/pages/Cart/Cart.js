import './carts.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const navigate = useNavigate();
    const db = getFirestore();

    const createOrder = (evento) => {
        evento.preventDefault();
        const querySnapshot = collection(db, 'orders');

        addDoc(querySnapshot, {
            buyer: {
                name: formValue.name,
                phone: formValue.phone,
                email: formValue.email,
            },
            products: cart.map((product) => {
                return {
                    name: product.name,
                    price: product.name,
                    id: product.id,
                    quantity: product.quantity,
                }
            }),
            total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

        })
            .then((response) => {
                alert(`Tú id de compra es ${response.id}`)
                updateStock();
            })
            .catch((error) => { console.log(error) })

    };


    const updateStock = () => {
        cart.forEach((plant) => {
            const querySnapshot = doc(db, 'plants', plant.id);
            updateDoc(querySnapshot, {
                stock: plant.stock - plant.quantity,
            }).then(() => {
                alert('El stock fue actualizado')
            })
                .catch((error) => { console.log(error) })
        })

    }

    const handleImput = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    }


    return (
        <div className="carrito" >
            <div className="diagramacion">
                {
                    cart.map((product) => (
                        <div key={product.name}>
                            <h2 className="h2">{product.name}</h2>
                            <h3 className="h3" >id de producto: {product.id}</h3>
                            <div className="lista">
                                <h4 className="h4" >{product.quantity}</h4>
                                <h4 className="h4" >U$S{product.price}</h4>
                                <button className="boton" onClick={() => removeItem(product.id)}>X</button>
                            </div>


                        </div>
                    ))
                }
                <div className="cart" >
                    <div>
                        {
                            cart.length > 0 && <button className="boton" onClick={clear}>Vaciar Carrito</button>
                        }
                        <button className="boton" onClick={() => navigate('/')}>Seguir comprando</button>
                    </div>

                    {
                        cart.length === 0 && <div>
                            <h2 className="h2" >No hay productos seleccionados</h2>
                        </div>
                    }
                </div>

            </div >



            {/* formulario */}
            <div>
            
                <form className="form" >
                    <h3 className="h3">Formulario de compra</h3>
                    <input className="imput" name='name' type='text' placeholder='Nombre' value={formValue.name} onChange={handleImput} ></input>
                    <input className="imput" name='phone' type='text' placeholder='Teléfono' value={formValue.phone} onChange={handleImput} ></input>
                    <input className="imput" name='email' type='email' placeholder='Email' value={formValue.email} onChange={handleImput} ></input>
                    <button className="boton" onClick={createOrder}>Completar compra</button>

                </form>
            </div>
        </div>

    );
};

export default Cart;
