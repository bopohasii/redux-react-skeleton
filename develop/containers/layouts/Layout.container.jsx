import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeModal } from '../../actions/modal.actions';

import LayoutPage from '../../components/pages/layouts/Layout.page.jsx';

class Layout extends Component {

    handleKeyDown(e) {
        const { isModalOpen, handleCloseModal } = this.props;

        if (e.keyCode === '27' && isModalOpen) {
            handleCloseModal();
        }
    }

    render() {
        return (
            <LayoutPage
              {...this.props}
              {...this.state}
              handleKeyDown={this.handleKeyDown.bind(this)}
            />
        );
    }
}

Layout.propTypes = {
    isModalOpen: PropTypes.bool,
    handleCloseModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
    isModalOpen: state.common.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleCloseModal: bindActionCreators(closeModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
