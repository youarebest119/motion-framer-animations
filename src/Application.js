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
import RevealTextonView from './components/pages/RevealTextonView/RevealTextonView';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import OnScrollZoom from './components/pages/OnScrollZoom/OnScrollZoom';
import AnimatedButtons from './components/pages/AnimatedButtons/AnimatedButtons';
import OpenListAnimation from './components/pages/OpenListAnimation/OpenListAnimation';
import FramerMotionLearn from './components/pages/FramerMotionLearn/FramerMotionLearn';
import AddRemoveElementAnimation from './components/pages/AddRemoveElementAnimation/AddRemoveElementAnimation';

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
                {
                    path: ROUTES.REVEAL_TEXT_ON_VIEW,
                    element: <RevealTextonView />,
                },
                {
                    path: ROUTES.ANIMATED_BUTTONS,
                    element: <AnimatedButtons />,
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
        {
            path: ROUTES.WELCOME_PAGE,
            element: <WelcomePage />,
        },
        {
            path: ROUTES.ONSCROLL_ZOOM,
            element: <OnScrollZoom />,
        },
        {
            path: ROUTES.OPEN_LIST_ANIMATION,
            element: <OpenListAnimation />,
        },
        {
            path: ROUTES.FRAMER_MOTION,
            element: <FramerMotionLearn />,
        },
        {
            path: ROUTES.ADD_REMOVE_ELEMENT,
            element: <AddRemoveElementAnimation />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application
