import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import './styles/HeaderLink.css'

interface Props {
	to: string
	label: string
	icon: ReactElement
}

const HeaderLink: FC<Props> = ({ to, label, icon }) => {
	return (
		<Link to={to}>
			<div className="link-static-aria">
				<div className="link-content-wrapper">
					<div className="header-link-wrapper">
						{label}
					</div>
					<div className="header-link-middle-layer">
					</div>
					<div className="header-link-front-layer-wrapper">
						<div className="header-link-front-layer">
							{icon}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default HeaderLink