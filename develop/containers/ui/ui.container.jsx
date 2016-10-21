import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeModal } from '../../actions/modal.actions';

import UIPage from '../../components/pages/ui/UI.page.jsx';

class UIStyleGuide extends Component {

    handleKeyDown(e) {
        const { isModalOpen, handleCloseModal } = this.props;

        if (e.keyCode === '27' && isModalOpen) {
            handleCloseModal();
        }
    }

    render() {
        return (
            <UIPage
                {...this.props}
                {...this.state}
                handleKeyDown={this.handleKeyDown.bind(this)}
            />
        );
    }
}

UIStyleGuide.propTypes = {
    isModalOpen: PropTypes.bool,
    handleCloseModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
    isModalOpen: state.common.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    handleCloseModal: bindActionCreators(closeModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UIStyleGuide);
