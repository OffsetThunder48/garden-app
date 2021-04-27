export const Login = () => {
    return (
        <form className="container d-flex flex-column justify-content-center align-items-center">
            <div className="form-group col-md-6">
                <label htmlFor="email">Username</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email ID" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <div className="form-check form-group-inline">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Remember Me</label>
            </div>
            <button type="button" className="btn btn-success col-md-3">Login</button>
        </form>
    );
};