import FooBar from "./foobar";

type FooProps = {
    bar: String
}

const Foo: React.FunctionComponent<FooProps> = ( { bar } ) => {
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo eros, tincidunt et rhoncus ut, ornare ac sapien. { bar }
            <FooBar/>
        </div>
    );
};

export default  Foo;