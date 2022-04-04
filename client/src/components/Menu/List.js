import { memo } from "react";


const List = memo(({ category }) => {
  return (
    <div className="row m-0">
      <h6 className="p-3 m-0 bg-light w-100">{category}</h6>
      <div className="col-md-12 px-0 border-top"></div>
    </div>
  )
})

export default List;