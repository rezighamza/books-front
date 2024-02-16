import axios from 'axios'
import {useState  , useEffect} from 'react'
import {useParams} from 'react-router-dom'
function Details() {
    const [book, setBook] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3300/books/${id}`)
        .then((response) => {
            setBook(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    , [id])
    

  return (
    <div>
        <h1>Details</h1>
        <div>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.details}</p>
        </div>
    </div>
    
  )
}

export default Details