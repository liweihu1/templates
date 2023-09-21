type ComponentBProps = {
    hasSomethingElse: String
}

const ComponentB: React.FunctionComponent<ComponentBProps> = ( { hasSomethingElse } ) => {
    return (
        <div>
            This is a Component B with another value {hasSomethingElse} given by it's parent.
        </div>
    );
};

export default  ComponentB;