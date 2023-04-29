import React from 'react';
// import Installs from './Install/Installs';
import Linux from './Next Install/Linux'
import Apple from './Next Install/Apple'
import Windows from './Next Install/Windows'
import Android from './Next Install/Android'
import Ios from './Next Install/Ios'
import Amazon from './Next Install/Amazon'


const Install = () => {
return (
	<div>
	<Linux/>
	<Apple/>
	<Windows/>
	<Android/>
	<Ios/>
	<Amazon/>
    {/* <Installs/> */}
	</div>
);
};

export default Install;