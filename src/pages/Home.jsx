import {useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {BounceLoader} from 'react-spinners'
import axios from 'axios'
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import { MdEdit } from "react-icons/md";






function Home() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:3300/books/')
        .then((response) => {
            setBooks(response.data)
            console.log(response)
            setLoading(false)   
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(books)

  return (
    <div>
        <BounceLoader color='blue' loading={loading} size={150} />
    <div>
        <h1>Books</h1>
        <NavLink to='/create'>
            <IoMdAddCircle size={40} color='green'/>
        </NavLink>
        
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Added At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book) => {   
                        return (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>{book.createdAt}</td>
                                <td className='actions'>
                                    <NavLink to={`/details/${book._id}`}>
                                        <CiSquareMore size={20} color='blue' />
                                    </NavLink>
                                    <NavLink to={`/edit/${book._id}`}>
                                        <MdEdit size={20} color='green' />
                                    </NavLink>
                                    <NavLink to={`/delete/${book._id}`}>
                                        <MdDeleteOutline size={20} color='red' />
                                    </NavLink>
                                </td>
                            </tr>
                        );
                    })                
                }

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Home