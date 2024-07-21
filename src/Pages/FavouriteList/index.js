import { useDispatch, useSelector } from "react-redux";
import MovieCard from "Components/MovieCard";
import { Stack, Pagination } from "@mui/material";
import { useState } from "react";
import { Link } from "lucide-react";
import { addToRead, removeFromRead, removeMultipleFromWatchlist} from "Store/userSlice";
import { responsive } from "Utils/constants";
import Carousel from "react-multi-carousel";
import NoData from "Components/NoData";

export default function FavouriteList() {
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState([])

    const email = useSelector(state => state.user.email)

    let FavouriteList = useSelector(state => state.user.watchlist) || {};
    FavouriteList = FavouriteList[email] || []

    const totalResults = FavouriteList?.length || 0;
    const moviesPerPage = 5;

    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const paginatedMovies = FavouriteList.slice(startIndex, endIndex);


    let read = useSelector(state => state.user.Read) || {};
    read = read[email] || []

    const dispatch = useDispatch()

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleClick = (e, movie) => {
        e.stopPropagation()
        if (!selected.includes(movie?.imdbID)) {
            setSelected([...selected, movie?.imdbID])
        }
        else {
            setSelected(selected.filter(id => movie?.imdbID !== id))
        }
    }

    const handleRead = (e, movie) => {
        e.stopPropagation()
        dispatch(addToRead(movie));
    };

    const handleUnread = (e, movie) => {
        e.stopPropagation()
        dispatch(removeFromRead(movie.imdbID));
    };

    const handleDelete = () => {
        dispatch(removeMultipleFromWatchlist(selected))
        setSelected([]);
        const newTotalResults = totalResults - selected.length;
        const newPageCount = Math.ceil(newTotalResults / moviesPerPage);
        if (page > newPageCount) {
            setPage(newPageCount);
        }
    }
    
    return (
        <div>
            <div className="rounded-md bg-white p-4 border-2 border-primary text-[15px]">
                <h2 className="text-3xl">This is your <span className="text-primary">WatchLists</span></h2>
                <p className="mt-4">
                    Browse movies, add them to watchlists and share them with friends.<br />
                    <div className="flex flex-wrap items-center">
                        <span>Just click the&nbsp;</span>
                        <span className="flex items-center">
                            <Link size={32} />
                        </span>
                        <span>&nbsp;to see details of the movie, click on the card to select  or to mark the movie as watched.</span>
                    </div>
                </p>
            </div>

            {
                selected?.length
                    ?
                    <button className=" rounded-md bg-primary p-2 text-white mt-1" onClick={handleDelete}>delete</button>
                    :
                    <button className=" rounded-md bg-white p-2 text-white mt-1">delete</button>
            }
            {
                FavouriteList?.length
                    ?
                    <div className='max-w-[100%] grid overflow-x-hidden'>
                        <Carousel responsive={responsive}>
                            {paginatedMovies.map((movie) => (
                                <MovieCard
                                    key={movie.imdbID}
                                    movie={movie}
                                    handleClick={(e) => handleClick(e, movie)}
                                    selected={selected.includes(movie?.imdbID)}
                                    read={true}
                                    handleRead={(e) => handleRead(e, movie)}
                                    handleUnread={(e) => handleUnread(e, movie)}
                                    inRead={read?.some(w => w.imdbID === movie.imdbID)}
                                />
                            ))}
                        </Carousel>
                    </div>
                    :
                    <NoData message="No movies in your favourite list"/>
            }
            {totalResults > moviesPerPage && (
                <Stack spacing={2} alignItems="center">
                    <Pagination
                        count={Math.ceil(totalResults / moviesPerPage)}
                        page={page}
                        onChange={handlePageChange}
                    />
                </Stack>
            )}
        </div>
    );
}
