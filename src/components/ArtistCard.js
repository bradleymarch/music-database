import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStylesModal = makeStyles((theme) => ({
   paper: {
     position: 'absolute',
     width: 400,
     height: 300,
     backgroundColor: '#282c34',
     color: 'white',
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
   },
 }));
 
 function getModalStyle() {
   const top = 50
   const left = 50
 
   return {
     top: `${top}%`,
     left: `${left}%`,
     transform: `translate(-${top}%, -${left}%)`,
   };
 }

export default function ArtistCard(props) {
   const classes = useStyles();
   const classesModal = useStylesModal();
   const [modalStyle] = useState(getModalStyle);
   const [showModal, setShowModal] = useState(false);
   const handleOpen = () => {
      setShowModal(true);
   }
   const handleClose = () => {
      setShowModal(false);
   }

   return (
      <React.Fragment>
         <Card className={classes.root}>
            <CardContent>
               <Typography variant="h5" component="h2">
                  {props.name}
               </Typography>
               <Typography className={classes.pos} color="textSecondary">
                  {props.role}
               </Typography>
               <Typography variant="body2" component="p">
                  {props.description}
               </Typography>
            </CardContent>
            <CardActions>
               <Button style={{ margin: 'auto' }} onClick={handleOpen} size="large" variant="outlined" color="primary">Discography</Button>
            </CardActions>
         </Card>
         {showModal && (
               <Modal
                  className={classesModal.paper}
                  style={modalStyle}
                  open={showModal}
                  onClick={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
               >
                  <React.Fragment>
                     <h2>{props.name}'s Discography</h2>
                     <h3><i>Album: {props.album}</i></h3>
                     <h4>Tracks</h4>
                     <ol>
                        {props.tracks.map((track, index) => {
                           return (
                              <li key={index}>{track}</li>
                           )
                        })}
                     </ol>
                     <Button style={{ margin: 'auto', display: 'block' }} variant="outlined" size="small" color="primary">Close</Button>
                  </React.Fragment>
               </Modal>
            )
         }
      </React.Fragment>
   );
}
