import React, { useContext } from 'react'
import Contex from '../contex/Contex'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Overlay from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }
  const Fade = React.forwardRef(function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
  };
  
const ShowMoreEventModals = () => {
    const {handleShowMoreOpen,handleShowMoreClose, showMoreOpen,setShowMoreOpen,allEventOfday} = useContext(Contex)

    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        return (
          <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              // style={{ backdropFilter: "blur(2px)" }}
              slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
            >
              <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">Text in a child modal</h2>
                <p id="child-modal-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <Button onClick={handleClose}>Close Child Modal</Button>
              </Box>
            </Modal>
          </React.Fragment>
        );
      }
  return (
    <Modal
        open={showMoreOpen}
        onClose={handleShowMoreClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        // style={{ backdropFilter: "blur(2px)" }}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
       
      >
        {/* <Overlay /> */}
        {/* <div
          style={{
            backgroundColor: "#000000",
            opacity: 0.5,
            width: "100%",
            height: "100%",
          }}
        ></div> */}
        {/* <Box style={{
            backgroundColor: "#000000",
            opacity: 0.5,
            width: "100%",
            height: "100%",
          }}></Box> */}
        <Box sx={{ ...style, width: 400 }}>
        <span className="material-icons-outlined text-gray-400">
                close
              </span>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
  )
}

export default ShowMoreEventModals