import babel from 'rollup-plugin-babel';
// import path from 'path';
// import nodeResolve from 'rollup-plugin-node-resolve';
import resolve from 'resolve';
const terser = function() {
  return {
    compress: true, mangle: true,
    output: {
      beautify: true, indent_level: 2,
      comments (n, c) { var text = c.value, type = c.type; if (type === 'comment2') return /^!|@preserve|@license|@cc_on| Licensed/i.test(text) }
    }
  }
}
export default [
  {
    input: 'src/index.js', // 入口文件
    output: {
      format: 'es',
      file:'lib/index.js',
    },
    plugins: [
      babel({
          exclude: "node_modules/**",
          runtimeHelpers: true,
          // externalHelpers: true
      }),
      
      resolve,
      terser()
      // nodeResolve(),
      // 压缩代码
      // uglify(),
    ]
  },
  {
    input: 'src/helpers.js', // 入口文件
    output: {
      format: 'cjs',
      file:'lib/workerhelper.js',
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true,
        // externalHelpers: true
    }),
    resolve,
    terser()
      // nodeResolve(),
      // 压缩代码
      // uglify(),
    ]
  }
]
