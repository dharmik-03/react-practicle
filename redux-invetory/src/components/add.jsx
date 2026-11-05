import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, handleEdit, setEditVal } from '../feature/feature'

const Add = () => {

    const dispatch = useDispatch()

    const { editVal } = useSelector((state) => state.inventory)

    const [input, setInput] = useState({
        name: "",
        price: "",
        qty: "",
        category: ""
    })
    useEffect(() => {
        editVal ? setInput(editVal) : null
    }, [editVal])

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (editVal) {

            dispatch(handleEdit(input))
            setInput({
                name: "",
                price: "",
                qty: "",
                category: ""

            })

        } else {
            dispatch(add(input))

            setInput({
                name: "",
                price: "",
                qty: "",
                category: ""

            })

        }
        console.log(input)
    }

    return (
        <>

            <form onSubmit={handleSubmit}>


                <label htmlFor="">Name</label>
                <input type="text" value={input.name} onChange={(e) => handleChange("name", e)} />
                <br />
                <br />

                <label htmlFor="">Price</label>
                <input type="number" value={input.price} onChange={(e) => handleChange("price", e)} />

                <br /><br />

                <label htmlFor="">Quantity</label>
                <input type="number" value={input.qty} onChange={(e) => handleChange("qty", e)} />
                <br /><br />
                <label htmlFor="">Category</label>
                <select name="" value={input.category} onChange={(e) => handleChange("category", e)}>
                    <option value="">select</option>
                    <option value="electronic">electronic</option>
                    <option value="furniture">furniture</option>
                </select>

                <br />
                <br />
                <button type='submit'>{editVal ? "update" : "Add"}</button>
            </form>




            <br />
            <br />

        </>
    )
}

export default Add