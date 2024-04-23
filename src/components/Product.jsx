import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { cart_action } from '../store/cart_slice'

export const Product = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`http://localhost:8000/data/${id}`)
                setProduct(await response.data)
                setLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        getProduct();
    }, [])

    const {price,img, title} = product
    const addToCart = () => dispatch(cart_action.addToCart({ id, title, price, img }))

    return (
        <div className='container py-5'>
            <div className="row border">
                {loading
                    ?
                    <h3>
                        <div className="row py-5">
                            <div className="col-md-6">
                                <div className='placeholder' style={{ height: '400px', width: '400px' }}></div>
                            </div>
                        </div>
                    </h3>
                    :
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-center">
                                <img className='my-auto' src={product.img} alt={product.title} height='400px' weight='400px' />
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                                <h1 className="display-5">{product.title}</h1>
                                <h3 className="display-6 fw-bold my-4">{product.price} TMT</h3>
                                <button onClick={addToCart} className="btn btn-outline-dark px-4 py-2">
                                    Add to Cart
                                </button>
                                <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">
                                    Go to Cart
                                </NavLink>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
