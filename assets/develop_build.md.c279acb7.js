import{_ as e,c as a,o as t,a as c}from"./app.06da7cf5.js";const m=JSON.parse('{"title":"组件打包与发布","description":"","frontmatter":{},"headers":[{"level":2,"title":"打包","slug":"打包","link":"#打包","children":[]},{"level":2,"title":"发布","slug":"发布","link":"#发布","children":[]}],"relativePath":"develop/build.md"}'),s={name:"develop/build.md"},r=c('<h1 id="组件打包与发布" tabindex="-1">组件打包与发布 <a class="header-anchor" href="#组件打包与发布" aria-hidden="true">#</a></h1><br><br><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h2><blockquote><p>执行<code>pnpm run easyest:build</code>即可完成打包,打包后的文件在目录<code>packages/easyest下</code>。当然如果你想修改命令脚本的话,可以在 easyest/package.json 中的 script 字段中修改</p></blockquote><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-hidden="true">#</a></h2><p>发布之前你需要将项目关联一个 git 仓库,并且提交所有修改后执行<code>pnpm run publish:easyest</code>,此时会有一些提示如选择如何提升版本,是否发布,是否加个 tag 等等</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e1b7c40484f49c999ba492303e2855c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>当然,如果你没有登录 npm 的话,会先让你登录 npm。注意发布之前要将<code>packages/easyest</code>下 package.json 中 name 字段改成自己组件库的名字</p>',9),d=[r];function i(n,o,p,l,h,_){return t(),a("div",null,d)}const b=e(s,[["render",i]]);export{m as __pageData,b as default};
