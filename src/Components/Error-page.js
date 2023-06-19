import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    //console.error(error);
    return (
        <div>
            <div id="error-page">
                <div>
                    <h1>
                        404
                    </h1>
                    <div>
                        Page Not Found
                    </div>
                    <button className="mt-5">
                        <a>
                            <span></span>

                            <span>
                                <Link to="/">Go Home</Link>
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
