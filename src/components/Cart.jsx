import { useDispatch, useSelector } from 'react-redux'
import { cart_action } from '../store/cart_slice'

export const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cart.items)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        totalQuantity === 0 ?
            <div style={{ marginBottom: '350px' }} className='p-5 display-5 text-center'>Cart is empty</div>
            :
            cartItem.map((item) => {
                const { id, title, price, img, quantity } = item
                const addToCart = () => dispatch(cart_action.addToCart({ id, title, price, img }))
                const removeFromCart = () => dispatch(cart_action.removeFromCart({ id }))

                return (
                    <div key={id} className="row bg-light py-5 mb-4">
                        <div className="col-md-5 text-center">
                            <img src={img} alt={title} height='200px' width='180px' />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h3>{title}</h3>
                            <p className="lead fw-bold">
                                {`${quantity} X ${price} = ${quantity * price} TMT`}
                            </p>
                            <button onClick={removeFromCart} className="btn btn-outline-dark me-4">
                                <i className="fa fa-minus"></i>
                            </button>
                            <button onClick={addToCart} className="btn btn-outline-dark me-4">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                )
            })
    )
}
