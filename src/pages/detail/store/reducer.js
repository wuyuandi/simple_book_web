import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';


const defaultStatus = fromJS({
	title: 'aaaaaaa',
	content: '<img src="https://upload-images.jianshu.io/upload_images/4383492-0db3c454d8cbf99a.png" /><p>本书作者是美国斯蒂芬.盖斯，按他自己的说法，他天生是个懒虫，为了改变这一点，他开始研究各种习惯养成策略，于是有了《微习惯》这本书，这本书主要教会我们微习惯就是自己每天做的微不足道的积极行为。主要有两个方面特性：一方面是小，因为小，所以足够简单，简单到不可能失败，它不会给你造成负担。另一方面是它符合大脑做事规律，用少量意志力甚至无需意志力就能完成。人性是趋向懒惰的，总是偏向选择容易的事情做。假如我们把好习惯的养成看成是在爬坡，我们就应该想办法让这个过程变得更加容易，首先我们可以把这件事情进行分解，分解到无法再分解，然后用少量意志力坚持下去，减少压力，形成条件反射，最终成功。比如，你想养成早上读书2小时的好习惯，先将其拆解成微习惯：每天早上看一页书。作者：音姐姐爱写作</p>'
	
});

export default (state = defaultStatus, action) => {
	switch(action.type) {
	
		default:
			return state;
	}

}