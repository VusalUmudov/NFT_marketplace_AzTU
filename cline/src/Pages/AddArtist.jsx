import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-hot-toast";

function AddArtist() {
    const formik = useFormik({
        initialValues: {
            name: "",
            change: "",
            NFTsold: "",
            volume: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required !"),
            change: Yup.number().required("Required !"),
            NFTsold: Yup.number().required("Required !"),
            volume: Yup.number().required("Required !"),
        }),
        onSubmit: (values,  { resetForm }) => {
            axios.post("http://localhost:8080/api/artists", values);
            toast.success("Successfully created !");
             resetForm();
        },
    });

    return (
        <div >
            <Navbar />

            <div >
                <div className='add_artist_container'> 
                <h1>Create your Artist</h1>
                    <form className='add_artist_form' onSubmit={formik.handleSubmit}>

                        <input  placeholder="Enter Artist name..."
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (
                            <span>{formik.errors.name} !</span>
                        ) : null}
                        <input placeholder="Enter change..."
                            id="change"
                            name="change"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.change} />
                        {formik.touched.change && formik.errors.change ? (
                            <span>{formik.errors.change} !</span>
                        ) : null}
                        <input placeholder="Enter Nft sold..."
                            id="NFTsold"
                            name="NFTsold"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.NFTsold} />
                        {formik.touched.NFTsold && formik.errors.NFTsold ? (
                            <span>{formik.errors.NFTsold} !</span>
                        ) : null}
                        <input placeholder="Enter Artist volume..."
                            id="volume"
                            name="volume"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.volume} />
                        {formik.touched.volume && formik.errors.volume ? (
                            <span>{formik.errors.volume}</span>
                        ) : null}

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AddArtist