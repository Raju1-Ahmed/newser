import React from 'react';

const Menu = () => {
    return (
        <div className='container mx-auto'>
            {/* <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <span>
                            <a href="">
                                <img src="https://i.ibb.co/T4QX63g/sticky-logo.png" alt="" />
                            </a>
                        </span>

                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="navbar-end">
                    <label for="my-drawer-4"  tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        
                    </label>
                    <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div> */}

            <div className='flex justify-between mt-3 px-3'>
                <div className='flex justify-start '>
                    <div><img className='' src="https://i.ibb.co/T4QX63g/sticky-logo.png" alt="" /></div>
                    <div>
                        <ul className='flex justify-start ml-12'>
                            <li className='list-none text-sm'><a href="">HOME</a></li>
                            <li className='list-none text-sm hover:text-black  ml-6'>  <a href="">LIFESTYLE </a>  </li>
                            <li className='list-none text-sm hover:text-black  ml-6'>  <a href="">FOOD </a>  </li>
                            <li className='list-none text-sm hover:text-black  ml-6'>  <a href="">VIDEOS </a>  </li>
                            <li className='list-none text-sm hover:text-black  ml-6'>  <a href="">FUATURES </a>  </li>

                        </ul>
                    </div>
                </div>
                <div className='flex justify-start '>
                    <label for="my-drawer-4" tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>
                    <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/*==================== drawer  ==================================*/}
            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;

// https://i.ibb.co/T4QX63g/sticky-logo.png