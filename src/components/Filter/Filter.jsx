import PropTypes from 'prop-types';
import { InputFilter } from '../Filter/Filter.styled';

export function Filter({ handleFilter }) {
  return <InputFilter type="text" onChange={handleFilter} />;
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
