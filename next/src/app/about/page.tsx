import Bar from "../components/bar";
import Foo from "../components/foo";


const About = () => {
    return (
        <div>
            This is the about page using 
            <Foo bar={"Lorem ipsum"}/>
            <Bar foo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
        </div>
    );
}

export default About;