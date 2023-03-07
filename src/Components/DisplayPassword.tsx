import { useState } from "react";
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
    return (
        <TextField
            variant="filled"
            fullWidth
            label="Password"
            helperText={!con.state.password ? '' : 'Do not share your password with anyone'}
            type={state ? "password" : "text"}
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
                            title='Copy' 
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 800 }}
                            enterDelay={500} 
                            leaveDelay={200}
                            arrow>
                            <IconButton onClick={() => navigator.clipboard.writeText(con.state.password)}>
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip 
                            title='Clear' 
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 800 }}
                            enterDelay={500} 
                            leaveDelay={200}
                            arrow>
                            <IconButton onClick={() => dispatch(password({password:""}))}>
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