import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getShows, deleteShow } from '../actions/showActions'
import PropTypes from 'prop-types'

class ShowList extends Component {

    componentDidMount() {
        this.props.getShows();
    }

    onDeleteClick = (id) => {
        this.props.deleteShow(id)
    }

    render() {
        
        const { shows } = this.props.show;
        return(
            <div>
            
                <ul>
                    {shows.map(({ _id, venue }) => (
                        <li>
                        <button
                        className="remove-btn"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >&times;</button>
                            {venue}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

ShowList.propTypes = {
    getShows: PropTypes.func.isRequired,
    show: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    show: state.show
})
export default connect(mapStateToProps, { getShows, deleteShow })(ShowList);