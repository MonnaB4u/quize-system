import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Notification.css'
const Notification = () => {
    // const allData=data
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/allfeedback')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])
    // console.log(data)

    const [data, setServer] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/allfeedback')
            .then(res => res.json())
            .then(data => setServer(data))

    }, [])

    return (


        <div >
            <NavBar></NavBar>
            <div className="container mt-5">
                {
                    data.map((each, index) =>
                        <>
                            {/* <div className="row d-flex  p-3"> */}
                            <div className="row  no-match text-center">
                               <h4>{each.name}</h4>
                               
                                <h5>{each.ClassName}</h5>
                                <p>{each.FeedBack}</p>
                                <div className="signuture text-right mr-5">
                                <h5>{each.email}</h5>
                                </div>
                            </div>
                        

                        </>
                    )
                }
            </div>

            {/* <div className="col-md-4 text-center" onClick={handler}>


                <h2>{each.email}</h2>
                <h2>{each.ClassName}</h2>
                <h3>{each.FeedBack}</h3>
                <div className="signuture text-right mr-5">
                    <h6>{each.name}</h6>

                </div>


            </div> */}
        </div>

    );
};

export default Notification;