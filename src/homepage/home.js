import imageone from '../assets/fruit.jpeg'
import imagetwo from '../assets/sandwich.jpeg'

export const Home = () => {
    return (
        <div className="container-fluid">
            <h6 className="display-2">Garden City</h6>
            <p className="text-muted">Improving Homes</p>
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-body">
                        <img src={imageone} className="card-img-top img-fluid" alt="Error" />
                        <p className="card-text">
                            It is a long established fact that a reader will be distracted by the 
                            readable content of a page when looking at its layout. The point of 
                            using Lorem Ipsum is that it has a more-or-less normal distribution 
                            of letters, as opposed to using 'Content here, content here', making 
                            it look like readable English. Many desktop publishing packages and 
                            web page editors now use Lorem Ipsum as their default model text, and
                            a search for 'lorem ipsum' will uncover many web sites.
                        </p>
                    </div>
                </div>
                <div className="card col-md-4">
                    <div className="card-body">
                        <img src={imagetwo} className="card-img-top img-fluid" alt="Error" />
                        <p className="card-text">
                            It is a long established fact that a reader will be distracted by the 
                            readable content of a page when looking at its layout. The point of 
                            using Lorem Ipsum is that it has a more-or-less normal distribution 
                            of letters, as opposed to using 'Content here, content here'.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};