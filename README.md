prism-treeview
==============

Treeview language definition for [Prism](https://github.com/LeaVerou/prism). Based on [kbjr](https://github.com/kbjr)'s initial idea (https://github.com/LeaVerou/prism/issues/193)

## Usage

Include the CSS file after Prism theme, and the JS file after Prism core.

## Example code

```html
<pre><code class="language-treeview">
[dir] root_folder
|-- [dir] a first folder
|   |-- holidays.mov
|   |-- javascript-file.js
|   `-- some_picture.jpg
|-- [dir] documents
|   |-- spreadsheet.xls
|   |-- manual.pdf
|   |-- document.docx
|   `-- presentation.ppt
|       `-- test    
|-- [dir] empty_folder
|-- [dir] going deeper
|   |-- [dir] going deeper
|   |   `-- [dir] going deeper
|   |        `-- [dir] going deeper
|   |            `-- .secret_file
|   |-- style.css
|   `-- index.html
|-- [dir] music and movies
|   |-- great-song.mp2
|   |-- S01E02.new.episode.avi
|   |-- S01E02.new.episode.nfo
|   `-- track 1.cda
|-- .gitignore
|-- .htaccess
|-- .npmignore
|-- archive 1.zip
|-- archive 2.tar.gz
|-- logo.svg
`-- README.md
</code></pre>
```

## Result
![Result](http://puu.sh/dtrYe/d148bf1b01.png)
