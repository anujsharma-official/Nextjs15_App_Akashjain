'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";


const testimonials = [
  {
    name: "Rahul Sharma",
    review: "First time ordering online and I’m impressed! The product quality is solid and delivery was right on time.",
    rating: 4
  },
  {
    name: "Neha Verma",
    review: "Ordered shoes and the design is stylish and comfortable, but the size chart could be a little more accurate.",
    rating: 3
  },
  {
    name: "Amit Singh",
    review: "Honestly didn’t expect it to be this good. stylithic fashions delivered great quality and the packaging was top-notch.",
    rating: 5
  },
  {
    name: "Priya Mehta",
    review: "Customer service was super helpful. Delivery was delayed a bit, but they kept me updated at every step.",
    rating: 4
  },
  {
    name: "Karan Gupta",
    review: "The prices are fair and the product was totally worth it. Definitely recommending to friends.",
    rating: 5
  },
  {
    name: "Sneha Iyer",
    review: "Loved the modern design and premium feel. Wish they had a few more color options though.",
    rating: 4
  },
  {
    name: "Vikram Yadav",
    review: "Ordered a T-shirt and it fits perfectly. The fabric feels great and delivery was super quick.",
    rating: 5
  },
  {
    name: "Anjali Kumari",
    review: "Product was decent for the price. Packaging could be improved a little, but I’m satisfied overall.",
    rating: 3
  },
  {
    name: "Rohit Patel",
    review: "Shopping on stylithic fashions was so smooth. Payment and delivery were hassle-free. Will shop again!",
    rating: 5
  },
  {
    name: "Simran Kaur",
    review: "The fabric quality and stitching are amazing. It went beyond my expectations.",
    rating: 5
  },
  {
    name: "Arjun Nair",
    review: "The site is super easy to use. Product was good, but delivery came a day late.",
    rating: 4
  },
  {
    name: "Megha Jain",
    review: "The product looked exactly like the pictures, which I loved! Totally trustworthy.",
    rating: 5
  },
  {
    name: "Sahil Kapoor",
    review: "Got sneakers and they’re really comfortable. Just wish they had one more size option available.",
    rating: 4
  },
  {
    name: "Ritu Agarwal",
    review: "Exchange process was quick and hassle-free. The support team responded instantly. Super impressed!",
    rating: 5
  },
  {
    name: "Aditya Chauhan",
    review: "The product from stylithic fashions is totally genuine. Been using it for two weeks and no issues at all.",
    rating: 5
  },
  {
    name: "Pooja Sinha",
    review: "Delivery was fast, but the packaging could be a bit more stylish. Still a good experience.",
    rating: 3
  },
  {
    name: "Harsh Malhotra",
    review: "Ordered a jacket and the quality is great. Feels totally worth the money.",
    rating: 5
  },
  {
    name: "Nisha Reddy",
    review: "Fabric quality is impressive. A few colors were out of stock, but overall I’m happy with my order.",
    rating: 4
  },
  {
    name: "Manish Tiwari",
    review: "stylithic fashions has won me over. Ordered twice already and both times the service was excellent.",
    rating: 5
  },
  {
    name: "Kavya Deshmukh",
    review: "Product was fine, but I feel the pricing could be a little lower. Service and delivery were solid though.",
    rating: 3
  },
  {
    name: "Rohini Sharma",
    review: "Loved the trendy collection. The outfit I got was exactly my vibe. Totally Instagram-worthy!",
    rating: 5
  },
  {
    name: "Devansh Kapoor",
    review: "The checkout process was super easy and quick. The product quality lived up to the hype.",
    rating: 4
  },
  {
    name: "Ishita Roy",
    review: "Bought a kurti and the fabric is lightweight and comfy. Would love faster delivery next time.",
    rating: 4
  },
  {
    name: "Rakesh Choudhary",
    review: "Good product, but delivery packaging wasn’t strong enough. Luckily the item was safe inside.",
    rating: 3
  },
  {
    name: "Ananya Ghosh",
    review: "stylithic fashions really surprised me. The detailing on the product was just perfect. Worth every penny!",
    rating: 5
  },
  {
    name: "Yuvraj Singh",
    review: "Decent experience overall. The product is fine, but I think customer service could respond a bit faster.",
    rating: 3
  },
  {
    name: "Pallavi Joshi",
    review: "Loved how easy it was to shop here. The collection is fresh and trendy. Highly recommend!",
    rating: 5
  },
  {
    name: "Mohit Agarwal",
    review: "The fit was amazing and fabric feels premium. Shipping was also faster than expected.",
    rating: 5
  },
  {
    name: "Shruti Nanda",
    review: "Good shopping experience overall. The item I got matched the description perfectly. Will try again soon.",
    rating: 4
  },
  {
    name: "Kabir Mehta",
    review: "The prices are fair and the quality is way better than I thought. stylithic fashions is now my go-to!",
    rating: 5
  },
  {
    name: "Tanvi Bansal",
    review: "Delivery was quick and hassle-free. Product looks premium. Just wish there were more discounts.",
    rating: 4
  }
];



const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },

        ]
    }

    return (
        <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10'>
            <h2 className='text-center sm:text-4xl text-2xl mb-5 font-semibold'>Customer Review</h2>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index} className="p-5">
                        <div className='border rounded-lg p-5'>
                            <BsChatQuote size={30} className='mb-3' />

                            <p className='mb-5'>{item.review}</p>
                            <h4 className='font-semibold'>{item.name}</h4>
                            <div className='flex mt-1'>
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <IoStar key={`star${i}`} className='text-yellow-400 mx-1' size={20} />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonial