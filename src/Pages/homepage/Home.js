import { NavLink } from "react-router-dom";

function Home() {
    return (
        <section>
            <p>HI ! I am home !</p>
            <NavLink to='/user/12'>Check User 12</NavLink>
            <NavLink to='/user/18'>Check User 18</NavLink>
        </section>
    );
}

export default Home;