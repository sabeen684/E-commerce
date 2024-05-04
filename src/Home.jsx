import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
  return (
    <> 
                <Carousel>
                <div>
                    <img src="\Images\adobestock_491463943-800x480.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="\Images\college.webp" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="\Images\shegstory_0.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div className="flex ">
              <div className="w-[50%] p-5"><p className='underline font-bold text-3xl'>About Our School</p>
              <p className='text-xl font-serif'>The Acme Academy is located at the heart of the Kathmandu Valley making it a suitable pick for parents seeking an easy commute for their children. We are offering what is perhaps the most affordable learning package for our children with the addition of extra curricular activities so the children may seek out and specialise in their areas of interest in music, dance and sports. As of Baisakh 2080, our management team has grown with the guidance and leadership of seasoned professionals with 40+ years of experience in education. Our capable management team believes that quality education and grooming can be provided with an emphasis on a learned and well-trained team of teaching faculties at a financially reasonable cost to the parents. </p>
              <p className='font-bold p-8 text-xl'>“THE EVOLUTION OF THE ACME ACADEMY IS AT HAND!”</p>
              <button className='m-auto py-3 px-5 mx-8 border rounded bg-red-500 hover:bg-blue-600 text-white'>Read More </button>
              </div>
              <div className="img w-[50%]">
                <img src="/Images/college.webp" alt="" />
              </div>
            </div>
 


    </>
  )
}

export default Home