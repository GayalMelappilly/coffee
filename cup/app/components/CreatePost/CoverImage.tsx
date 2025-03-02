'use client'

import Image from 'next/image';
import React, { FC, useState } from 'react'
import Loading from '../Loading/Loading';
import Imageloading from '../Loading/Imageloading';

type Props = {
    image: string | null,
    setImage: (image: string) => void
}

const CoverImage: FC<Props> =  ({image, setImage}) => {

    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            const base64Image = reader.result as string;
            setUploading(true);

            try {
                const response = await fetch('/api/image-upload/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ image: base64Image }),
                });

                const data = await response.json();
                if (data.url) {
                    setImage(data.url);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            } finally {
                setUploading(false);
            }
        };
    };

    return (
        <div className='bg-white rounded-md p-10 h-[16rem] w-full sm:h-[20.1rem] items-end mx-auto sm:mx-0 sm:ml-5 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.19)]'>
            <div className='h-[120px] sm:h-[180px] relative'>
                {
                    image && (
                        <Image
                            src={image}
                            width={300}
                            height={100}
                            alt="Uploaded image"
                            onLoadingComplete={() => setLoading(false)}
                        />
                    )
                }
                { loading && (
                    <Imageloading />
                )}
            </div>
            <label className="relative inline-flex items-center justify-center p-4 mx-auto sm:mx-6 mt-4 px-20 py-0.5 overflow-hidden font-medium transition duration-300 ease-out border-1 border-red-500 rounded-md shadow-[inset_0px_2px_10px_1px_rgba(0,_0,_0,_0.2)] group">
                <span className="absolute -inset-x-1 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-1 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease font-normal">
                    Upload cover image
                </span>
                <span className="relative invisible">Button Text</span>
                <input
                    id="file-upload"
                    type="file"
                    className="relative w-10 invisible"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            console.log('File selected:', file);
                            setLoading(true)
                            handleImageUpload(e)
                        }
                    }}
                />
            </label>
        </div>
    )
}

export default CoverImage

