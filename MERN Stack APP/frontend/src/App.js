
import './App.css';
import AddProductList from './Component/AddProductList';
import ProductList from './Component/ProductList';

import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Update from './Component/Update';
function App() {
  return (
    <>
     <Routes>
     <Route path='/'element={<ProductList/>}></Route>
    <Route path='/update/:id'element={<Update />}></Route>
  
   
    </Routes>
  
    </>
  );
}

export default App;
