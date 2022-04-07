

export default function AllComments() {

  return (
    <div className="container position-relative" >
      <div className="row">
        <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
          <h2 className="mb-1">All Ratings and Reviews</h2>
          <div className="reviews-members py-3">
            <div className="media">
              <div className="media-body">
                <div className="reviews-members-header">
                  <div className="star-rating float-right">
                    
                  </div>
                  <h5 className="mb-0"><a className="text-dark" href="#">Jhon Smith</a></h5>
                  <p className="text-muted large">Tue, 20 Mar 2020</p>
                </div>
                <div className="text-muted large">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}