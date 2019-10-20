import React from 'react';
import {
    Dimensions,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
const { width } = Dimensions.get("window");

const getAdjustedFontSize = (size) => {
    return parseInt(size) * width * (1.8 - 0.002 * width) / 400;
}

class ScaleText extends React.Component {
    static defaultProps = {
        size: 14
    }
    render() {
        return (
            <Text {...this.props} style={[this.props.style, { fontSize: getAdjustedFontSize(this.props.size) }]} >{this.props.children}</Text>
        );
    }
}
ScaleText.propTypes = {
    size: PropTypes.string,
    style: PropTypes.object
}

export default ScaleText;

