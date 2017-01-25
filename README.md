# `$ NodeJSBible`

Read the Holy Bible via the command line.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g nodejsbible
```

Then, run application with write `nodejsbible --help` and see what the application can do.

```sh
bible --help
usage: nodejsbible [reference] [version]

NodeJSBible is a reader of bible via the command line.

options:
  --v, --version          prints the tool and the Bible.JS version.
  -h --help               prints this output.

references:
 - References separated by spaces (see the examples).

examples:
   nodejsbible Jn3:16
   nodejsbible Gen1:1-7
   nodejsbible 1Jn1:1-7 kjv

Documentation can be found at https://github.com/Shmuel83/NodeJSBible

```
## First used
This package used XML2JS library. You must install this package with 'npm i xml2js' if the package don't install that
This application used an API on website api.preachingcentral.com/
This API support lot of languages and lot of version. To choice the version that you want, see bible-versions.xml file in node_module/npmjsbible/ directory
To choice the book, you must write Jn for John, Gen for Genese. All acronym of book of bible-book.xml file in application directory.

## Examples

```js
$ nodejsbible Jn3:16-20 kjv
[ 'Jn3:16-20', 'kjv' ]

Jn3:16-20 kjv

[ 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' ]
[ 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.' ]
[ 'He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.' ]
[ 'And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.' ]
[ 'For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.' ]

$
```
