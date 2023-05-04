import React from 'react';
import { FaFacebookMessenger, FaCalendar, FaPhotoVideo, FaPersonBooth, FaArrowRight, FaComment, FaCloudversify, } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDriveFileMoveRtl } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
const blogs = [
    {
        id: 1,
        image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
        title: 'The art of racing with speed-Motoe Gp',
        date: 'Oct 20, 2016'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
        title: 'They back return to you Kennedy Darlings',
        date: 'Nov 12, 2028'
    },
    {
        id: 3,
        image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        date: 'Dec 23, 2015'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/Cmh4628/travel-post-98-130x80.jpg',
        title: 'Improve and monitor fingerprint technology',
        date: 'Feb 11, 2019'
    },
]
const fitnessblogs = [
    {
        id: 1,
        image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
        title: 'Facts should know about stuffed peppers',
        name: 'Food'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        name: 'Fitness'

    },
    {
        id: 3,
        image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
        title: 'They back return to you Kennedy Darlings',
        name: 'Mobile'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/HNdH1q2/post-7-130x80.jpg',
        title: 'Home team takes the win – NBA 2016',
        name: 'Basketball'
    },
]

const HeadBlogs = [
    {
        id: 1,
        title: 'Being a rock-star is a matter of fashion',
        name: 'Rechel',
        image: 'https://i.ibb.co/S6wkJgC/post-1-430x315.jpg',
        profile: 'https://i.ibb.co/19cKn7h/author-newser-70x70.jpg',
        message: '32',
        description: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt…',
        date: 'Oct 20, 2016',
        view: '9728'
    },
]
const fitnessBlog = [
    {
        id: 1,
        title: 'Being a rock-star is a matter of fashion',
        name: 'Rechel',
        image: 'https://i.ibb.co/S6wkJgC/post-1-430x315.jpg',
        descriptions: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt…'
    },
    {
        id: 1,
        title: 'Being a rock-star is a matter of fashion',
        name: 'Rechel',
        image: 'https://i.ibb.co/ggCjFck/post-2-430x315.jpg',
        descriptions: 'Being a food lover always Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas…'
    },
]

const Article = () => {
    return (
        <article >
            <div className='flex justify-between items-center border-b'>
                <div>
                    <ul className='flex justify-start items-center'>
                        <li className=' hover:text-black'><a href="">All</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Football</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Gadgets</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Lifestyle</a></li>
                    </ul>
                </div>
                <li className='flex justify-start items-center hover:text-black'><a href="">More</a>
                    <MdKeyboardArrowDown className=' text-2xl mt-1' />
                </li>
            </div>

            <div className='flex justify-between gap-7 items-center '>

                <div className='mt-3 w-1/2 mx-auto'>
                    {HeadBlogs.map((a) => (
                        <div key={a.id}>
                            <div className='relative '>
                                <img src={a.image} alt="" />
                                <span className='absolute top-0 right-0 rounded-full border p-2 mt-10 mr-10 '>
                                    <FaPhotoVideo className=' text-white  text-3xl ' />
                                </span>
                            </div>
                            <h2 className='text-white text-xl font-black my-4 text-left'>{a.title}</h2>
                            <ul className='flex justify-between items-center pr-6'>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src={a.profile} alt="" /> <a href="">{a.name}</a></li>
                                <li className='flex justify-start items-center'> <FaCalendar className='mr-3' /> <a href="">{a.date}</a></li>
                                <li className='flex justify-start items-center'> <FaFacebookMessenger className='mr-3' /> <a href="">{a.message}</a></li>
                            </ul>
                            <p className='text-white text-left mt-4'>{a.description}</p>
                        </div>
                    ))}
                </div>

                <div className=' w-1/2 mx-auto'>
                    {blogs.map((item) => (
                        <div key={item.id}>
                            <div className='flex justify-around gap-5 items-center  mb-3'>
                                <div className='relative '>
                                    <img className='w-full' src={item.image} alt="" />
                                    <span className='absolute top-5 left-10 rounded-full border p-1 '>
                                        <FaPhotoVideo className=' text-white  text-2xl ' />
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-white text-xl  text-left'>{item.title}</h2>
                                    {/* <p>{item.date}</p> */}
                                    <li className='flex justify-start items-center mt-2'> <FaCalendar className='mr-3' /> <a href="">{item.date}</a></li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='my-10'>
                <h2 className='border-b py-1  text-white'><span className='bg-blue-600  p-1 text-sm'>Technology</span></h2>
                <div>
                    {HeadBlogs.map((b) => (
                        <div className='flex justify-start items-center gap-6'>
                            <div className='relative '>
                                <img src={b.image} alt="" />
                                <span className='absolute top-1/2 left-1/2 rounded-full border '>
                                    <FaPhotoVideo className=' text-white  text-3xl ' />
                                </span>
                            </div>
                            <div>
                                <h2 className='text-white text-xl'>{b.title}</h2>
                                <div className='flex justify-start gap-9 items-center'>
                                    <div className='flex justify-start items-center'>
                                        <BsPerson className='text-xl' />
                                        <h1 className='text-white hover:text-black ml-1'>{b.name}</h1>
                                    </div>
                                    <div className='flex justify-start items-center my-3'>
                                        <SlCalender />
                                        <h1 className='text-white hover:text-black ml-2'>{b.date}</h1>
                                    </div>
                                </div>
                                <p className='text-white text-left'>{b.description}</p>
                                <div className='flex justify-start gap-10 items-center'>
                                    <div className='flex justify-start items-center'>
                                        <FaComment />
                                        <h1 className='text-white hover:text-black ml-2'>{b.comment}Comment</h1>
                                    </div>
                                    <div className='flex justify-start items-center my-3'>
                                        <GrView className='text-white' />
                                        <h1 className='text-white hover:text-black ml-2'>{b.view}</h1>
                                    </div>
                                    <li className='flex justify-start items-center my-3 hover:bg-black'>
                                        <a href="" className='text-white mr-2' >Read More</a>
                                        <FaArrowRight />
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='grid grid-cols-2 gap-5'>
                {blogs.map((item) => (
                    <div key={item.id} >
                        <div className='flex justify-around gap-5 items-center  mb-3'>
                            <div className='relative '>
                                <img className='w-full' src={item.image} alt="" />
                                <span className='absolute top-5 left-10 rounded-full border p-1 '>
                                    <FaPhotoVideo className=' text-white  text-2xl ' />
                                </span>
                            </div>
                            <div>
                                <h2 className='text-white text-xl  text-left'>{item.title}</h2>
                                {/* <p>{item.date}</p> */}
                                <li className='flex justify-start items-center mt-2'> <FaCalendar className='mr-3' /> <a href="">{item.date}</a></li>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-10'>
                <img src="https://i.ibb.co/26T1Tyb/ad-2.jpg" alt="" />
            </div>
            <div className='mt-10'>
                <h2 className='border-b py-1 mb-7 text-white'><span className='bg-yellow-600  p-1 text-sm'>Lifestyle & Fitness</span></h2>
                <div className='grid grid-cols-2 gap-5'>
                    {fitnessBlog.map((item) => (
                        <div key={item.id} >
                            <div >
                                <h2 className='text-white text-xl mb-3  text-left'>{item.title}</h2>
                                <div className='relative  '>
                                    <img className='w-full mb-5 ' src={item.image} alt="" />
                                    <div className='absolute  bottom-0 py-3 flex items-center justify-center rounded'>
                                        <div className='flex items-center'>
                                            <span>
                                                <li className='flex items-center text-2xl text-red-900'>
                                                    <BsPerson />
                                                    <a className='text-white text-sm ml-1' href="">Rachel</a></li>
                                            </span>

                                            <span className='ml-7'>  <li className='flex items-center text-2xl text-red-900'>
                                                <MdOutlineDriveFileMoveRtl />
                                                <a className='text-white text-sm ml-1' href="">Moto Gp</a></li></span>
                                        </div>
                                        <div className='ml-36'>
                                            <a href="">
                                                <AiOutlineHeart className='text-3xl text-white' />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <h2 className='text-white text-xl  text-left'>{item.title}</h2> */}
                                    <p>{item.descriptions}</p>
                                    {/* <li className='flex justify-start items-center mt-2'> <FaCalendar className='mr-3' /> <a href="">{item.date}</a></li> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-x-16 my-10'>
                        {fitnessblogs.map((item) => (
                            <div key={item.id} >
                                <div className='flex justify-around gap-5 items-center  mb-3'>
                                    <div>
                                        <img className='w-full' src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-white text-xl font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                        {/* <p>{item.date}</p> */}
                                        <span className='flex justify-between items-center'>
                                            <li className='flex justify-start items-center text-2xl mt-2 text-red-900'> <MdOutlineDriveFileMoveRtl className='mr-3' /> <a className='hover:text-red-900 text-sm text-white' href="">{item.name}</a></li>
                                            <li className='list-none mt-2 text-xl text-white -ml-10 hover:text-red-900'> <a href=""> <AiOutlineHeart /> </a></li>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center my-10'>
                        <img src="https://i.ibb.co/WWt0mbC/adv.jpg" alt="" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;