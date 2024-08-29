import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { RootRoutes } from "./components/layouts/RootRoutes.tsx";

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<RootRoutes />
		</BrowserRouter>
	</StrictMode>,
);
