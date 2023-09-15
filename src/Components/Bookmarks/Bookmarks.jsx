
import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks ,readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-200'>

            <h3 className="text-4xl">Reading time ; {readingTime}</h3>

            <h2 className='text-3xl text-center '> Bookmarked Blogs : {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark ,idx) => <Bookmark 
                    key={idx}

                     bookmark={bookmark}> 
                     </Bookmark>)

            }
        </div>
    );
};

Bookmarks.propTypes = {
bookmarks: PropTypes.array,
reading_time : PropTypes.number
}

export default Bookmarks;