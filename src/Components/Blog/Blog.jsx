import { FaBookmark } from 'react-icons/fa';

import PropTypes from 'prop-types'; 
const Blog = ({blog , handleAddToBookmark , handleMarkAsRead}) => {

    const {title , cover, author ,author_img ,posted_date ,reading_time ,
        hashtags} = blog ;
    console.log(blog)
    return (
        <div className='mb-20'>

<img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />

<div className='flex justify-between mb-4'>
    <div className='flex gap-5'>

        <img className='w-14' src={author_img} alt="" />

        <div>

            <h3 className='text-2xl'> {author} </h3>

        <p> {posted_date} </p>

        </div>



       

    </div>

    <div>

        <span> {reading_time} min read </span>

        <button onClick={ () => handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'>
             <FaBookmark></FaBookmark>
              </button>

    </div>
</div>
            <h4 className="text-2xl">{title}</h4>
            <p>
                {
                  hashtags.map((hash , idx) => <span key={idx} > <a href=""> #{hash} </a>  </span>)
                
                }
            </p>

            <button onClick={ () => handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>
                Mark as Read 
            </button>
            
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,

    handleAddToBookmark:PropTypes.func.isRequired,

    handleMarkAsRead :PropTypes.func

}

export default Blog;