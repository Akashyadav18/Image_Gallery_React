import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi'
import Btn from './Btn';

const getFilteredItems = (search, images) => {
    if (!search) {
        return images;
    }
    return images.filter(item => item.alt_description.includes(search));
}

const Images = () => {

    const client_id = "glIJNIZjit6PCotuovR8r5ObtRUUktu5j9ndJhAmDHs";

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("Animal");
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState('');

    const filteredItems = getFilteredItems(search, images);
    console.log("search :", filteredItems);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${client_id}`);
                console.log(data.results);
                setImages(data.results);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        fetchImages();
    }, [page, query]);


    return (
        <div className=''>
            <div>
                <img src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
                    alt='img' className='object-cover w-full h-[350px] relative my-6' />
                <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='border-2 border-gray-500 text-red-500 font-semibold text-xl w-[400px] rounded-md p-2 absolute top-[20px] lg:left-[320px] md:left-[100px]' />
            </div>
            <Btn handleQuery={query} handleSetQuery={setQuery}/>
            {loading ? (<p>Loading...</p>) : (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-5'>

                    {
                        filteredItems.map((image) => (
                            <div key={image.id} className='ring-2 ring-gray-300 rounded-md cursor-pointer'>
                                <Link to={`${image.id}`} target='blank'>

                                    <img src={image.urls.full} alt={image.id} className='w-[310px] h-[300px] object-cover md:object-cover rounded-md' />
                                    <p className='text-sm hidden'>{image.alt_description}</p>
                                    <div className='flex justify-around items-center h-[80px]'>
                                        <div className='flex justify-evenly items-center'>
                                            <img src={image.user.profile_image.small} alt={image.id} className='object-contain rounded-full' />
                                            <div className='text-sm'>
                                                <p>{image.user.name}</p>
                                                <p>@{image.user.username}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span><BiLike /></span>
                                            <span>{image.likes}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            )}
            <div className='flex flex-row justify-around items-center m-5'>
                {page > 1 && <button className='ring-2 ring-gray-200 p-3 bg-black text-white font-semibold' onClick={() => setPage(page - 1)}>{`Previous ${page - 1}`}</button>}
                <button className='ring-2 ring-gray-200 p-3 bg-black text-white font-semibold' onClick={() => setPage(page + 1)}>{`Next ${page + 1}`}</button>
            </div>

        </div>
    )
}

export default Images
