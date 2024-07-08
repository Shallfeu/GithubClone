import React from 'react';
import cls from './AuthPage.module.scss';
import {useCountStore} from "@/entities/User/model/store/userStore.ts";

const AuthPage = () => {
    const count = useCountStore((state) => state.count)
    const increment = useCountStore((state) => state.increment)
    const decrement = useCountStore((state) => state.decrement)

    return (
        <div>
            {count}

            <div>
                <button onClick={() => increment(1)}>
                    +
                </button>

                <button onClick={() => decrement(1)}>
                    -
                </button>
            </div>
        </div>
    );
};

export default AuthPage;