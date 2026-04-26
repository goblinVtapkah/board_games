import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";
import './styles/GameLink.css'
import type { GameData } from "../model/types";

interface Props {
	game: GameData
	order: number
}

const renderPoints = (points: number): string => points ? Array.from({ length: points }).fill('.').join('') : '___'

const GameLink: FC<Props> = ({ game: { name, code }, order }) => {
	const [status, setStatus] = useState<'доступна' | 'не доступна' | 'проверка'>('проверка')
	const [online, setOnline] = useState<number | 'проверяем'>('проверяем')
	const [points, setPoints] = useState<number>(3)

	useEffect(() => {
		if (status !== 'проверка') {
			setPoints(0)
			return
		}
		setTimeout(() => setPoints(points % 3 + 1), 500)
	}, [points])

	const pointsLine = renderPoints(points)

	return (
		<Link to={`/game/${code}`} style={{ order }} >
			<div className="link-static-aria" >
				<div className="link-content-wrapper">
					<div className="header-link-wrapper">
						<p>
							code: ___{code}___
						</p>
						<p>
							status: {pointsLine}{status}{pointsLine}
						</p>
						<p>
							online: {pointsLine}{online}{pointsLine}
						</p>
					</div>
					<div className="header-link-middle-layer">
					</div>
					<div className="header-link-front-layer-wrapper">
						<div className="header-link-front-layer">
							{name}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default GameLink