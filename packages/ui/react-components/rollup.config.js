import postcss from 'rollup-plugin-postcss';

import commonPackageBuild from './../../../config/commonPackageBuild.config';

commonPackageBuild.plugins.unshift(postcss());

export default commonPackageBuild;
