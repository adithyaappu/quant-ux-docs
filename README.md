# Quant UX Documentation

Quant UX is a free and open source quantitative user experience design and analysis tool. With functional widgets interactive prorotypes can be created and tested with users. This repository holds the documentation of the Quant-UX tool, specifically v5 of the tool.

## Contributing

This documentation is built with VitePress. Contributions are welcome, please note a few points highlighted below.

## Fork and Clone

Fork the repo to you account and then clone it to your local.

## Install

Install dependencies by running

```
npm install
```

## Run

To run development run use

```
npm run docs:dev
```

Open [http://localhost:5173/quant-ux-docs/](http://localhost:5173/quant-ux-docs/)

### Content and Structure

The project contain following base folders

- **`.github/`**: github action files to build the site and publish.

- **`.vitepress/`** directory which contain contains main configuration file, and a `theme/` folder for making changes to default theme.

- **`src/`**: All the text content in the `.md` format goes into this folder. It is further divided into subfolders based of major topics. The `src/docs` folder contain user documentation and `src/reference` will have developer documentation. The `public/` folder will contain public assets which is served by default after build.
  - **`index.md`**: The content of the homepage is written in this file as the frontmatter in the YAML format.

### `index.md` in subfolders

Content of the `index.md` file in every subfolder will be used as the content for the page corresponding to that subfolder. This page is aimed to give an introduction, an overview, or a catalogue. This page will be shown when a section is selected from the top navigation bar.

### Media Folder

Every subfolder of `src/docs/` and `src/reference/` will contain a folder named `media`. Any media files like pictures and videos that need to be added into markdown files of that **_specific section_** need to be placed in this folder.

To link pictures:

```
![alt-text](media/path-to-file)
```

To link videos

```html
<video controls="controls" src="./media/path-to-file" />
```

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

This will not show up in the markdown preview. use same `type-id` throughout to classify comments, which is useful while searching for tasks. Currently used `type-id`s are,

- todo
