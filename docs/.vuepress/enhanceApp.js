import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import feiyumodule from '../../packages'
 
export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(feiyumodule);
};