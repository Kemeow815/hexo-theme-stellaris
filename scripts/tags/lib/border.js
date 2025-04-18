/**
 * border.js v2.0 | https://github.com/chiyuki0325/hexo-theme-stellaris
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% border [color:color] [child:codeblock/tabs] title %}
 * body
 * {% endborder %}
 */

'use strict'

module.exports = (ctx) =>
  function (args, content) {
    args = ctx.args.map(args, ['color', 'child'], ['title'])
    const { title } = args
    if (args.color == null) {
      args.color = ctx.theme.config.tag_plugins.note.default_color
    }
    var el = ''
    // header
    el += '<div class="tag-plugin colorful note"'
    el += ' ' + ctx.args.joinTags(args, ['color', 'child']).join(' ')
    el += '>'
    // title
    if (title && title.length > 0) {
      el += '<div class="title"><strong>' + title + '</strong></div>'
    }
    // content
    el += '<div class="body">'
    el += ctx.render
      .renderSync({ text: content, engine: 'markdown' })
      .split('\n')
      .join('')
    el += '</div></div>'

    return el
  }
