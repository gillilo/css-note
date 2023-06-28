const production = process.env.NODE_ENV === 'production'
function babelOptions() {
  return {
    plugins: production 
      ? ['transform-remove-console'] 
      : []
  }
}

module.exports = { 
  preprocess: require('svelte-preprocess')({ // 스벨트 전처리 옵션
    scss: {
      prependData: '@import "./src/scss/main.scss";'
    },
    postcss: {
      plugins: [
        require('autoprefixer')()
      ]
    },
    babel: babelOptions() // svelte 컴포넌트에서 콘솔 지우는 것 (svelte 미지원 이유로... babel로 빌드한다음 적용시키는 것임)
  })
}