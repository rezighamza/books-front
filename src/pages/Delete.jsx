import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Delete() {
  const navigate = useNavigate()
  const {id} = useParams()
  const handelClick = () => {
    axios.delete(`http://localhost:3300/books/${id}`)
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (<>
    <h1>Delete</h1>
    <h4>Are you sure you want to delete this book?</h4>
    <button onClick={handelClick}>Confime</button>
  </>
    
  )
}

export default Delete