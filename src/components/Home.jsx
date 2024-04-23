import bg_img from '../assets/bg.jpg'
import { Products } from './Products'

export const Home = () => {
    return (
        <>
            <div className='hero z-0'>
                <div className="card text-bg-dark border-0">
                    <img src={bg_img} className="card-img" alt="Background" height='550px' />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-4 fw-bolder mb-0 text-dark">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}
