import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import WishlistCard from "./WishlistCard";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const wishlist = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [wishlist, setWishList] = useState(null);

  const getUserWishList = async () => {
    try {
      const response = await axios.get(`${apiURL}/actions/get-watchlist`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = response.data;
      setWishList(data.watchlist);
    } catch (error) {
      alert("Internal server error");
    }
  };

  useEffect(() => {
    if (token) {
      getUserWishList();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-slate-100 rounded-xl mt-4 mx-3">
      <div className="block md:hidden">
        {wishlist ? (
          <Carousel>
            <CarouselContent>
              {wishlist.map((course) => {
                return (
                  <CarouselItem
                    key={course.courseId}
                    className="md:basis-1/2 lg:basis-1/3 my-auto"
                  >
                    <Link to={`/course/${course.courseId}`}>
                      <WishlistCard
                        title={course.title}
                        author={course.author}
                        description={course.description}
                      />
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        ) : (
          <h1>Loading / No courses available</h1>
        )}
      </div>

      <div className="hidden md:block py-2">
      <ScrollArea className="h-[500px] rounded-md border p-4">
        {wishlist ? (
          wishlist.map((course) => {
            return (
              // <Link to={`/course/${course.courseId}`}>
              
                <WishlistCard
                  key={course.courseId}
                  id={course.courseId}
                  title={course.title}
                  author={course.author}
                  description={course.description}
                />
              // </Link>
            );
          })
        ) : (
          <h1>Loading / No courses available</h1>
        )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default wishlist;
