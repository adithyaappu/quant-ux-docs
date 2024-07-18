# Quant UX Documentation

Quant UX is a free and open source quantitative user experience design and analysis tool. With functional widgets interactive prorotypes can be created and tested with users. This repository holds the documentation of the Quant-UX tool, specifically v5 of the tool.

## Contributing

This documentation is built with VuePress. Contributions are welcome, please note a few points highlighted below.

## Fork and Clone

Fork the repo to you account and then clone it to your local.

## Run

```
npm run docs:dev
```

Open [http://localhost:8080/](http://localhost:8080/)

### Content and Structure

The entire documentation is in the directory `docs/`, with 3 sub-folders and a README.md file. Sub-folders are,

- **.vuepress/**: contains main configuration file, a `public/` folder which is served by default, and a `styles/` folder for making changes to default theme.
- **content/**: entire text content in the `.md` format goes into this folder. It is further divided into subfolders based of major topics.
- **icons/**: this folder is _only_ for a VuePress plug-in, [vuepress-plugin-svg-icons](https://github.com/ntnyq/vuepress-plugin-svg-icons). This is used for inline icons inside the markdown documents.
- **README.md**: content of the homepage is written here in YAML, as the frontmatter of that file.

### README in the Subfolder

Content of the `README.md` file in every subfolder will be used as the content for the page corresponding to that subfolder. This page is aimed to give an introduction, an overview, or a catalogue. This page will be shown when the section is selected from the top navigation bar.

### Media Folder

Every subfolder of `content/` will contain a folder named `media`. Any media files like pictures that need to be added into markdown files of that **_specific section_** need to be placed in this folder. Then the files can be linked by simply `![alt-text](media/path-to-file)`.

### Structure File

_**Note:** This structure file only for planning and then use as a reference. VuePress does not use it in any manner_

Before contributing please finalise the structure of the content that will be added. This structure is added into a `_structure.yaml` file in every subfolder under the `content/`. In this YAML file `keys` are filenames and values are second level headings.

As an example consider this,

```yaml
- features-overview:
    - prototype
```

the `features-overview` will be a file under the same folder with filename `features-overview.md`, and the `prototype` will be a second level heading `## Prototype` inside this file. The markdown file should have a title `# Feature Overview` which will be used as the displaying text in the sidebar.

### Commenting

_**Note:** This is a work around. use as minimum as possible._

Markdown does not support comments by default. As a work around, linked references are used as comments.

Syntax is,

```markdown
[type-id]: comment
```

For example,

```markdown
[todo]: update the image
```

This will not show up in the markdown preview. use same `type-id` through out to classify comments, which is useful while searching for tasks. Currently used `type-id`s are,

- todo
