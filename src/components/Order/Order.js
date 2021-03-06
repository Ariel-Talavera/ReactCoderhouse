import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import { getFirestore } from '../../firebase';
import { useParams, } from 'react-router-dom';
import Swal from 'sweetalert2'

function Order({data}) {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    let products = {}

    const fetchOrder = () => {
        setLoading(true);
        const db = getFirestore()
        const itemCollection = db.collection('orders');
        if (id) {
            const item = itemCollection.doc(id);
            item.get().then((doc) => {
                if (doc.exists) {
                    products = doc.data();
                }
                setLoading(false)
            })
            .catch((error) => {
                Swal.fire('Error', 'Error searching item: ' + error, 'error')
            })
        }
    }

    useEffect(() => {
        fetchOrder()
    }, []);

    return (
        <>
            { loading && <Loading/> }
            {Object.keys(products).length > 0 && !loading &&
                <div className="Home-Cart">
                    Proximamente!
                </div>
            }
            {Object.keys(products).length === 0 && !loading &&
                <div className="Home-Cart">
                    <span>No hay órdenes con el ID proporcionado. <br></br> Por favor, revise el ID ingresado e intente nuevamente.</span>
                </div>
            }
        </>
    )
}

export default Order;