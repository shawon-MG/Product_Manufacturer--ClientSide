import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-16'> Our Business Summary at a Glance </h1>
            <div class="stats stats-vertical lg:stats-horizontal flex shadow-lg">

                <div class="stat justify-center">
                    <div class="stat-title"> Regular Customers </div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title"> Revenue  </div>
                    <div class="stat-value">4,20,00,000</div>
                    <div class="stat-desc"> ↗︎ 400 (22%) </div>
                </div>

                <div class="stat">
                    <div class="stat-title"> Collaborations with other businesses </div>
                    <div class="stat-value"> 480 </div>
                    <div class="stat-desc"> ↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;