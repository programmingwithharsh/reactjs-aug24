import UseCustomHook from "./UseCustomHook";

const Hooks = () => {
    const [data] = UseCustomHook("https://jsonplaceholder.typicode.com/users");

    return (<>
        <h1>Custom Hook Example</h1>
        <ul>
            {
                data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
        </ul>
    </>);
}

export default Hooks;