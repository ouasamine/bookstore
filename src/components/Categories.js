import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };
  return (
    <button
      onClick={handleSubmit}
      type="submit"
    >
      Check Status
    </button>
  );
}

export default Categories;
