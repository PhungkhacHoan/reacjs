// Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes
const publicRouter = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Search', component: Search, layout: null },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
];

const privateRouter = [];

export { publicRouter, privateRouter };
