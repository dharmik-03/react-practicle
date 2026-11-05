import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, setEditVal } from '../feature/feature'
const List = () => {

    const dispatch = useDispatch()

    const [query, setQuery] = useState({
        search: "",
        option: ""
    })

    const handleChange = (field, e) => {
        setQuery((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setQuery()
    }


    const product = useSelector((state) => state.inventory.products)


    const filter = product.filter((l) => l.search === product.name)

    return (

        <>

            <br />


            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' value={query.search} onChange={(e) => handleChange("search", e)} />

                <button type='submit'>search</button>
            </form>

            <br />
            {!filter ? "no data found" : <table border={2}>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>qty</th>
                        <th>Category</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filter.map((l, index) => {
                        return (
                            <tr key={l.id}>
                                <td>{index + 1}</td>
                                <td>{l.name}</td>
                                <td>{l.price}</td>
                                <td>{l.qty}</td>
                                <td>{l.category}</td>
                                <td><button onClick={() => dispatch(setEditVal(l.id))} >Edit</button></td>
                                <td><button onClick={() => dispatch(deleteProduct(l.id))}>Delete</button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>}
        </>
    )
}

export default List