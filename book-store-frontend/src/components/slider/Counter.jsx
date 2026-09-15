import React, { useEffect, useState } from "react";

function Counter({ number }) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        let interval = setInterval(() => {

            setCount((prev) => {

                if (prev >= number) {
                    clearInterval(interval);
                    return number;
                }

                return prev + 1;
            });

        }, 10);

        return () => {
            clearInterval(interval);
        };

    }, [number]);

    return (
        <span>{count}</span>
    );
}

export default Counter;