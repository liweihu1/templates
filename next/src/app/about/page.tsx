import ComponentA from "../components/component-a";
import ComponentB from "../components/component-b";



const About = () => {
    return (
        <div>
            This is the about page using 
            <ComponentA hasSomething={"This is coming from about!"}/>
            <ComponentB hasSomethingElse={"This is also coming from about!"}/>
        </div>
    );
}

export default About;