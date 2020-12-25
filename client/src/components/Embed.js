import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Container} from "reactstrap";
// const videoUrlToID = /(?<=v=).*/
const videoUrlToID = /(?<=v=).{11}(?!list)/
// The list part at the end of this regex is not really needed.

// Physically calculate the search bar (I'm not jesus)

export class Embed extends Component {

    componentDidUpdate = () => {

    }


    makeEmbed = (url) => {

        if (url.match(/soundcloud/) === "soundcloud") {
            let Video = "https://w.soundcloud.com/player/?visual=true&url=" + url + "&auto_play=true&show_artwork=true"
            return Video;
        }

        if (url.match(/youtube/) === "youtube") {
            let videoID = url.match(videoUrlToID)
            let Video = "https://www.youtube.com/embed/" + videoID + "?autoplay=1" + "&rel=0" + "&vq=144p"
            return Video;
        }

    }

    render() {

        if (this.props.isOpen === true) return (

            <Container>
                <iframe allowfullscreen="allowfullscreen" frameborder="0" loading="eager" importance="high" src={this.makeEmbed(this.props.item.url)}/>
            </Container>

        )

        else return null;

    }

}

// PropTypes
Embed.propTypes = {
    item: PropTypes.object.isRequired,
    next: PropTypes.func.isRequired
}

export default Embed;