import React from "react";
import { Link } from "react-router-dom";

const WishlistCard = (props) => {
  const { title, author, description, id } = props;
  return (
    
    <div className="mx-6">
      <Link to={`/course/${id}`} >
        <div className="flex flex-row shadow-md my-4 rounded-lg overflow-hidden border-2 border-black mx-auto">
          <div className="">
            <img
              className="object-cover w-36 sm:w-56 md:w-64 lg:w-80 h-28 sm:h-36 md:h-42 lg:h-52"
              src=""
              alt=""
            />
          </div>
          <div className="mx-3 mt-2">
            <h1 className="font-bold text-left text-2xl my-1">{title}</h1>
            <h3 className="text-sm text-left text-slate-500 hidden md:block my-1">
              By {author}
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WishlistCard;
