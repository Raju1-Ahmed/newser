import React from 'react';
import { FaArrowDown, FaBeer, FaCalendar, FaCaretSquareRight, FaFacebook, FaFacebookMessenger, FaPhotoVideo, FaTwitter, FaYoutube } from "react-icons/fa";
import Tabs from '../Components/Tabs';

const items = [
    {
        id: 1,
        label: 'Recent',
        image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
        title: 'The art of racing with speed-Motoe Gp',
        date: 'Oct 20, 2016',
        comment:'120'
    },
    {
        id: 2,
        label: 'Trending',
        image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
        title: 'They back return to you Kennedy Darlings',
        date: 'Nov 12, 2028',
        comment:'34'

    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        date: 'Dec 23, 2015',
        comment:'321'
    },
]
const Aside = () => {
    return (
                  <aside >
                    <div>
                        <h2 className='text-xl font-black text-white border-b '>STAY CONNECTED</h2>
                        <div>
                            <ul className='flex justify-between items-center rounded bg-green-600  mt-3 p-2'>
                                <li className='flex justify-start text-white items-center'><FaFacebook className='mr-2 text-2xl' />
                                    <a href="">0Fans</a>
                                </li>
                                <li className='text-white'><a href="">Like</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex justify-between items-center rounded bg-blue-600  mt-3 p-2'>
                                <li className='flex justify-start text-white items-center'><FaTwitter className='mr-2 text-2xl' />
                                    <a href="">0 Followers</a>
                                </li>
                                <li className='text-white'><a href="">Follow</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex justify-between items-center rounded bg-red-600  mt-3 p-2'>
                                <li className='flex justify-start text-white items-center'><FaYoutube className='mr-2 text-2xl' />
                                    <a href="">94 Subscribers</a>
                                </li>
                                <li className='text-white'><a href="">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='my-4'>                      
                    <Tabs items={items} />
                    </div>

                    <div>
                        <img src="https://i.ibb.co/6FLptP7/ad-sidebar.jpg" alt="" />
                    </div>

                    <div className='my-4'>
                    <h2 className='text-xl font-black text-white border-b mb-3 '>SUBSCRIBE US</h2>

                    <div className='bg-slate-700 p-5'>
                        <p className='text-white text-left'>Enter Your e-mail and subscribe to our newsletter. we promise not to span.</p>
                        {/* <input type="text" >Email Address</input> */}
                        <input placeholder='Email Address' type="text" className='my-2 w-full hover:border border-red-500 pl-3 p-1 bg-white'/>                       
                        <button className='bg-red-500 w-full text-center text-white p-1 hover:bg-red-400'>Subscribe Us</button>
                    </div>

                    </div>
                </aside>
    );
};

export default Aside;