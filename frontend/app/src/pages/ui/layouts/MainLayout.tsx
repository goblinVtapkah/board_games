import type { FC } from "react"
import { Outlet } from "react-router-dom"
import './styles/MainLayout.css'
import Header from "../../../widgets/Header/ui/Header"
import BackgroundAnimation from "../../../widgets/BackgroundAnimation/ui/BackgroundAnimation"

const MainLayout: FC<{}> = () => {
	return (
		<div className="main-layout-wrapper">
			<header>
				<div className="header-content-wrapper">
					<div className="header-content">
						<Header />
					</div>
				</div>
			</header>
			<main>
				<BackgroundAnimation>
					<Outlet/>
				</BackgroundAnimation>
			</main>
			<footer>
				<div className="footer-content-wrapper">
					<div className="footer-content">
						Подвал
					</div>
				</div>
			</footer>
		</div>
	)
}

export default MainLayout