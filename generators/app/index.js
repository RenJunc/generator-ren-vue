const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type:'input',
        name:'name',
        message:'Your project name',
        default: this.appname
      },
      {
        type:'input',
        name:'url',
        message:'Your project url',
        default: this.appname
      }
    ])
    .then(answers =>{
      this.answers = answers
    })
  }

  writing(){
    // 把每一个文件都通过模版转换到目标路径
    const templates = [
      'public/favicon.ico',
      'public/index.html',
      'src/components/customDemo.vue',
      'src/components/HelloWorld.vue',
      'src/components/ImageDemo.vue',
      'src/components/TextDemo.vue',
      'src/components/VideoDemo.vue',
      'src/store/index.js',
      'src/main.js',
      'src/App.vue',
      'babel.config.js',
      'package.json',
      'README.md'
    ]
    templates.forEach(item =>{
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}