import React from 'react';
import Konva from 'konva';
import { Circle } from 'react-konva';



const Shape = () => {
    const [color,setColor] = React.useState();
  
    return (
      <Circle
        x={0}
        y={0}
        draggable
        radius={50}
        fill={color}
        onDragEnd={() => {
          setColor(Konva.Util.getRandomColor());
        }}
      />
    );
  };

export default Shape;