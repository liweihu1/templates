type BarProps = {
    foo: String
}

const Bar: React.FunctionComponent<BarProps> = ( { foo } ) => {
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. { foo }
        </div>
    );
};

export default  Bar;