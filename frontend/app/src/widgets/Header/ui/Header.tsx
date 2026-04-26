import type { FC } from "react"
import './styles/Header.css'
import GreenArrowIcon from "../../../shared/assets/icons/GreenArrowIcon"
import HeaderLink from "./HeaderLink"
import GamepadIcon from "../../../shared/assets/icons/GamepadIcon"
import NewsIcon from "../../../shared/assets/icons/NewsIcon"
import ProfileIcon from "../../../shared/assets/icons/ProfileIcon"
import BackgroundAnimation from "../../BackgroundAnimation/ui/BackgroundAnimation"

const Header: FC<{}> = () => {
	return (
		<>
			<h1 className="logo">
				<span className="big-symbol">К</span>ома игры
			</h1>
			<nav>
				<BackgroundAnimation>
					<div className="nav-content">
						<HeaderLink to="/" label="Игры" icon={<GamepadIcon />} />
						<HeaderLink to="/news" label="Новости" icon={<NewsIcon />} />
						<HeaderLink to="/profile" label="Профиль" icon={<ProfileIcon />} />
					</div>
				</BackgroundAnimation>
				<div className="nav-hiding">
					{
						Array.from({ length: 5 }).map((_, index) => <GreenArrowIcon key={index} />)
					}
				</div>
			</nav>
		</>
	)
}

export default Header