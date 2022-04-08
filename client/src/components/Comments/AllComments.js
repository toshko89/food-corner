import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRestaurantComments } from "../../services/commentService.js";
import CommentCard from "./CommentCard.js";


export default function AllComments() {

  const [comments, setComments] = useState([]);
  const { state } = useLocation();
  const { id } = useParams();
  useEffect(() => {
    getRestaurantComments(id)
      .then(res => {
        setComments(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id])

  return (
    <div className="container position-relative" >
      <div className="row">
        <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
          <h2 className="mb-1">All Ratings and Reviews for {state}</h2>
          {comments.map(comment => <CommentCard key={comment._id} comment={comment} />)}
        </div>
      </div>
    </div>
  )
}