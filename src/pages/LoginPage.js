import Body from '../components/Body';
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <Body sidebar>
            <h1>Login form</h1>
            <p>TODO</p>
            <p><Link to="/register">Register here</Link>!</p>
        </Body>
    );
}