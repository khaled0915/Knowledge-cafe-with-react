
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const [bookmarks , setbookmarks]  = useState([])

  const [readingTime , setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {

    console.log('bookmark adding')
    console.log(blog)

    const newBookmarks = [...bookmarks , blog]
    setbookmarks(newBookmarks)
  }

const handleMarkAsRead = (id , time) => {
  console.log('reading time',time )
  setReadingTime(readingTime + time)

  // remove the read blog from bookmark

  // console.log('remove' , id)

  const remainingBookMarks = bookmarks.filter( bookmark => bookmark.id !==id)

setbookmarks(remainingBookMarks)

}

 


  return (
    <>
      
     <Header></Header>

    <div className='md:flex max-w-7xl mx-auto'>


    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
