import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="nav">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="/invoices">Invoices</a>
                <a className="nav-link" href="/register">Register</a>
                <a className="nav-link disabled">Disabled</a>

            </nav>
        </div>
    );
}

export default Header;