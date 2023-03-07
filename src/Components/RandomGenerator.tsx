import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";  
import { useDispatch } from "react-redux";
import Generate from "./Generate";
import { password } from "./ReduxToolkit/slice";

const RandomGenerator: React.FC = () => {
    const dispatch = useDispatch();

    function StrongGenerate() {
        dispatch(password({
            password: Generate( 
                true, 
                true, 
                true, 
                true, 
                18,
            )
        }));
    }
    function RandomGenerate() {
        dispatch(password({
            password: Generate( 
                Boolean(Math.floor(Math.random() * 2)), 
                Boolean(Math.floor(Math.random() * 2)), 
                Boolean(Math.floor(Math.random() * 2)), 
                Boolean(Math.floor(Math.random() * 2)), 
                Math.floor(Math.random() * 26) + 4,
            )
        }));
    }

    return (
        <ButtonGroup size="small">
        <Button
            variant="contained"
            onClick={RandomGenerate}
            fullWidth
            sx={{backgroundColor: "#42a5f5",}}
            >
            Generate Random Password
        </Button>

        <Button
            variant="contained"
            onClick={StrongGenerate}
            fullWidth
            sx={{backgroundColor: "#42a5f5",}}
            >
            Generate Strong Password
        </Button>
        </ButtonGroup>
    );
}

export default RandomGenerator;