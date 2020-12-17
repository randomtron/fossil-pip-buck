import {compose} from 'recompose';
import {graphql} from 'react-apollo';
import {fanficsQuery} from './queries';

export default compose(graphql(fanficsQuery));
