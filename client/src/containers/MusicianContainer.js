import ViewMusician from '../components/ViewMusician';
import { isUrlDataFetching } from '../reducers/modelsReducer';
import gimmeData from '../utils/gimmeData';

function urlFn(state, props) {
  const userId = props.params.id;
  return `users/${userId}`;
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: isUrlDataFetching(state, urlFn(state, ownProps))
  };
}

export default gimmeData(urlFn, mapStateToProps)(ViewMusician);
