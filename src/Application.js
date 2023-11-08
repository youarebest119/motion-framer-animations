import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';
import Home from './components/pages/Home/Home';
import { ROUTES } from './utils/constants';
import ImageReveal from './components/pages/ImageReveal/ImageReveal';
import SplitVigletta from './components/pages/SplitVigletta/SplitVigletta';
import MaskCursor from './components/pages/MaskCursor/MaskCursor';
import FramerModal from './components/pages/FramerModal/FramerModal';
import ScrollProgress from './components/pages/ScrollProgress/ScrollProgress';
import MakeProgressWhenInView from './components/pages/MakeProgressWhenInView/MakeProgressWhenInView';
import ScrollTextWithScrolling from './components/pages/ScrollTextWithScrolling/ScrollTextWithScrolling';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: ROUTES.REVEAL_IMAGES,
                    element: <ImageReveal />,
                },
                {
                    path: ROUTES.FRAMER_MODAL,
                    element: <FramerModal />,
                },
                {
                    path: ROUTES.SCROLL_PROGRESS,
                    element: <ScrollProgress />,
                },
                {
                    path: ROUTES.MAKE_PROGRESS_WHEN_IN_VIEW,
                    element: <MakeProgressWhenInView />,
                },
            ],
        },
        {
            path: ROUTES.SPLIT_VIGLETTA,
            element: <SplitVigletta />,
        },
        {
            path: ROUTES.MASK_CURSOR,
            element: <MaskCursor />,
        },
        {
            path: ROUTES.SCROLL_TEXT_WITH_SCROLLING,
            element: <ScrollTextWithScrolling />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application
