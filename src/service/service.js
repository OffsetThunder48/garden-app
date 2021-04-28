import './service.css'

export const Services = () => {
    return (
        <div className="container">
            <h3 className="display-2">Services we Offer</h3>
            <hr />
            <p>
                We Offer various services related to Vegetable gardening. Due to the ongoing COVID-19 pandemic,
                we foresaw that there would be a vegetable shortage, and saw an opprtunity to provide a invaluable
                service to people. Vegetable gardening serves a two pronged purpose - it helps people procure their daily
                essentials and it serves as a hobby in theese troubling times.
            </p>
            <p className="lead">Some of the sevices we offer are:</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Crop Cycle Planning</li>
                <li className="list-group-item">Space Engineering</li>
                <li className="list-group-item">Labour</li>
                <li className="list-group-item">Irrigation Systems</li>
                <li className="list-group-item">Manure/Organic Pesticides</li>
                <li className="list-group-item">Required Implements</li>
            </ul>
        </div>
    );
};