import React from 'react';
import MainButton from '../../Shared/MainButton'
const Myorder = ({ myOrder }) => {
    const { productName, userEmail, userName, inputFieldData } = myOrder;
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="bg-[#9ca3af] font-bold rounded-xl p-2 text-center text-2xl">   {productName} </h2>
                    <h2 className='font-bold text-lg'> Your Order Quantity : {inputFieldData.order}</h2>
                    <h2 className='bg-[#9ca3af] font-bold text-center p-1 rounded-xl' > Your detail information  </h2>
                    <h2 className='font-bold text-lg'> Your Name : {userName}</h2>
                    <h2 className='font-bold text-lg'> Your Address:  {inputFieldData.address}</h2>
                    <h2 className='font-bold text-lg'> Your Email : {userEmail}</h2>
                    <h2 className='font-bold text-lg'> Your Phone Number : {inputFieldData.phone}</h2>

                    <div class="card-actions justify-center">
                        <MainButton> Cancel </MainButton>
                    </div>

                    <div class="card-actions justify-center">
                        <MainButton> Pay your order </MainButton>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Myorder;