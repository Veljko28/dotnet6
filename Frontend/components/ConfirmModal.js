import {Modal, Typography, Button} from '@mui/material';
import { Box } from '@mui/system';


const ConfirmModal = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
        backgroundColor: '#fff'
      };

    return (
        <Modal
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
            {props.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>
                {props.desc} <b>{props.job}</b>
            </Typography>
            <div style={{margin: 10, marginLeft: 0}}>
                <Button style={{backgroundColor: "#3af525", color: "#fff", marginRight: 5, padding: 8}} onClick={() => props.handleApply()}>Confirm</Button>
                <Button style={{backgroundColor: "#f50f0f", color: "#fff", marginRight: 5, padding: 8}}onClick={() => props.handleClose()}>Close</Button>
            </div>
        </Box>
        </Modal>
    )
}

export default ConfirmModal;