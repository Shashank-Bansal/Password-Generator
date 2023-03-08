import { HtmlHTMLAttributes, useState } from "react";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import Fade from '@mui/material/Fade';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./ReduxToolkit/store";
import { password } from "./ReduxToolkit/slice";
// import { useContext, useState } from "react";
// import { AppContext } from "./ContextApi/Context";

const DisplayPassword: React.FC = () => {
    // const con = useContext(AppContext);
    const con = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const [state, setState] = useState(true);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    return (
        <TextField
            variant="filled"
            fullWidth
            label="Password"
            helperText={!con.state.password ? '' : 'Do not share your password with anyone'}
            type={state ? "password" : "text"}
            multiline={state ? false : true}
            InputProps={{
                readOnly: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <Tooltip
                            title={state ? "Show" : "Hide"}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 800 }}
                            enterDelay={500} 
                            leaveDelay={200}
                            arrow>
                            <IconButton onClick={() => setState(!state)} >
                                {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </Tooltip>
                        <Tooltip 
                            title={click1 ? 'Copied' : 'Copy'} 
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 800 }}
                            enterDelay={500} 
                            leaveDelay={200}
                            arrow
                            // onOpen={() => setClick1(false)}
                            onClose={() => setTimeout(() => setClick1(false), 800)}
                        >
                            <IconButton 
                                onClick={() => {
                                    navigator.clipboard.writeText(con.state.password);
                                    setClick1(true);
                                }}
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip 
                            title={click2 ? 'Cleared' : 'Clear'}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 800 }}
                            enterDelay={500} 
                            leaveDelay={200}
                            arrow
                            // onOpen={() => setClick2(false)}
                            onClose={() => setTimeout(() => setClick2(false), 800)}
                        >
                            <IconButton 
                                onClick={() => {
                                    dispatch(password({password:""}));
                                    setClick2(true);
                                }}
                            >
                                <BackspaceIcon />
                            </IconButton>
                        </Tooltip>
                        
                    </InputAdornment>
                ),
            }}
            value={con.state.password}
        />
    );
}

export default DisplayPassword;