import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BiLike} from 'react-icons/bi'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const ImageDetail = () => {


    const client_id = "glIJNIZjit6PCotuovR8r5ObtRUUktu5j9ndJhAmDHs";

    const params = useParams();
    console.log(params.id);
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const { data } = await axios.get(`https://api.unsplash.com/photos/${params.id}?client_id=${client_id}`);
                console.log(data);
                setImage(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        fetchImage()
    }, [params.id]);

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {
                loading ? (<p>Loading...</p>) : (
                    <div className='ring-4 ring-gray-300 flex flex-col justify-center relative'>
                    <div>
                        <img src={image.urls.full} alt={image.id} className='object-cover h-[500px] w-[500px]' />
                        <button className='absolute bottom-20 right-4 bg-green-700 p-2 rounded-md text-white font-semibold'>
                            <a href={image.links.download}> Download</a>
                        </button>
                        <button className='absolute bottom-20 left-4 ring-1 ring-gray-50 border-none p-2 rounded-md text-white font-semibold flex justify-center items-center gap-1'><AiOutlineShareAlt/>
                            <a href={""}> Share</a>
                        </button>
                        <button className='absolute bottom-20 left-24 ring-1 ring-gray-50 p-2 rounded-md text-white font-semibold flex justify-center items-center gap-1'><AiOutlineInfoCircle/>
                            <a href={""}>Info</a>
                        </button>
                    </div>
                        <div className='flex justify-around items-center border-t-2 border-gray-300 h-[65px]'>
                            <div className='flex justify-evenly items-center'>
                                <img src={image.user.profile_image.small} alt={image.id} className='object-contain rounded-full' />
                                <div className='text-sm'>
                                    <p>{image.user.name}</p>
                                    <p>@{image.user.username}</p>
                                </div>
                                <div>
                                 <p>{image.user.twitter_username}</p>
                                {image.user.twitter_username && <p>{image.user.twitter_username}</p>}
                            </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span><BiLike /></span>
                                <span>{image.user.total_likes}</span>
                            </div>
                            
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ImageDetail
