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

## Quick Start

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

```yaml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags

# Website favicon configuration
# Generate favicons using https://favicon.io/favicon-converter/
# After generation, place all files in the source/favicon_io directory:
# - android-chrome-192x192.png
# - android-chrome-512x512.png
# - apple-touch-icon.png
# - favicon-16x16.png
# - favicon-32x32.png
# - favicon.ico
# - site.webmanifest
favicon:
  enable: true
  icon: /favicon_io/favicon.ico     # Basic favicon
  apple_touch_icon: /favicon_io/apple-touch-icon.png  # iOS device icon
  android_chrome_icon: /favicon_io/android-chrome-192x192.png  # Android Chrome icon
  manifest: /favicon_io/site.webmanifest  # PWA application configuration file

# Whether to show read more button
read_more_btn: false

# MathJax support
mathjax:
  enable: true
  cdn: https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js?config=TeX-AMS-MML_HTMLorMML

# Table of contents configuration
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

## Contributing

Issues and Pull Requests are welcome.

## License

[MIT License](LICENSE) 