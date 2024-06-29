import HomePage from './HomePage';
import PostForm from './PostForm';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import EditPost from './EditPost';
function App(){  
return(
  <div className='App'>
    <title>The Post</title>
    <h1>The Post</h1>
    <Router>
      <Routes>
        <Route path='/The-Post' element={<HomePage/>}/> 
        <Route path='/PostForm' element={<PostForm/>}/>
        <Route path='/EditPost/:id' element={<EditPost/>}/>
        
      </Routes>
    </Router>
  </div>
);}
export default App;


