import { useEffect, useRef, type FC, type ReactElement } from "react";

interface Props {
	children: ReactElement | ReactElement[] | null
}

const BackgroundAnimation: FC<Props> = ({ children }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current!
		const parent = canvas.parentElement.parentElement!
		const ctx = canvas.getContext("2d")!

		let animationId: number

		const sizes = {
			width: 0,
			height: 0
		}

		// [x_position, y_position, direction(false: right, true: left)]
		const runnerPixels: [number, number, boolean][] = []

		const resizeHandler = () => {
			const canvasParentRect = parent.getBoundingClientRect()
			sizes.width = canvasParentRect.width
			sizes.height = canvasParentRect.height
			canvas.width = canvasParentRect.width
			canvas.height = canvasParentRect.height

			for (let i = runnerPixels.length * 5; i < sizes.height; i += 5) {
				const runnerPixelX = Math.random() * sizes.width
				runnerPixels.push([
					runnerPixelX,
					i,
					Math.random() * 2 > 1,
				])
			}
			runnerPixels.length = Math.floor(sizes.height / 5)
		}

		setTimeout(resizeHandler, 100)
		window.addEventListener('resize', resizeHandler)
		parent.addEventListener('animationend', resizeHandler)

		const render = () => {
			ctx.fillStyle = "rgba(0,0,0,0.1)"
			ctx.fillRect(0, 0, sizes.width, canvas.height)

			for (const runnerPixel of runnerPixels) {
				runnerPixel[0] += (runnerPixel[2] ? -1 : 1)

				if (runnerPixel[0] < 0 || runnerPixel[0] > sizes.width) {
					runnerPixel[0] = Math.random() * sizes.width
					runnerPixel[2] = runnerPixel[0] - 0 > sizes.width - runnerPixel[0]
				}

				ctx.fillStyle = "#00ff003c"
				ctx.fillRect(runnerPixel[0], runnerPixel[1], 4, 4)
			}

			setTimeout(() => animationId = requestAnimationFrame(render), 20)
		}

		render()

		return () => cancelAnimationFrame(animationId)
 	}, [])

  	return (
		<div style={{ position: 'relative', top: 0, left: 0 }} className="animate-background">
			<canvas style={{ position: 'absolute', top: 0, left: 0 }} ref={canvasRef} />
			{children}
		</div>
	)
}

export default BackgroundAnimation