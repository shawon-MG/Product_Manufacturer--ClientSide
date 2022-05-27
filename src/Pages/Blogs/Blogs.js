import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center'>

            <div className='grid grid-cols-1 gap-4 mt-16 shadow-xl p-12 rounded-xl'>
                <div>
                    <label for="my-modal-1" class="btn modal-button btn-outline"> 1. How will you improve the performance of a React Application? </label>

                    <body>
                        <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle  w-full ">
                            <div class="modal-box">
                                <p class="py-4 font-bold">Optimization is the number one thing that is on the mind of every dev when building any software, especially web apps. JS frameworks like Angular, React and others, have included some awesome configurations and features. Here, I’ll review the features and tricks that will help you optimize your app’s performance. Some Performance Optimization Techniques for React Apps are,<br /> 1. Using Immutable Data Structures. <br /> 2. Function/Stateless Components and React.PureComponent. <br /> 3. Multiple Chunk Files <br /> 4.Using Production Mode Flag in Webpack. <br /> 5.Dependency optimization. And more...</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn mx-auto">  Reading Completed ?  </label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>


                <div>
                    <label for="my-modal-2" class="btn modal-button btn-outline"> 2. What are the different ways to manage a state in a React application? </label>

                    <body>
                        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">

                                <p class="py-4 font-bold">There are four main types of state you need to properly manage in your React apps: <br /> Local state <br /> Global state <br /> Server state <br /> URL state</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn  mx-auto"> Reading Completed ? </label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>

                <div>
                    <label for="my-modal-3" class="btn modal-button btn-outline"> 3. How does prototypical inheritance work? </label>

                    <body>
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn  mx-auto"> Reading Completed ?</label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>

                <div>
                    <label for="my-modal-4" class="btn modal-button btn-outline"> 4. Why you do not set the state directly in React? </label>

                    <body>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn  mx-auto"> Reading Completed ?</label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>

                <div>
                    <label for="my-modal-5" class="btn modal-button btn-outline"> 5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? </label>

                    <body>
                        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn  mx-auto"> Reading Completed ?</label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>

                <div>
                    <label for="my-modal-6" class="btn modal-button btn-outline"> 6. What is a unit test? Why should write unit tests? </label>

                    <body>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn  mx-auto"> Reading Completed ?</label>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>
            </div>

        </div>
    );
};

export default Blogs;