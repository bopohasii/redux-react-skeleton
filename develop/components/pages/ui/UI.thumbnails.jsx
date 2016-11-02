import React, { Component } from 'react';
import UIThumbnail from '../../common/UIThumbnail.jsx';

class UIThumbnails extends Component{

    render() {
        return (
            <section className="ui__section">
                <h2 className="ui__title">Thumbnails</h2>

                <div className="ui__thumbnails">
                    <div className="thumbnail">
                        <UIThumbnail
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          defaultSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          width="140"
                          height="auto"
                        />
                    </div>

                    <div className="thumbnail ">
                        <UIThumbnail
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          defaultSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          width="140"
                          height="auto"
                          type="circle"
                        />
                    </div>

                    <div className="thumbnail">
                        <UIThumbnail
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          defaultSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
                          width="140"
                          height="auto"
                          type="border"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default UIThumbnails;
