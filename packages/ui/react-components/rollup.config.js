import styles from 'rollup-plugin-styles';
import commonPackageBuild from './../../../build/commonPackageBuild.config';

commonPackageBuild.plugins.unshift(styles());

export default commonPackageBuild;
