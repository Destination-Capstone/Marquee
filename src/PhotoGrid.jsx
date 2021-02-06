import React from 'react';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './photo-grid.css';
import Skeleton from '@material-ui/lab/Skeleton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const OBJECT_URL = 'https://destinationcapstone.sfo2.digitaloceanspaces.com/';


var PhotoGrid = (props) => {
  var photosList = [];
  if (props.listing === null) {
    for (let i = 0; i < 5; i++) {
      photosList[i] = (<Skeleton variant="rect" />);
    }
  } else {  //if not null, should mean we have a displayRecord to pull from
    photosList = props.listing.pictures.map( (imgName) => {
      // hardcoded for jpg
      return `${OBJECT_URL}${imgName}.jpg`;
    });
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className="marquee-photo-modal">
      <button className="marquee-photo-modal-back-button" onClick={handleClose}><ArrowBackIosIcon /></button>
      <GridList className="marquee-photo-modal-gridlist" cols={1} cellHeight={400}>
        {
          photosList.map( (imgName) => (
            <GridListTile cols={1}>
              <img src={imgName} />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  );

  return (
    <div className="photo-grid">
      <img className="main-photo-item" src={photosList[0]} />
      <img className="photo-item item-a" src={photosList[1]} />
      <img className="photo-item item-b" src={photosList[2]} />
      <img className="photo-item item-c" src={photosList[3]} />
      <img className="photo-item item-d" src={photosList[4]} />
      <button className="photo-button" onClick={handleOpen}> Show all photos </button>
      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </div>
  )
}

export default PhotoGrid;