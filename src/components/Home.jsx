import React,{useEffect,useState} from 'react'
import CourseCard from './CourseCard'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
// import checkLoggedIn from "../utils/checkLoggedIn"

const Home = () => {
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("accessToken");
  const [courses,setCourses] = useState(null);
  const data = [
    {
      "id": "1",
      "title": "Javscript",
      "thumbnail": "/img1.jpeg",
      "description": "learn js",
      "author": "author no 1",
      "price": "10"
    },
    {
      "id": "2",
      "title": "Reactjs",
      "thumbnail": "/img2.jpeg",
      "description": "learn react",
      "author": "author no 2",
      "price": "20"
    },
    {
      "id": "3",
      "title": "Tailwind",
      "thumbnail": "/img3.webp",
      "description": "learn react",
      "author": "author no 3",
      "price": "30"
    },
    {
      "id": "4",
      "title": "Angular",
      "thumbnail": "/img4.jpeg",
      "description": "learn angular",
      "author": "author no 4",
      "price": "40"
    }
  ]
  
   const getAllCourses = async()=>{
    try {
      //api request to get all available course using GET 
      const response = await axios.get(`${apiURL}/course/dashboard`, {
        headers: {
          'Authorization': 'Bearer '+ token
        }
      });
      const data = response.data;
      setCourses(data.courses);

    } catch (error) {
      console.error(error);
    }
    
   }

    useEffect(() => {
      if(token){
          // getAllCourses();  
          
      }else{
          navigate("/login");
      }
      //eslint-disable-next-line
  }, []);
  
  const handleCourseSelect = ()=>{
    navigate("/course/:id");
  }

  return (
    
    <div className='mt-4'>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-5 ">Courses</h1>
      <div className='grid grid-cols-2 md:grid-cols-3'>

        {data ? data.map((course) => {
          return <div key={course.id} className='mx-auto'>
            
              <button type="button" onClick={handleCourseSelect} key={course.id}><CourseCard key={course.id} title={course.title} thumbnail={course.thumbnail} author={course.author} price={course.price} description={course.description}/></button>
            
          </div>
        })
          :
          <div>
            <h1 className='flex justify-center my-auto text-xl'>No courses available</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Home
