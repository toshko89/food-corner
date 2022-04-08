import formatDate from "../../utils/dateFormat.js";

export default function CommentCard({ comment }) {
  return (
    <div className="reviews-members py-3">
      <div className="media">
        <div className="media-body">
          <div className="reviews-members-header">
            <h5 className="mb-0">{comment.name}</h5>
            <p className="text-muted large">{formatDate(comment.date)}</p>
          </div>
          <div className="text-muted large">
            <p>{comment.comment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}