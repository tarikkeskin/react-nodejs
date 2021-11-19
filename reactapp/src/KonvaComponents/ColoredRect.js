import React from 'react';
import Konva from 'konva';
import { Rect } from 'react-konva';

class ColoredRect extends React.Component {
    state = {
      color: 'green'
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Rect
          x={20}
          y={20}
          width={150}
          height={150}
          draggable
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
        />
      );
    }
  }

export default ColoredRect;