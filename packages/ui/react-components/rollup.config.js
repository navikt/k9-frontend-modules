import styles from 'rollup-plugin-styles';
import commonPackageBuild from './../../../config/commonPackageBuild.config';

commonPackageBuild.plugins.unshift(styles());

export default commonPackageBuild;
