import React from 'react'
import {createRoot} from 'react-dom/client'
import App from "@/app/App.tsx";
import {ErrorBoundary} from "@/app/providers/ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import '@/app/styles/index.scss';
import {GraphQLProvider} from "@/app/providers/GraphQLProvider";
import {$api} from "@/shared/api/api";

const container = document.getElementById('root')

if (!container) {
    throw new Error('Container "root" not found');
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <GraphQLProvider client={$api}>
            <BrowserRouter>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </BrowserRouter>
        </GraphQLProvider>
    </React.StrictMode>,
)
