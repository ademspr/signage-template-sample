import React from 'react';
import vaca from '../images/vaca.png';

import * as layout from '../styles/app.css'

export default class HeavenComponent extends React.Component {
	render() {
		console.log(layout);
		return (	
			<>
				<div style={layout.template__frame}>
					<div style={layout.template__plane_container}>						
						<img style={layout.template__plane} src={vaca} />							
					</div>
				</div>
				<div style={layout.template__clouds}>
					<Clound1/>
					<Clound2/>
					<Clound3/>
					<Clound4/>
				</div>
			</>			
		);
	}
}

const Clound1 = () => (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
	height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xspace="preserve" style={{...layout.template__cloud, ... layout.template__cloud_distant, ...layout.template__super_slow, ...layout.template__cloud_massive}}>
	<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
	c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
	C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
	S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
	</svg>
);
	
	
const Clound2 = () => (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
	height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xspace="preserve" style={{...layout.template__cloud, ... layout.template__cloud_small, ...layout.template__slow}}>
	<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
	c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
	C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
	S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
	</svg>
);
	
	
const Clound3 = () => (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
	height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xspace="preserve" style={{...layout.template__cloud, ... layout.template__cloud_distant, ...layout.template__super_slow, ...layout.template__cloud_massive}}>
	<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
	c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
	C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
	S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
	</svg>
);
	
	
const Clound4 = () => (
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
	height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331" xspace="preserve" className="cloud slower">
	<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
	c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
	C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
	S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
	</svg>
);