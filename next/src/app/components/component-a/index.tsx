import Something from "./something";

type ComponentAProps = {
    hasSomething: String
}

const ComponentA: React.FunctionComponent<ComponentAProps> = ( { hasSomething } ) => {
    return (
        <div>
            This is a Component A with value {hasSomething} given by it's parent.
            <Something/>
        </div>
    );
};

export default  ComponentA;