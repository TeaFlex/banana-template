import { Button } from "primereact/button";
import { useState } from "react";

const Home = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(value => value + 1);

    const handleDecrement = () => setCounter(value => value > 0 ? value - 1 : value);

    return <>
        <h1 className="text-4xl font-bold">{counter} banana{counter > 1 && 's'}</h1>

        <div className="flex gap-4 flex-nowrap mt-4">
            <Button
                icon="fa fa-minus"
                onClick={handleDecrement}
            />

            <Button
                icon="fa fa-plus"
                onClick={handleIncrement}
            />
        </div>
    </>;
}

export default Home;