'use client'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // const res = await fetch("/api/review")
                const res = await fetch("/api/review", { cache: "no-store" })
                const data = await res.json()
                if (data.success) {
                    setReviews(data.data || [])
                }
            } catch (error) {
                console.error("Error fetching reviews:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchReviews()
    }, [])

    const settings = {
        dots: true,
        infinite: true, // infinite = false so it scrolls horizontally like a row
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: true,  
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: false }
            },
        ]
    }

    return (
        <div className="lg:px-32 px-4 sm:pt-20 pt-5 pb-10">
            <h2 className="text-center sm:text-4xl text-2xl mb-5 font-semibold">Customer Review</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading reviews...</p>
            ) : reviews.length === 0 ? (
                <p className="text-center text-gray-500">No reviews available.</p>
            ) : (
                <Slider {...settings}>
                    {reviews.map((item, index) => (
                        <div key={index} className="px-3"> {/* spacing between slides */}
                            <div className="border rounded-lg p-5 h-full flex flex-col justify-between">
                                <BsChatQuote size={30} className="mb-3 text-gray-600" />
                                <p className="mb-5 text-gray-700 leading-relaxed">{item.review}</p>
                                <h4 className="font-semibold">{item.user}</h4>
                                <div className="flex mt-1">
                                    {Array.from({ length: item.rating || 0 }).map((_, i) => (
                                        <IoStar key={`star-${i}`} className="text-yellow-400" size={20} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    )
}

export default Testimonial
