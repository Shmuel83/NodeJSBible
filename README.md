# `$ NodeJSBible`

Read the Holy Bible via the command line.

![bible](http://i.imgur.com/CcEXgHy.png)

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g bible
```

Then, run `bible --help` and see what the cli tool can do.

```sh
$ bible --help
bible --help
usage: bible [options] [reference1, reference2, ...]

Bible.JS CLI client. Read the Holy Bible via the command line.

options:
  --v, --version          prints the tool and the Bible.JS version.
  --lang, --language      sets the language.
  --onlyVerses            doesn't display the table, just the verses.
  --s, --search           gets the verses that match to the string or
                          regular expression provided.
  --rc, --resultColor     sets the result color when searching something.
  -h --help               prints this output.

references:
 - References separated by spaces (see the examples).

examples:
   bible --lang en 'John 1:1-10' 'Genesis 2:3-7'
   bible --lang ro --search 'Meroza'
   bible --lang ro --search '/Meroza/gi'

```

## First run
Like documented above, on the first run the application will sync the submodules
creating the configuration file (`~/.bible-config.json`) and downloading the
submodules in the `~/.bible` directory.

```sh
$ bible 'Genesis 1:1'
warn  [...] No configuration file was found. Initing the configuration file.
warn  [...] The configuration file created successfully at the following location: /home/ionicabizau/.bible-config.json
info  [...] ~/.bible directory was not found. Downloading packages. This may take a while.
...
```

The default configuration file is:

```json
{
    "versions": {
        "en": {
            "source": "https://github.com/BibleJS/bible-english",
            "version": "master",
            "language": "en"
        },
        "ro": {
            "source": "https://github.com/BibleJS/bible-romanian",
            "version": "master",
            "language": "ro"
        }
    },
    "resultColor": "255, 0, 0",
    "searchLimit": 10,
    "language": "en"
}
```

## Examples

```js
$C:\Users\******\node_modules node nodejsbible.js Jn3:16-20 kjv
[ 'Jn3:16-20', 'kjv' ]

Jn3:16-20 kjv

[ 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' ]
[ 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.' ]
[ 'He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.' ]
[ 'And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.' ]
[ 'For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.' ]

$C:\Users\******\node_modules

```