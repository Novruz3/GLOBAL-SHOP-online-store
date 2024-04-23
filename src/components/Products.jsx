import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get("http://localhost:8000/data")
                setData(await response.data)
                setFilter(await response.data)
                setLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        getProducts()
    }, [])

    const dataFilter = (val) => {
        const filteredData = data.filter((x) => x.category === val)
        setFilter(filteredData)
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading
                        ?
                        <h3>Loading....</h3>
                        :
                        <>
                            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                                <button onClick={() => setFilter(data)} className="btn btn-outline-dark me-2">All</button>
                                <button onClick={() => dataFilter("men's clothing")} className="btn btn-outline-dark me-2">Men's Clothing</button>
                                <button onClick={() => dataFilter("women's clothing")} className="btn btn-outline-dark me-2">Women's Clothing</button>
                                <button onClick={() => dataFilter("childrens clothing")} className="btn btn-outline-dark me-2">Children's Clothing</button>
                                <button onClick={() => dataFilter("cosmetica")} className="btn btn-outline-dark ">Cosmetica</button>
                            </div>
                            {
                                filter.map((product) => {
                                    return (
                                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                            <div className="card mb-4" >
                                                <img src={product.img} className="card-img-top object-fit-cover" height='200px' alt={product.title} />
                                                <div className="card-body ">
                                                    <h5 className="card-title overflow-y-hidden" style={{ height: '75px' }}>{product.title}</h5>
                                                    <p className="card-text fw-bold">{product.price} TMT</p>
                                                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark ">Buy Now</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>}
                </div>
            </div>
        </div>
    )
}
