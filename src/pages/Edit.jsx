import axios from 'axios'
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Edit() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [details, setDetails] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://books-api-search.onrender.com/books/${id}`)
        .then((response) => {
            const book = response.data
            setTitle(book.title)
            setDescription(book.description)
            setDetails(book.details)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id])
    const handelSubmit = (e) => {
        e.preventDefault()
        const book = {
            title,
            description,
            details
        }   
        axios.put(`http://localhost:3300/books/${id}`, book)
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <form onSubmit={(e) => {handelSubmit(e)}}>
            <div>
                <label>Title</label>
                <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}} name='title'/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' name='description' value={description} onChange={(e) => {setDescription(e.target.value)}} />
            </div>
            <div>
                <label>Details</label>
                <textarea name="details" cols="30" rows="10" value={details} onChange={(e) => {setDetails(e.target.value)}}></textarea>
            </div>
            <div>
                <button type='submit'>Create</button>
            </div>

        </form>
    </div>
  )
}

export default Edit