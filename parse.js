#!/usr/bin/env node

const _ = require(`lodash`)

const Xray = require('x-ray')
var x = Xray()

const fs = require('fs')

const output_path = 'src'
const component_output_path = `${output_path}/components`
const page_output_path = `${output_path}/pages`

const filelist = [
  '_ref/startbootstrap-sb-admin-2/utilities-color.html',
  '_ref/startbootstrap-sb-admin-2/utilities-border.html',
  '_ref/startbootstrap-sb-admin-2/utilities-animation.html',
  '_ref/startbootstrap-sb-admin-2/utilities-other.html',
  '_ref/startbootstrap-sb-admin-2/login.html',
  '_ref/startbootstrap-sb-admin-2/register.html',
  '_ref/startbootstrap-sb-admin-2/forgot-password.html',
  '_ref/startbootstrap-sb-admin-2/404.html',
  '_ref/startbootstrap-sb-admin-2/blank.html',
  '_ref/startbootstrap-sb-admin-2/charts.html',
  '_ref/startbootstrap-sb-admin-2/tables.html'
]

const html_srcs = filelist.map(filename => {
  return [ filename, fs.readFileSync(filename,{encoding:'utf-8'})]
})

function getFilename(filepath){
  return filepath.split('/').pop()
}

function getVueTemplate(input){
  return `<template>${input}</template><script></script><style></style>`
}

function getComponentOutputFilename(input_filename){
  [filename, suffix] = getFilename(input_filename).split('.')
  // return filename+'Content'+'.vue'
  return `${component_output_path}/${filename}Content.vue`
}

function getCamelCase(input){
  return _.camelCase(input)
}

function getVuePages(component_filepath){
  let topic = filename.split('/').pop().split('.')[0]
  let camel_topic = getCamelCase(topic)
  let component_filename = component_filepath.split('/').pop()

  let topic_tag = `${topic}-content`
  let content = `
<template>
  <${topic_tag} />
</template>
<script>
  import ${camel_topic}Content from '../components/${component_filename}'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      '${topic_tag}': ${camel_topic}Content
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  `
  return content
}

function getVuePagesOutputFilename(input_filename){
  [filename, suffix] = getFilename(input_filename).split('.')
  return `${page_output_path}/${filename}.vue`
}

// console.log(html_srcs)

let import_string = []

html_srcs.forEach( ([input_filename, html_src]) => {
  x(html_src, '#content','.container-fluid@html')
  .then(res => {
    let page_output_filename = getVuePagesOutputFilename(input_filename)

    // ./pages/utilities-color.vue => /utilities_color
    let page_const = page_output_filename.split('/').pop().replace('.vue','').replace('-','_')

    fs.writeFileSync(
      page_output_filename,
      getVuePages(getComponentOutputFilename(input_filename))
    )


    fs.writeFileSync(
      getComponentOutputFilename(input_filename),
      getVueTemplate(`<div class="container-fluid">${res}</div>`),{encoding:'utf-8'})

    console.log(`import ${page_const} from '${page_output_filename.replace('src','.')}'`)

    console.log(`['/${page_const}',${page_const}],`)

  })
})
