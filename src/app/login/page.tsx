import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label><br/>
            <input id="email" name="email" type="email" required/><br/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input id="password" name="password" type="password" required/><br/><br/>
            <button formAction={login} className="btn">Log in</button> &nbsp;
            <button formAction={signup} className="btn">Sign up</button>
        </form>
    )
}