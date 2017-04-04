import React from 'react';

import flower from '../../images/flower.svg'
import morty from '../../images/morty.svg'
import moondog from '../../images/moondog.svg'
import lawnchair from '../../images/lawnchair.svg'
import box from '../../images/box.svg'
import hands from '../../images/hands.svg'

const Shapes = () => {
    let shapes = [];
    const shapeImgs = [flower, morty, moondog, lawnchair, box, hands];
    let randomShape = shapeImgs[Math.floor(Math.random()*shapeImgs.length)];
    // const shapeClasses = [];

    function getRandomShape() {
      randomShape = shapeImgs[Math.floor(Math.random()*shapeImgs.length)];
      return randomShape;
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function setNumIterations(windowWidth) {
      var numIterations;
      // if the expression evaluates to true, generate this number of shapes in the background
      switch(true) {
        case windowWidth > 1920: 
          return numIterations = 100
        case windowWidth > 1440:
          return numIterations = 80
          // break;
        case windowWidth > 1110:
          return numIterations = 60
          // break;
        case windowWidth > 800:
          return numIterations = 40
          // break;
        case windowWidth < 800:
          return numIterations = 30
          // break;
        default:
          return numIterations = 20
      }
    }

    function generateShapes() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let numI = setNumIterations(windowWidth);

      for(let i = 0; i <= numI; i++) {
        let newShape =       
        {
            height: 50,
            width: 'auto',
            posX: getRandomInt(1, windowWidth-50),
            posY: getRandomInt(1, windowHeight-50),
            transform: `rotate(${getRandomInt(-30, 30)}deg)`,
            // fucking lol at me being too lazy to just not make another function 
            opacity: .85
        }
        shapes.push(newShape)
      }
    }

    generateShapes();
    // window.addEventListener('resize', function () {
    //   generateShapes();
    // }, false);

    const generatedShapes = shapes.map(
      (shape, index) => {
        let imgStyles = {
          height: `${shape.height}px`,
          width: `${shape.width}px`,
          transform: shape.transform,
        }
        let shapeStyles = {
          height: `${shape.height}px`,
          width: `${shape.width}px`,
          top: `${shape.posY}px`,
          left: `${shape.posX}px`,
          position: 'absolute',
          transform: shape.transform,
          opacity: shape.opacity,
          transition: 'all 1.5s'
        }
        return <div style={shapeStyles} key={index}><img style={imgStyles} src={getRandomShape()}></img></div>
      }
    )
    
  
    return (
      <div id="shapes-container" className="shapes-container">
        { generatedShapes }
      </div>
    )
}

export default Shapes;