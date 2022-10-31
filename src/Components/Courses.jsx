import data from "../data"

const Courses = () => {
  return (
    <div className="container text-center">
        <h1>OUR COURSES</h1>
        <div className="row d-flex justify-content-center">
            {data.map((item)=> {
                const {id,name,text,img}= item
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={id}>
                        <img src={img} alt="" width="200rem" />
                        <h3>{name}</h3>
                        <p>{text}</p>
                        <button className="btn btn-danger">Detail</button>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default Courses;
