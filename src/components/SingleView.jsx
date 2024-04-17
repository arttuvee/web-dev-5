import PropTypes from 'prop-types';
import Button from './ui/Button';

const SingleView = (props) => {
  const {selectedItem, setSelectedItem} = props;

  const handleClick = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <dialog
        className="fixed top-0 z-50 flex h-4/5 flex-col items-center
        justify-center bg-transparent pt-10 text-white"
        open={selectedItem ? true : false}
      >
        <div>
          <Button text="Close" handleClick={handleClick} />
        </div>
        {selectedItem && (
          <>
            {selectedItem.media_type.includes('video') ? (
              <video controls className="h-1/2 object-contain">
                <source
                  src={selectedItem.filename}
                  type={selectedItem.media_type}
                />
              </video>
            ) : (
              <img
                src={selectedItem.filename}
                alt={selectedItem.title}
                className="h-1/2 object-contain"
              />
            )}
            <div className="mt-4 text-center">
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
            </div>
          </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
