import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../pages/ui/layouts/MainLayout";
import MainPage from "../../pages/ui/MainPage";
import NewsPage from "../../pages/ui/NewsPage";
import ProfilePage from "../../pages/ui/ProfilePage";

const AppRouterProvider: FC<{}> = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <MainPage />,
				},
				{
					path: 'news',
					element: <NewsPage />,
				},
				{
					path: 'profile',
					element: <ProfilePage />,
				}
			],
		}
	])
	return <RouterProvider router={router}/>
}

export default AppRouterProvider