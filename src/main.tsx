import { StrictMode } from 'react';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { RootRoutes } from "./components/layouts/RootRoutes.tsx";
import store from "./store/store";

import './styles/index.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<RootRoutes />
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);
