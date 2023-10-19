import Counter from "../components/Counter/Counter";
import InputText from "../components/InputText/InputText";

const Home=()=>{
    return (
    <>
    <h1 style={{color:"blue",textDecoration:"underline"}}>Home Page</h1>
    <Counter/>
    <hr/>
    <InputText/>
    </>
    )
};
export default Home;