import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { Product } from "./components/Product"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Provider } from "react-redux"
import store from "./store"
import { Cart } from "./components/Cart"
import { Contact } from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  )
}

export default App
