import React, { Component, PropTypes } from 'react';

class UIThumbnail extends Component {
    handleImageLoadFailed(event) {
        event.onerror = null;
        event.target.src = this.props.defaultSrc;

        return null;
    }

    renderImage() {
        const { width, height, src, type } = this.props;
        const className = 'thumbnail__img'
            + `${(type === 'circle') ? ' thumbnail__img--circle' : ''}`
            + `${(type === 'border') ? ' thumbnail__img--border' : ''}`;

        return (
            <img
              role="presentation"
              alt="thumbnail"
              ref={`image${src}`}
              width={width}
              height={height}
              className={className}
              src={src}
              onError={this.handleImageLoadFailed.bind(this)}
            />
        );
    }

    render() {
        const { link } = this.props;
        const img = this.renderImage();

        return (
            <div className="thumbnail__img-wrap">
                {
                    link
                        ? <a href={link} className="thumbnail__img">{img}</a>
                        : img
                }
            </div>
        );
    }
}


UIThumbnail.propTypes = {
    defaultSrc: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.oneOf(['default', 'circle', 'border']),
};

UIThumbnail.defaultProps = {
    defaultSrc: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150',
    src: '',
    width: '150',
    height: '150',
    link: 'default',
};

export default UIThumbnail;
