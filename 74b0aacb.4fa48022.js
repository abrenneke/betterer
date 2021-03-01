(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(117)),l={title:"Incrementally adding Stylelint rules with Betterer \u2600\ufe0f",author:"Craig Spence",authorURL:"http://twitter.com/phenomnominal",authorTwitter:"phenomnominal"},s={permalink:"/betterer/blog/2021/03/01/betterer-and-stylelint",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/blog/blog/2021-03-01-betterer-and-stylelint.md",source:"@site/blog/2021-03-01-betterer-and-stylelint.md",description:"I just released v4.0.0 of Betterer \ud83c\udf89 (now with sweet new docs!) and it has a bunch of simplified APIs for writing tests. And just before I shipped it, I got an issue asking how to write a Stylelint test, so let's do it here and explain it line by line:",date:"2021-03-01T00:00:00.000Z",tags:[],title:"Incrementally adding Stylelint rules with Betterer \u2600\ufe0f",readingTime:5.87,truncated:!1,nextItem:{title:"Improving accessibility with Betterer \u2600\ufe0f",permalink:"/betterer/blog/2020/05/15/improving-accessibility-with-betterer"}},o=[{value:"TL;DR;",id:"tldr",children:[]},{value:"NTL;PR (not that long, please read \ud83d\ude02)",id:"ntlpr-not-that-long-please-read-",children:[{value:"<strong>Stylelint</strong>",id:"stylelint",children:[]},{value:"Augmenting the configuration:",id:"augmenting-the-configuration",children:[]},{value:"Passing the list of files:",id:"passing-the-list-of-files",children:[]},{value:"Hooking into <strong>Betterer</strong>:",id:"hooking-into-betterer",children:[]},{value:"Adding files:",id:"adding-files",children:[]},{value:"Adding issues:",id:"adding-issues",children:[]},{value:"The whole test:",id:"the-whole-test",children:[]}]}],c={toc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I just released ",Object(a.b)("a",{parentName:"p",href:"hhttps://github.com/phenomnomnominal/betterer"},"v4.0.0 of ",Object(a.b)("strong",{parentName:"a"},"Betterer"))," \ud83c\udf89 (now with ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/"},"sweet new docs!"),") and it has a bunch of simplified APIs for writing ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test"},"tests"),". And just before I shipped it, I got ",Object(a.b)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer/issues/519"},"an issue")," asking how to write a ",Object(a.b)("a",{parentName:"p",href:"https://stylelint.io/"},Object(a.b)("strong",{parentName:"a"},"Stylelint"))," test, so let's do it here and explain it line by line:"),Object(a.b)("h2",{id:"tldr"},"TL;DR;"),Object(a.b)("p",null,"Here's the full test:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// stylelint.ts\nimport { BettererFileResolver, BettererFileTest } from '@betterer/betterer';\nimport { promises as fs } from 'fs';\nimport { Configuration, lint } from 'stylelint';\n\nexport function stylelint(configOverrides: Partial<Configuration> = {}) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths, fileTestResult) => {\n    const result = await lint({\n      files: [...filePaths],\n      configOverrides\n    });\n\n    await Promise.all(\n      result.results.map(async (result) => {\n        const contents = await fs.readFile(result.source, 'utf8');\n        const file = fileTestResult.addFile(result.source, contents);\n        result.warnings.forEach((warning) => {\n          const { line, column, text } = warning;\n          file.addIssue(line - 1, column - 1, line - 1, column - 1, text, text);\n        });\n      })\n    );\n  });\n}\n")),Object(a.b)("p",null,"And then using the test:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { stylelint } from './stylelint';\n\nexport default {\n  'no stylelint issues': stylelint({\n    rules: {\n      'unit-no-unknown': true\n    }\n  }).include('./**/*.css')\n};\n")),Object(a.b)("h2",{id:"ntlpr-not-that-long-please-read-"},"NTL;PR (not that long, please read \ud83d\ude02)"),Object(a.b)("h3",{id:"stylelint"},Object(a.b)("strong",{parentName:"h3"},"Stylelint")),Object(a.b)("p",null,"So how does it all work? Let's start with the actual ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," part."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://stylelint.io/"},Object(a.b)("strong",{parentName:"a"},"Stylelint"))," is pretty easy to set-up. You need a ",Object(a.b)("inlineCode",{parentName:"p"},"stylelintrc.json")," file with configuration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "stylelint-config-standard"\n}\n')),Object(a.b)("p",null,"And then run it on your CSS files:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'stylelint "**/*.css"\n')),Object(a.b)("p",null,"Running that does the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"searches for the ",Object(a.b)("inlineCode",{parentName:"li"},"stylelintrc.json")," configuration file"),Object(a.b)("li",{parentName:"ol"},"reads the configuration"),Object(a.b)("li",{parentName:"ol"},"finds the valid files"),Object(a.b)("li",{parentName:"ol"},"runs the rules"),Object(a.b)("li",{parentName:"ol"},"returns the results")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Stylelint")," also has a ",Object(a.b)("a",{parentName:"p",href:"https://stylelint.io/user-guide/usage/node-api"},"JS API")," which we're going to use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { lint } from 'stylelint';\n\nconst result = await lint({\n  // ...\n});\n")),Object(a.b)("p",null,"We could just run the above and it will test the current state of the files with the current configuration in ",Object(a.b)("inlineCode",{parentName:"p"},"stylelintrc.json"),". And that's great \u2728!"),Object(a.b)("h3",{id:"augmenting-the-configuration"},"Augmenting the configuration:"),Object(a.b)("p",null,"For the ",Object(a.b)("strong",{parentName:"p"},"Betterer")," test we want to augment the ",Object(a.b)("inlineCode",{parentName:"p"},"stylelintrc.json")," configuration with some extra rules... and ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," has ",Object(a.b)("a",{parentName:"p",href:"https://stylelint.io/user-guide/usage/node-api#configoverrides"},"a really easy way")," to do that:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, lint } from 'stylelint';\n\nfunction stylelint(configOverrides: Partial<Configuration> = {}) {\n  const result = await lint({\n    configOverrides\n  });\n}\n")),Object(a.b)("h3",{id:"passing-the-list-of-files"},"Passing the list of files:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Stylelint")," also allows us to pass a specific set of files to test:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, lint } from 'stylelint';\n\nfunction stylelint(configOverrides: Partial<Configuration> = {}, files: Array<string>) {\n  const result = await lint({\n    files,\n    configOverrides\n  });\n}\n")),Object(a.b)("p",null,"So we could call the ",Object(a.b)("inlineCode",{parentName:"p"},"stylelint")," function like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"stylelint(\n  {\n    rules: {\n      'unit-no-unknown': true\n    }\n  },\n  './**/*.css'\n);\n")),Object(a.b)("p",null,"And that will run the ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," from the ",Object(a.b)("inlineCode",{parentName:"p"},"stylelinerc.json")," file, plus the ",Object(a.b)("inlineCode",{parentName:"p"},"unit-no-unknown")," rule, on all ",Object(a.b)("inlineCode",{parentName:"p"},".css")," files! Thats most of the tricky stuff sorted \u2b50\ufe0f!"),Object(a.b)("h3",{id:"hooking-into-betterer"},"Hooking into ",Object(a.b)("strong",{parentName:"h3"},"Betterer"),":"),Object(a.b)("p",null,"This test needs to take advantage of all the snapshotting and diffing magic of ",Object(a.b)("strong",{parentName:"p"},"Betterer"),", so we need to wrap it in a ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/tests"},"test"),". We want to be able to target individual files, so it specifically needs to be a ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test"},Object(a.b)("inlineCode",{parentName:"a"},"BettererFileTest")),"."),Object(a.b)("p",null,"We first create a ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test#bettererfileresolver"},Object(a.b)("inlineCode",{parentName:"a"},"BettererFileResolver()")),", which is a little bit of magic that helps work out which file paths are relevant for the test. That is passed as the first argument to ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test#bettererfiletest"},Object(a.b)("inlineCode",{parentName:"a"},"BettererFileTest")),". The second argument is the actual test, which will be an ",Object(a.b)("inlineCode",{parentName:"p"},"async")," function that runs the linter."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { BettererFileResolver, BettererFileTest } from '@betterer/betterer';\nimport { Configuration, lint } from 'stylelint';\n\nfunction stylelint(configOverrides: Partial<Configuration> = {}) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths) => {\n    // ...\n  });\n}\n")),Object(a.b)("p",null,"Each time it runs ",Object(a.b)("strong",{parentName:"p"},"Betterer")," will call that function with the relevant set of files, which we will pass along to ",Object(a.b)("strong",{parentName:"p"},"Stylelint"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { BettererFileResolver, BettererFileTest } from '@betterer/betterer';\nimport { Configuration, lint } from 'stylelint';\n\nfunction stylelint(configOverrides: Partial<Configuration> = {}) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths) => {\n    const result = await lint({\n      files: [...filePaths],\n      configOverrides\n    });\n  });\n}\n")),Object(a.b)("h3",{id:"adding-files"},"Adding files:"),Object(a.b)("p",null,"Next thing is telling ",Object(a.b)("strong",{parentName:"p"},"Betterer")," about all the files with issues reported by ",Object(a.b)("strong",{parentName:"p"},"Stylelint"),". To do this we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"BettererFileTestResult")," object, which is the second parameter of the test function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"new BettererFileTest(resolver, async (filePaths, fileTestResult) => {\n  // ...\n});\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"result")," object from ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," contains a list of ",Object(a.b)("inlineCode",{parentName:"p"},"results"),". For each item in that list, we need to read the file with ",Object(a.b)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html"},"Node's ",Object(a.b)("inlineCode",{parentName:"a"},"fs")," module"),", and then call ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test#addfile"},Object(a.b)("inlineCode",{parentName:"a"},"addFile()"))," with the file path (",Object(a.b)("inlineCode",{parentName:"p"},"result.source"),"), and the contents of the file. That returns a ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test#bettererfile"},Object(a.b)("inlineCode",{parentName:"a"},"BettererFile"))," object:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { promises as fs } from 'fs';\n\nawait Promise.all(\n  result.results.map(async (result) => {\n    const contents = await fs.readFile(result.source, 'utf8');\n    const file = fileTestResult.addFile(result.source, contents);\n  })\n);\n")),Object(a.b)("h3",{id:"adding-issues"},"Adding issues:"),Object(a.b)("p",null,"The last thing to do is convert from ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," warnings to ",Object(a.b)("strong",{parentName:"p"},"Betterer")," issues. To do that we use the ",Object(a.b)("a",{parentName:"p",href:"https://phenomnomnominal.github.io/betterer/docs/betterer-file-test#addissue"},Object(a.b)("inlineCode",{parentName:"a"},"addIssue()"))," function! In this case we will use the following overload:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"addIssue(startLine: number, startCol: number, endLine: number, endCol: number, message: string, hash?: string):\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Stylelint")," only gives us the line and column for the start of the issue, so we use that as both the start position and the end position. ",Object(a.b)("strong",{parentName:"p"},"Betterer")," expects them to be zero-indexed so we subtract ",Object(a.b)("inlineCode",{parentName:"p"},"1")," from both. This also means that the ",Object(a.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Betterer.betterer-vscode"},"VS Code extension")," will add a diagnostic to the whole token with the issue, which is pretty handy! We also pass the text of the issue twice, once as the ",Object(a.b)("inlineCode",{parentName:"p"},"message"),", and a second time as the ",Object(a.b)("inlineCode",{parentName:"p"},"hash"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"hash")," is used by ",Object(a.b)("strong",{parentName:"p"},"Betterer")," to track issues as they move around within a file. ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," adds specific details to the ",Object(a.b)("inlineCode",{parentName:"p"},"message")," so that makes it a good enough hash for our purposes. All up, converting an issue looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"result.warnings.forEach((warning) => {\n  const { line, column, text } = warning;\n  file.addIssue(line - 1, column - 1, line - 1, column - 1, text, text);\n});\n")),Object(a.b)("h3",{id:"the-whole-test"},"The whole test:"),Object(a.b)("p",null,"Putting that all together and you get this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// stylelint.ts\nimport { BettererFileResolver, BettererFileTest } from '@betterer/betterer';\nimport { promises as fs } from 'fs';\nimport { Configuration, lint } from 'stylelint';\n\nexport function stylelint(configOverrides: Partial<Configuration> = {}) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths, fileTestResult) => {\n    const result = await lint({\n      files: [...filePaths],\n      configOverrides\n    });\n\n    await Promise.all(\n      result.results.map(async (result) => {\n        const contents = await fs.readFile(result.source, 'utf8');\n        const file = fileTestResult.addFile(result.source, contents);\n        result.warnings.forEach((warning) => {\n          const { line, column, text } = warning;\n          file.addIssue(line - 1, column - 1, line - 1, column - 1, text, text);\n        });\n      })\n    );\n  });\n}\n")),Object(a.b)("p",null,"And then we can use the test like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { stylelint } from './stylelint';\n\nexport default {\n  'no stylelint issues': stylelint({\n    rules: {\n      'unit-no-unknown': true\n    }\n  }).include('./**/*.css')\n};\n")),Object(a.b)("p",null,"And that's about it! The ",Object(a.b)("strong",{parentName:"p"},"Stylelint")," API is the real MVP here, nice job to their team! \ud83d\udd25\ud83d\udd25\ud83d\udd25"),Object(a.b)("p",null,"Hopefully that makes sense! I'm still pretty excited by ",Object(a.b)("strong",{parentName:"p"},"Betterer"),", so hit me up on ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/phenomnominal"},"Twitter")," if you have thoughts/feelings/ideas \ud83e\udd84"))}b.isMDXComponent=!0}}]);