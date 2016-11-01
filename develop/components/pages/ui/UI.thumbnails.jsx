import React, { Component } from 'react';

class UIThumbnails extends Component{

    render() {

        return (
            <section className="ui__section">
                <h2 className="ui__title">Thumbnails</h2>

                <div className="ui__thumbnails">
                    <div className="thumbnail">
                        <div className="thumbnail__img-wrap">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                                 alt="thumbnail" className="thumbnail__img"/>
                        </div>
                    </div>

                    <div className="thumbnail ">
                        <div className="thumbnail__img-wrap">
                            <img className="thumbnail__img thumbnail__img--circle"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                                 alt="thumbnail"/>
                        </div>
                    </div>

                    <div className="thumbnail thumbnail--secondary">
                        <div className="thumbnail__img-wrap">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                                 alt="thumbnail" className="thumbnail__img"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UIThumbnails;
