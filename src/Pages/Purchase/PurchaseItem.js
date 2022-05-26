import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import MainButton from '../Shared/MainButton';

const PurchaseProduct = () => {

    const { id } = useParams();

    const [singleItem, setSingleItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [singleItem]);

    const { name, img, description, minimumQuantity, availableQuantity, price } = singleItem;

    const [user] = useAuthState(auth);


    return (

        <div className='flex justify-center items-center mt-8'>

            <div class="hero bg-base-200 rounded-xl p-2">
                <div class="hero-content grid grid-cols-1 lg:grid-cols-3 gap-16">


                    {/* ----Single product's information------ */}
                    <div class="card card-compact w-96 bg-base-100 shadow-xl flex-1">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold"> {name} </h2>
                            <p> {description} </p>
                            <h2 className='font-bold'> Minimum Quantity Have to Buy : {minimumQuantity}</h2>
                            <h2 className='font-bold'> Available Quantity Now : {availableQuantity}</h2>
                            <h2 className='font-bold'> Price Per Unit : {price}</h2>
                            <div class="card-actions justify-start">
                                <MainButton> Purchase </MainButton>
                            </div>
                        </div>
                    </div>


                    {/* Input field for user address, phone number and increase/decrease order's quantity */}
                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> Your Address </span>
                                </label>
                                <textarea class="textarea textarea-bordered" placeholder="address"></textarea>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> Your Phone Number </span>
                                </label>
                                <input type="number" placeholder="number" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> Order Quantity </span>
                                </label>
                                <input type="number" placeholder="number" class="input input-bordered" />
                            </div>

                            <div class="flex w-full">
                                <div class="grid h-20 flex-grow card  rounded-box place-items-center">
                                    <MainButton> Increase Order </MainButton>
                                </div>
                                <div class="divider divider-horizontal"> OR </div>
                                <div class="grid h-20 flex-grow card  rounded-box place-items-center">
                                    <MainButton> Decrease Order </MainButton>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*------- Logged in user email and name------- */}
                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> You are logged in ! </span>
                                </label>
                                <input type="name" disabled value={user.displayName} class="input input-bordered font-bold" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> With this email address </span>
                                </label>
                                <input type="email" disabled value={user.email} class="input input-bordered font-bold" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;
