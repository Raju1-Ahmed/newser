import { useState } from 'react';
import { FaCalendar, FaComment } from "react-icons/fa";

function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                    {items.map((item, index) => (
                         <button
                         key={index}
                         className={`${index === activeIndex
                                 ? 'border-indigo-500 text-indigo-600'
                                 : 'border-transparent text-white hover:text-gray-700 hover:border-gray-300'
                             } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                             `}
                         onClick={() => handleClick(index)}
                     >
                         {item.label}
                     </button>
                    ))}
                </nav>
            </div>
            {/* <div className="mt-4">{items[activeIndex].content}</div> */}
            <div className='flex justify-around gap-5 items-center  mb-3'>
                <div>
                    <img className='w-full' src={items[activeIndex].image} alt="" />
                </div>
                <div>
                    <h2 className='text-white text-sm text-left'>{items[activeIndex].title}</h2>
                    {/* <p>{item.date}</p> */}
                    <li className='flex justify-start items-center mt-1'> <FaCalendar className='mr-3' /> <a href="">{items[activeIndex].date}</a></li>
                    <li className='flex justify-start items-center mt-1'> <FaComment className='mr-3' /> <a href="">{items[activeIndex].comment} comment</a></li>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
