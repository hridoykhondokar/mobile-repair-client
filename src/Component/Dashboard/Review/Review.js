import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {

        const reviewData = {
            name: data.name,
            occupation: data.occupation,
            quality: data.quality,
            imageURL: imageURL
        }

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                res.json()
                if (res.status === 200) {
                    alert('Review successfully');
                }
                else {
                    alert('not successfully! Try again');
                }
            })

    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd27001f50afac1ffc32a27f7de9b6900');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="review">
            <h1>Review Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="review-from">
                    <div className='form-group'>
                        <input type='text' placeholder='Your name' maxLength="16" className='form-control' {...register("name", { required: true })} />
                    </div>
                    <br />
                    <div className='form-group'>
                        <input type='text' placeholder='Your occupation' maxLength="15" className='form-control' {...register("occupation", { required: true })} />
                    </div>
                    <br />
                    <div className='form-group'>
                        <input className='form-control' type='file' onChange={handleImageUpload} />
                    </div>
                    <br />
                    <div className='form-group'>
                        <textarea placeholder='Tell us quality' maxLength="80" className='form-control' {...register("quality", { required: true })} rows="3" cols="12"></textarea>
                    </div>


                    <br />
                    <div className='form-group'>
                        <button type="submit" className="btn btn-brand form-control"> Submit</button>
                    </div>
                </div>


            </form>
        </div>

    );
}

export default Review;