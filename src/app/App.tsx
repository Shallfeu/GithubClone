import React, { Suspense } from 'react';
import { AppRouter } from './providers/router';
import {NavBar} from "@/widgets/NavBar";
import {classNames} from "../shared/lib/classNames/classNames.ts";

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <NavBar/>

                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;