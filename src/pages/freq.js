import React from 'react';
import Username from './HomeCards/videos/Username.mp4';

const Freq = () => {
return (
	<div>
		<h3>
			haha, you didn't really think we would actually keep track of what you use and how often it's run
		</h3>
		    <video width="750" height="500" controls >
                <source src={Username} type="video/mp4"/>
          </video>
	</div>
);
};

export default Freq;
