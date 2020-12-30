import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside class="sidebar">
        <nav class="sidebar__menu">
            <ul class="sidebar__list">
                <li>
                <NavLink className="sidebar__link" to="/aboutme">Обо мне</NavLink>
                </li>
                <li>
                    <a href="#1" class="sidebar__link">Мои знания</a>
                </li>
                <li>
                    <a href="#1" class="sidebar__link">Опыт работы</a>
                </li>
                <li>
                    <NavLink className="sidebar__link" to="/projects">Мои проекты</NavLink>
                </li>
                <li>
                    <a href="#1" class="sidebar__link">Увлечения</a>
                </li>
                <li>
                    <NavLink 
                        className="sidebar__link" 
                        to="/gallery"
                    >Галерея</NavLink>
                </li>
            </ul>
        </nav>
    </aside> 
    )
}

export default Sidebar;