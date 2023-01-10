async function randomBottle() {
    for (let i = 1; i <= 10; i++) {
        const SVG_NS = 'http://www.w3.org/2000/svg';
        const SVG_XLINK = "http://www.w3.org/1999/xlink";
        //create a new use element
        let use = document.createElementNS(SVG_NS, 'use');
        // set the value for 'xlink:href' of the new use element
        use.setAttributeNS(SVG_XLINK, 'xlink:href', '#circle');
        //the random width 
        let w = 10;
        // the proportiopnal height
        let h = w*83.3 / 75;
        //set the position and the size of the use element
        use.setAttributeNS(null, 'x', Math.random()*(500 - w));
        use.setAttributeNS(null, 'y', Math.random()*(250 - h));
        use.setAttributeNS(null, 'width', w);
        use.setAttributeNS(null, 'height', h);
        //Append the use element
            svg.appendChild(use); 
        }
}
export default randomBottle;