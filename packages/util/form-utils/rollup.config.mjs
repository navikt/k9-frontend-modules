import postcss from 'rollup-plugin-postcss';
import commonPackageBuild from './../../../config/commonPackageBuild.config.mjs';

commonPackageBuild.plugins.unshift(
    postcss({
        modules: true,
    })
);

export default commonPackageBuild;
