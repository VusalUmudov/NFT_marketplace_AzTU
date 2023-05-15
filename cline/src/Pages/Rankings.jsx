import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Modal } from "antd";

function Rankings() {

  const [artist, setArtist] = useState([]);

  const [modalData, setModalData] = useState("");

  console.log(modalData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      Hbid: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      price: Yup.number().required("Required"),
      Hbid: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      axios.post(`http://localhost:8080/api/marketplace/${modalData}`, values);
      // toast.success("NFT created !");
    },
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/artists").then((res) => {
      setArtist(res.data);
    });
  }, []);

  return (

    <div>
      <Navbar />

      <section className='rankings'>

        <div className='hedline__rankings'>
          <div className='headline__subhead'>
            <div className='headline'>
              <p className='headline-top'>Top Creators</p>
            </div>
            <div className='subhead'>
              <p className='headline-bottom'>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
          </div>
        </div>

        <div className='rankings__frame'>
          <div className='tabs'>
            <div className='tab_today'>
              <p>Today</p>
            </div>
            <div className='tab'>
              <p>This Week</p>
            </div>
            <div className='tab'>
              <p>This Month</p>
            </div>
            <div className='tab'>
              <p>All Time</p>
            </div>
          </div>
        </div>

        <div className='rankings__artists'>
          <div className='table_header'>
            <div className='table__headers'>
              <div className='table__header_left'>
                <p className='header#_'>#</p>
                <p className='headers_artist'>Artist</p>
              </div>

              <div className='table__header_right'>
                <div className='table_right_element'>
                  <p>Change</p>
                </div>
                <div className='table_right_element'>
                  <p>NFTs Sold</p>
                </div>
                <div className='table_right_element'>
                  <p>Volume</p>
                </div>
                <div className='table_right_element'>
                  <p>Add</p>
                </div>
              </div>
            </div>
          </div>

          {artist &&
            artist.map((user) => {
              return (
                <div div key={user._id} className='rankings__card-conatiner' >
                  <div className='rankings__card'>

                    <div className='artist__user-container'>
                      <div className='artist__user-num'><p>{user.rank}</p></div>
                      <div className='artist__user'>
                        <div className='artist__user-img'><img src={user.img} alt='foto' /></div>
                        <div className='artist__user-name'><p>{user.name}</p></div>
                      </div>
                    </div>

                    <div className='rankings__card-text'>
                      <div className='artist__user__card-text'>
                        <p className='change-text'>+ {user.change} %</p>
                      </div>
                      <div className='artist__user__card-text'>
                        <p className='nftSolid-text'>{user.NFTsold}</p>
                      </div>
                      <div className='artist__user__card-text'>
                        <p className='volume-text'>{user.volume} ETH</p>
                      </div>
                      <div className='artist__user__card-text'>
                        {/* <button className='nav__btn'>Add</button> */}
                        <Button
                          type="primary"
                          onClick={() => {
                            showModal();
                            setModalData(user._id);
                          }}>
                          Open Modal
                        </Button>
                        <Modal
                          title="Create NFT"
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel} >
                          <div className="rankings_form">
                            <form
                              className="formik_artist"
                              onSubmit={formik.handleSubmit}>
                              <input
                                placeholder="Enter your NFT's title "
                                id="title"
                                name="title"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                              />
                              {formik.touched.title && formik.errors.title ? (
                                <span>{formik.errors.title} !</span>
                              ) : null}

                              <input
                                placeholder="Enter NFT's price"
                                id="price"
                                name="price"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                              />
                              {formik.touched.price && formik.errors.price ? (
                                <span>{formik.errors.price} !</span>
                              ) : null}

                              <input
                                placeholder="Enter Highest Bid"
                                id="Hbid"
                                name="Hbid"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Hbid}
                              />
                              {formik.touched.Hbid && formik.errors.Hbid ? (
                                <span>{formik.errors.Hbid} !</span>
                              ) : null}

                              <button
                                type="submit"
                                onClick={() => {
                                  handleCancel();
                                }}>
                                Submit
                              </button>
                            </form>
                          </div>
                        </Modal>
                      </div>
                    </div>


                  </div>
                </div>
              )

            })}

        </div>


      </section >
      <Footer />
    </div >
  )
}

export default Rankings