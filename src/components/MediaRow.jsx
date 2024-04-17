import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MediaRow = ({item}) => (
  <tr>
    <td>
      <img src={item.thumbnail} alt={item.title} />
    </td>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
    <td>{item.filesize}</td>
    <td>{item.media_type}</td>
    <td>
      <Link
        to={`/media/${item.media_id}`}
        state={{item}}
        className="m-3 mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-stone-100 hover:bg-blue-700"
      >
        View
      </Link>
    </td>
  </tr>
);

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
