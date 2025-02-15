import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './Pages/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Posts from './Pages/Posts.jsx';
import Products from './Pages/Products.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';
import Error from './Pages/Error.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout/>}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='products' element={<Products />} />
						<Route path='products/:productId' element={<SingleProduct />} />
						<Route path='posts' element={<Posts />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;