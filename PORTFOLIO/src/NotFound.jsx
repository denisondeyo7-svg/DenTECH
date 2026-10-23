import{ Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className="notfound">

            <p className="error-code">ERROR 404</p>

            <h1>PAGE NOT FOUND<span>_</span></h1>

            <Link to="/" className="error-message">
                Go back home <i className='fas fa-arrow-left'></i>
            </Link>

        </div>
    );
}

export default NotFound;