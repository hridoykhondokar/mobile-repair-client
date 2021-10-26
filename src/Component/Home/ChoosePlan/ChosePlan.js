import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Nav from '../../Shared/Nav/Nav';
import { useHistory, useParams } from 'react-router';
import './ChoosePlan.css';
import Footer from '../Footer/Footer';
import { PayPalButton } from "react-paypal-button-v2";




const ChosePlan = (props) => {
    const [plans, setPlans] = useState([]);
    const [shipmentInfo, setShipmentInfo] = useState();
    const [bankData, setBankData] = useState();
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    

    useEffect(() => {
        fetch(`http://localhost:5000/getPlan/${id}`)
            .then(res => res.json())
            .then(data => setPlans(data[0]))
    }, [id])


    const { register, handleSubmit } = useForm();

    let history = useHistory();


    const planInfo = {
        plan: plans.plan,
        price: plans.price,
        support: plans.support,
        time: plans.time,
        options: plans.options,
        rest: plans.rest,
        status: 'pending',
        email:loggedInUser.email
    }


    const onSubmit = formData => {
        const newData = { ...planInfo, ...formData};
        setShipmentInfo(newData);
        
    };

    useEffect(() => {
      if(bankData){
        const orderInfo = {...shipmentInfo, paypalOrderId:bankData}

        fetch('http://localhost:5000/userInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => {
                res.json()
                if (res.status === 200) {
                    history.push("/myPlans");
                }
                else {
                    alert('Please Check Your Internet Connection');
                }
            });
      };
       
    },[bankData])
     
    



    return (
        <div className='plan-container'>
            <Nav></Nav>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-6 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='plan'>
                                <h2>Checkout</h2>
                            </div>
                            <div className='form-group mt-5'>
                                <input type='text' placeholder='Your Name' required className='form-control input' {...register("name", { required: true })} />
                            </div>
                            <br />

                            <div className='form-group'>
                                <input type='text' placeholder='Address' required className='form-control input' {...register("Address", { required: true })} />
                            </div><br />
                            <div className='form-group'>
                                <input type='Phone' placeholder='Your Number' required className='form-control input' {...register("number", { required: true })} />
                            </div>
                            <br />
                            {!shipmentInfo?.name &&
                                <div className='form-group'>
                                <input className='form-control btn-brand' type="submit" value='Submit' />
                            </div>}
                        </form>
                    </div>

                   {shipmentInfo?.name &&
                    <div className="col-md-6 mt-5">
                        <h1>Pay And Confirm Your </h1>
                        <PayPalButton
                            options={{
                                clientId: "Aao0PNXsYPRWM2ZpOJpDj1xp9dk21TixQz5qPPCRn6RO9zaErL6roSz3-LLbC0-87dzggJ3_C0j0ZTwP",
                                currency: 'USD',
                            }}
                            amount={plans.price}
                            onSuccess={(details, data) => {
                                setBankData(data.orderID)
                            }}
                        />
                    </div>}

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ChosePlan;