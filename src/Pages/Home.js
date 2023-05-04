import React from 'react';
import { SlCalender, } from "react-icons/sl";
import { BiMessageMinus, BiComment } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import Tabs from '../Components/Tabs';
import Article from './Article';
import Aside from './Aside';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// Initialization for ES Users

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
const tags = [
    {
        id: 1,
        tag: 'Basketball '
    },
    {
        id: 2,
        tag: ' Fashion '
    },
    {
        id: 3,
        tag: ' Fitness'
    },
    {
        id: 4,
        tag: ' Food '
    },
    {
        id: 5,
        tag: '  Football'
    },
    {
        id: 6,
        tag: '  Food'
    },
    {
        id: 7,
        tag: '   Gadgets '
    },
    {
        id: 8,
        tag: '   Lifestyle '
    },
    {
        id: 9,
        tag: '   Mobile  '
    },
    {
        id: 10,
        tag: 'Moto GP'
    },
    {
        id: 11,
        tag: 'Security '
    },
    {
        id: 12,
        tag: 'Photography'
    },
    {
        id: 13,
        tag: 'Sports '
    },
    {
        id: 14,
        tag: ' Technology Video '
    },
]

const allnews = [
    {
        id: 1,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg',
        title: 'Being a rock-star is a matter of',
        name: 'motoGp',
        date: 'Oct 20, 2016'
    },
    {
        id: 2,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-430x315.jpg',
        title: 'The art of racing with speed – Motor GP',
        name: 'motos Gp',
        date: 'Nov 12, 2028'
    },
    {
        id: 3,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-430x315.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        name: 'Mobile',
        date: 'Dec 23, 2015'
    },
    {
        id: 4,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/video-img15-430x315.jpg',
        title: 'Improve and monitor fingerprint technology',
        name: 'Busketball',
        date: 'Feb 11, 2019'
    },
    {
        id: 5,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-430x315.jpg',
        title: 'tic ways to improve your daily fitness',
        name: 'DipoBall',
        date: 'Nov 31, 2018'
    },
    {
        id: 6,
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-7-430x315.jpg',
        title: 'Home team takes the win – NBA 2016',
        name: 'Hot News',
        date: 'Nov 31, 2018'
    },
]
const items = [
    {
        id: 1,
        label: 'Recent',
        image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
        title: 'The art of racing with speed-Motoe Gp',
        date: 'Oct 20, 2016',
        comment: '120'
    },
    {
        id: 2,
        label: 'Trending',
        image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
        title: 'They back return to you Kennedy Darlings',
        date: 'Nov 12, 2028',
        comment: '34'

    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        date: 'Dec 23, 2015',
        comment: '321'
    },
]
const dataItems = [
    {
        id: 1,
        label: 'Recent',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-28-130x80.jpg',
        title: 'Chinese food ingredients – What Chinese eat',
        date: 'Oct 20, 2016',
        comment: '120'
    },
    {
        id: 2,
        label: 'Trending',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        date: 'Nov 12, 2028',
        comment: '34'

    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-21-130x80.jpg',
        title: 'Effective ways to get more out of basketball',
        date: 'Dec 23, 2015',
        comment: '321'
    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-29-130x80.jpg',
        title: 'Healthy fish recipes for crazy-busy week nights',
        date: 'Oct 17, 2016',
        comment: '321'
    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-20-130x80.jpg',
        title: 'NBA Schedule: Times, TV Listings for Oct',
        date: 'Dec 17, 2019',
        comment: '321'
    },
    {
        id: 3,
        label: ' Most Liked',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/post-276-130x80.jpg',
        title: 'Top ten and Best Beauty Looks for this year',
        date: 'Oct 19, 2016',
        comment: '321'
    },
]
const sportsBlog = [
    {
        id: 1,
        label: 'Recent',
        title: 'Being a rock-star is a matter of fashion',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-270x170.jpg',
        profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/s2-70x70.jpg',
        desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
        date: 'Oct 20, 2016',
        comment: '120'
    },
    {
        id: 2,
        label: 'Recent',
        title: 'The art of racing with speed – Motor GP',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-270x170.jpg',
        profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg',
        desc: 'Being a food lover always Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper…',
        date: 'Oct 3, 2014',
        comment: '12'
    },
    {
        id: 3,
        label: ' Most Liked',
        title: 'Facts should know about stuffed peppers',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
        profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author2-70x70.jpg',
        desc: 'One of my best photos Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper…',
        date: 'Dec 23, 2015',
        comment: '31'
    },
    {
        id: 4,
        label: ' Most Liked',
        profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/video-img15-270x170.jpg',
        title: 'They back return to you Kennedy Darlings',
        desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
        date: 'Oct 17, 2016',
        comment: '21'
    },
    {
        id: 5,
        label: ' Most Liked',
        profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
        image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-270x170.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
        date: 'Dec 17, 2019',
        comment: '32'
    }
]
//     {
//       label: 'Tab 1',
//       content: <p>This is the content of Tab 1</p>,
//     },
//     {
//       label: 'Tab 2',
//       content: <p>This is the content of Tab 2</p>,
//     },
//     {
//       label: 'Tab 3',
//       content: <p>This is the content of Tab 3</p>,
//     },
//   ];
const Home = () => {

    return (
        <div className='container mx-auto '>
            {/*========================= start fast section  =================*/}
            <div className='flex justify-center gap-3 items-center my-6'>
                <div className=''>
                    <div className='relative'><img className='hover:scale-95 transition duration-300 ease-in-out ' src="https://i.ibb.co/tL5ymLy/post-1-550x200.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2'>
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                            <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                            <h2 className='text-white text-xl font-black -ml-44'>Beign a Rock-Star is a matter of fashion</h2>
                        </div>
                    </div>
                    <div className='flex justify-start gap-3 items-center mt-3'>
                        <div className='relative'>
                            <img className='w-[275px]  hover:scale-95 transition duration-300 ease-in-out' src="https://i.ibb.co/gZs3Jrb/post-31-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 left-1/2'>
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                                <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                                <h2 className='text-white text-sm font-black -ml-32'>Beign a Rock-Star is a matter of fashion</h2>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='w-[275px]  hover:scale-95 transition duration-300 ease-in-out' src="https://i.ibb.co/ggCjFck/post-2-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 left-1/2'>
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                                <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                                <h2 className='text-white text-sm font-black -ml-32'>Beign a Rock-Star is a matter of fashion</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='hover:scale-95 transition duration-300 ease-in-out' src="https://i.ibb.co/jTmdZ5j/video-img15-550x400.jpg" alt="" />
                    <div className='absolute top-1/2 left-1/2'>
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/30/FFFFFF/external-video-recorder-blogger-and-influencer-xnimrodx-lineal-xnimrodx.png" />
                        <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                        <h2 className='text-white text-xl font-black -ml-44'>Beign a Rock-Star is a matter of fashion</h2>
                        <div className='flex justify-start -ml-24 mt-2 items-center'>
                            <div className='flex items-center'>
                                <img src="https://img.icons8.com/windows/32/FFFFFF/person-male.png" />
                                <h2 className='text-white text-sm'>Masum Rana</h2>
                            </div>
                            <div className='flex items-center ml-5'>
                                <img src="https://img.icons8.com/material-outlined/24/FFFFFF/calendar--v1.png" />
                                <h2 className='text-white text-sm'>1/12/2023</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*========================= Second container start Here.. =================*/}
            <div className='grid grid-cols-12 gap-x-5 '>
                <div className='col-span-8'>
                    <Article />
                </div>
                <div className='col-span-4' >
                    <Aside />
                </div>
            </div>


            <div className='mx-auto my-10'>
                <div class="grid grid-cols-12 mx-auto gap-x-3">
                    <div className='col-span-3'>
                        <div className='relative'>
                            <img className='hover:scale-95 mb-6 h-44 w-full transition duration-300 ease-in-out ' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-10 -mt-8'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Fashion</button>
                                <h2 className='text-white text-start text-xl font-black'>Being a rock-star is a matter of fashion</h2>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='hover:scale-95  h-44 w-full transition duration-300 ease-in-out ' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-10 -mt-8'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Motor GP</button>
                                <h2 className='text-white text-start text-xl font-black'>The art of racing with speed – Motor GP</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-5 ">
                        <div className='relative'>
                            <img className='h-auto w-full rounded-lg hover:scale-95 transition duration-300 ease-in-out' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 ml-32 -mt-16'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Food</button>
                                <h2 className='text-white text-start text-xl font-black'>Facts should know about stuffed peppers</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3' >
                        <div className='relative'>
                            <img className='h-44 w-full mb-6  rounded-lg hover:scale-95 transition duration-300 ease-in-out' src="https://i.ibb.co/jTmdZ5j/video-img15-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 ml-5 -mt-9'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Mobile</button>
                                <h2 className='text-white text-start text-xl font-black'>They back return to you Kennedy Darlings</h2>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='h-44 w-full rounded-lg hover:scale-95 transition duration-300 ease-in-out' src="https://i.ibb.co/DLXRK8y/post-23-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-5 -mt-9'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Fitness</button>
                                <h2 className='text-white text-start text-xl font-black'>8 Fantastic ways to improve your daily fitness</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex justify-around gap-10 items-center'>
                <div>
                    <div>
                        <h2 className='text-white bg-yellow-800 inline-block p-1 text-start'>Food & Packinges</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-430x315.jpg" alt="" />
                        <div className='absolute gap-x-72 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-3 bg-red-700 p-1'>Fashion </h2>
                            <GrGallery className='text-3xl text-white bg-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-xl'>Facts should know about stuffed peppers</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-white bg-green-800 inline-block p-1 text-start'>Photography</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg" alt="" />
                        <div className='absolute gap-x-72 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-3 bg-red-700 p-1'>Fashion </h2>
                            <GrGallery className='text-3xl text-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-xl'>Being a rock-star is a matter of fashion</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-black text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-red-700' /> <a className='text-black text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-red-700' /> <a className='text-black text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-white bg-red-800 inline-block  p-1 text-start'>NBA - Basketball</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-7-430x315.jpg" alt="" />
                        <div className='absolute gap-x-52 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-4 bg-red-700 p-1'>Basketball </h2>
                            <GrGallery className='text-3xl ml-5 text-white bg-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-xl'>Home team takes the win – NBA 2016</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/s2-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white bg-red-600' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-10'>
                <div className='grid grid-cols-3 gap-10 '>
                    {dataItems.map((item) => (
                        <div key={item.id} >
                            <div className='flex justify-around gap-5 items-center  mb-3'>
                                <div>
                                    <img className='w-full' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-white text-sm font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                    {/* <p>{item.date}</p> */}
                                    <span className='flex justify-between items-center'>
                                        <li className='flex justify-start items-center text-xl mt-2 text-white'> <SlCalender className='mr-3' /> <a className='hover:text-red-900 text-sm text-white' href="">{item.date}</a></li>
                                        {/* <li className='list-none mt-2 text-xl text-white -ml-10 hover:text-red-900'> <a href=""> <AiOutlineHeart /> </a></li> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ==============================sports news ========================= */}
            <div className='my-10'>
                <div className='grid grid-cols-12 gap-x-5 '>
                    <div className='col-span-8'>
                        <div>
                            <div>
                                <h2 className='text-white bg-yellow-800 inline-block  p-1 text-start'>sports News</h2>
                                <hr />
                            </div>
                            <div className='mt-7'>
                                {sportsBlog.map((item) => (
                                    <div key={item.id} >
                                        <div className='flex justify-center mb-12 items-center '>
                                            <div className='w-1/2' >
                                                <img className='w-full h-40' src={item.image} alt="" />
                                            </div>
                                            <div className='ml-5'>
                                                <h2 className='text-white text-xl font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                                {/* <p>{item.date}</p> */}
                                                <span className='flex justify-start my-3  items-center'>
                                                    <li className='flex  items-center text-xl text-white'> <img className='rounded-full mr-2 w-8' src={item.profile} alt="" /> <a className='text-sm text-white' href="">{item.label}</a></li>
                                                    <li className='list-none flex items-center mx-3 '> <SlCalender className='text-white' /> <a className='text-sm ml-3' href="">{item.date} </a></li>
                                                    <li className='list-none flex items-center '> <BiComment className='text-white' /> <a className='text-sm ml-3' href="">{item.comment} </a></li>
                                                </span>
                                                <p className='text-white text-sm text-left'>{item.desc}</p>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* ==============================sports news start========================= */}
                      
                    </div>
                    <div className='col-span-4'>
                        <div>
                            <h2 className='text-white  inline-block  p-1 text-start'> LATEST POSTS</h2>
                            <hr />
                        </div>
                        <div className='mt-7'>
                            {dataItems.map((item) => (
                                <div key={item.id} >
                                    <div className='flex justify-around items-center  mb-10'>
                                        <div className='w-1/3 mr-0'>
                                            <img className='w-32' src={item.image} alt="" />
                                        </div>
                                        <div className='ml-4'>
                                            <h2 className='text-white text-sm font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                            <li className='flex justify-start items-center  mt-2 text-red-600'> <SlCalender className='mr-3' /> <a className='hover:text-red-900 text-sm text-white' href="">{item.date}</a></li>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-x-5 '>
                <div className='col-span-8'>
                    {/* ==============================sports news start========================= */}
                    <div>
                            <div>
                                <h2 className='text-white bg-yellow-800 inline-block  p-1 text-start'>All News</h2>
                                <hr />
                            </div>
                        </div>
                    <div className='grid grid-cols-2 gap-5 '>
                        {allnews.map((item) => (
                            <div key={item.id} >
                                <div className='relative mt-7'>
                                    <img src={item.image} alt="" />
                                    <div className='absolute gap-x-72 mt-5 top-0 flex justify-between'>
                                        <h2 className='text-white ml-3 bg-red-700 p-1'>{item.name} </h2>
                                        <GrGallery className='text-3xl text-white bg-white' />
                                    </div>
                                    <div className='absolute bottom-0 '>
                                        <h2 className='text-white text-left ml-3 mb-2 text-xl'>{item.title}</h2>
                                        {/* <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                                            </ul> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-4'>
                    {/* ==============================tag news start========================= */}
                    <div>
                        <div>
                            <h2 className='text-white  inline-block  p-1 text-start'> TAG</h2>
                            <hr />
                        </div>
                        <div className='grid grid-cols-4 gap-2 mt-7'>
                            {tags.map((item) => (
                                <div key={item.id} >
                                    <li className='list-none bg-red-600 text-white p-2'><a href="">{item.tag}</a></li>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ==============================tag news end========================= */}
                </div>
            </div>
        </div >
    );
};

export default Home;
