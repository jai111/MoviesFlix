import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookmarkPlus, Check, CheckCheckIcon, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MovieCard({
  movie,
  inWatchlist,
  handleClick,
  handleRemove,
  handleAdd,
  selected,
  read,
  handleRead,
  handleUnread,
  inRead
}) {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (

    <div
      className={`rounded-md shadow-lg border m-2 w-full text-[12px] cursor-pointer ${
        selected
        ?
        'opacity-[0.5]'
        :
        ''
      }`}
      onClick={handleClick}
    >
      {
        !read
          ?
          <span className='absolute ml-[-7px] mt-[-4px] cursor-pointer'>
            {
              inWatchlist ? (
                <BookmarkPlus fill="green" onClick={handleRemove} className='text-white' strokeWidth={1} size={40} />
              )
                :
                (
                  <BookmarkPlus fill="black" onClick={handleAdd} className='text-white' strokeWidth={1} size={40} />
                )
            }
          </span>
          :
          null
      }
      {
        selected
        ?
        <Check className='absolute text-white' size={32}/>
        :
        null
      }
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full rounded-md h-[250px] object-cover max-h-[250px]"
        loading='lazy'
      />
      <div className="mt-4 p-1 flex flex-col justify-center items-center">
        <h3 className="font-bold">{movie.Title}</h3>
        <p>{movie.Year}</p>
        {
        <div className='flex mt-3 mb-3'>
          {
            inRead
            ?
            <button className="ml-4 rounded-md bg-[#22c55e] p-2 text-white" onClick={handleUnread}>Mark as unread</button>
            :
            <button className="ml-4 rounded-md bg-primary p-2 text-white" onClick={handleRead}>Mark as read</button>
          }
          <Link className='ml-[10px] mt-1 cursor-pointer' onClick={()=>navigate(`/${movie?.imdbID}`)}/>
        </div>
      }
      </div>
    </div>
  );
}

export default MovieCard;
