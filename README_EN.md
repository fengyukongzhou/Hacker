# Hexo Theme Hacker

> This theme is based on [CodeDaraW/Hacker](https://github.com/CodeDaraW/Hacker)

[中文说明](README.md)

A simple, elegant Hexo theme focused on writing and reading experience. Demo: [fengyukongzhou.github.io](https://fengyukongzhou.github.io)

## Preview
![Hacker Theme Preview](preview.png)

## Features

- 🎨 Minimalist design, content-focused
- 📱 Responsive layout with dark mode support for mobile devices
- 💡 Code highlighting support
- 📑 Article table of contents
- ❤️ Article like button
- 💬 Multiple comment systems support
- 📊 Google Analytics and Baidu Statistics support
- 📝 MathJax support
- 📈 Integrated hexo-graph data visualization
- 🖋 Elegant typography with special handling for Chinese/English italics
- 📌 Beautiful blockquote design with different citation styles for Chinese and English

## Quick Start

### Prerequisites

Install required plugins:
```bash
# Install hexo-graph plugin for data visualization
npm install hexo-graph

# Or using yarn
yarn add hexo-graph

# Or using pnpm
pnpm add hexo-graph
```

### Installation

```bash
git clone https://github.com/fengyukongzhou/Hacker.git themes/hacker
```

### Configuration

1. Modify `_config.yml` in your Hexo root directory:
```yaml
theme: hacker
```

2. Create and edit the theme configuration file by referring to `_config.example.yml`:
```bash
cp themes/hacker/_config.example.yml themes/hacker/_config.yml
```

3. Modify the theme configuration file `themes/hacker/_config.yml` as needed

### Update Theme

```bash
cd themes/hacker
git pull
```

## Configuration Guide

### Basic Configuration

#### Navigation Menu
Configure the website navigation menu items. You can customize and add the links you need.

```yaml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
```

#### Website Favicon
The theme supports comprehensive favicon configuration for various devices. You can use [favicon.io](https://favicon.io/favicon-converter/) to generate the required icon files online. After generation, place all files in the `source/favicon_io` directory.

Supported icon files include:
- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- site.webmanifest

Configuration example:
```yaml
favicon:
  enable: true
  icon: /favicon_io/favicon.ico
  apple_touch_icon: /favicon_io/apple-touch-icon.png
  android_chrome_icon: /favicon_io/android-chrome-192x192.png
  manifest: /favicon_io/site.webmanifest
```

#### Read More Button
Control whether to display the "Read More" button in the article list.

```yaml
read_more_btn: false
```

#### MathJax Support
Enable MathJax to support mathematical formula rendering.

```yaml
mathjax:
  enable: true
  cdn: https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js?config=TeX-AMS-MML_HTMLorMML
```

#### Table of Contents
Configure whether to display article table of contents and numbering.

```yaml
toc:
  enable: true
  number: true
```

### Comment Systems

Supports multiple comment systems:
- Gitalk
- Gitment
- Valine
- Disqus
- Utterances
- Livere
- Giscus

### Analytics

Supports Google Analytics and Baidu Statistics. Just fill in the corresponding tracking ID in the configuration file.

### Like Button

Article like button feature based on LeanCloud, requires configuration:
```yaml
like_button:
  enable: true
  appId: your-app-id
  appKey: your-app-key
  serverURL: your-server-url
```

## Usage Guide

### Blockquotes

The theme provides beautifully designed blockquotes with support for different citation styles in Chinese and English environments.

#### Basic Usage

```markdown
> This is a quoted text.
> 
> This is the second paragraph of the quote.
```

#### Adding Citation Sources

Blockquotes support adding citation sources, which will be displayed at the bottom right of the blockquote. The dash style will automatically adapt based on the language:

**English Environment** (using single em dash):

```markdown
> This is an English quote.
> 
> <footer lang="en">Source</footer>
```

**Chinese Environment** (using double em dash):

```markdown
> 这是一段中文引用。
> 
> <footer lang="zh">引用来源</footer>
```

You can also use the `<cite>` tag instead of the `<footer>` tag:

```markdown
> This is a quoted text.
> 
> <cite lang="en">Source</cite>
```

#### Blockquote Style Features

- Beautiful visual design, including quotation mark decoration and gradient bottom border
- Hover effect, where the blockquote slightly rises and increases shadow
- Dark mode compatible, with excellent display in different themes
- Automatically adjusts dash style based on language environment: English uses single em dash (—), Chinese uses double em dash (——)

## Contributing

Issues and Pull Requests are welcome.

## License

[MIT License](LICENSE) 