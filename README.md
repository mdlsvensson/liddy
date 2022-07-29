<h1 align="center">
  <img src="https://picsum.photos/400/300" alt="Lorem picsum temporary logo image" />
</h1>
<h2 align="center">
  <img alt="Iconic font aggregator, collection, and patcher" src="https://picsum.photos/300/100">
</h2>

<div align="center">

[Releases][releases]&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Documentation][docs]

</div>

**Free, open, and self-hostable** project management app built with Svelte, TypeScript and Tailwindcss.

## Important Notices
* `master` branch file paths are **not** considered stable. [Verify your repository URI references](#unstable-file-paths)
* cloning this repository is **not** recommended ([due to Repo size](#option-5-clone-the-repo)) unless you are going to be [contributing to development](#contributing)


## Table of Contents

[**TL;DR**](#tldr)

[**Installation Options**](#font-installation)
  * [**1 - Manual**](#option-1-download-and-install-manually)
  * [**2 - Release Archive Download**](#option-2-release-archive-download)
  * [**3 - Install Script**](#option-3-install-script)
  * [**4 - Homebrew Fonts (macOS (OS X))**](#option-4-homebrew-fonts)
  * [**5 - Clone Repo**](#option-5-clone-the-repo)
  * [**6 - Ad Hoc Curl Download**](#option-6-ad-hoc-curl-download)
  * [**7 - Arch User Repository (AUR) (Arch Linux)**](#option-7-unofficial-arch-user-repository-aur)
  * [**8 - Patch Your Own Font**](#option-8-patch-your-own-font)

[**Features**](#features)
  * [**Glyph/Icon sets**](#glyph-sets)
  * [**Patched Fonts**](#patched-fonts)
  * [**Combinations**](#combinations)
  * [**Font Patcher**](#font-patcher)

[**Developer / Contributor**](#font-patcher)
  * [**Font Patcher**](#font-patcher)
  * [**Gotta Patch 'em All Font Patcher!**](#gotta-patch-em-all)
  * [**Other Good Fonts to Patch**](#other-good-fonts-to-patch)
  * [**Contributing**](#contributing)

[**Project Motivation**](#project-motivation)

**Additional Info**
  * [**Unstable file paths on master**](#unstable-file-paths)
  * [**Changelog**](#changelog)
  * [**License**](#license)


## TL;DR
  Nerd Fonts takes popular programming fonts and adds a bunch of Glyphs.
  There is also a [font patcher](#font-patcher) available if your desired font isn't already patched.
  For more high level information see the [wiki][wiki]. If you are looking for the Vim plugin see [VimDevIcons ➶][vim-devicons].

### Various Download Options for Fonts

_If you..._

  * `Option 1.` want to **quickly** grab an **individual font** download from the [`patched-fonts/` directory](#patched-fonts)
  * `Option 2.` want to download a **font family** package of variations (bold, italic, etc.) see [download an archive](#option-2-release-archive-download)
  * `Option 3.` want to **automate** installing or use in **scripts** see the [Install Script](#option-3-install-script)
  * `Option 4.` are on **macOS** and want to use **Homebrew** see [Homebrew Fonts](#option-4-homebrew-fonts)
  * `Option 5.` want **complete control** then see [cloning the repo](#option-5-clone-the-repo)
  * `Option 6.` want to use the **`curl` command** or use in **scripts** see [Ad Hoc Curl Download](#option-6-ad-hoc-curl-download)
  * `Option 7.` are on **Arch Linux** and want to use **AUR packages** see [Unofficial Arch User Repositories](#option-7-unofficial-arch-user-repository-aur)
  * `Option 8.` want to patch your own font see the [Font Patcher](#option-8-patch-your-own-font)

## Features
* A [FontForge Python script](#font-patcher) to patch any font
  * Includes an option to create **Monospaced (fixed-pitch, fixed-width)** _or_ **double-width (non-monospaced)** glyphs
  * For more details see the [**Font Patcher**](#font-patcher) section
* **`51`** already [patched font families](#patched-fonts)
* Over **`1,444,400`** unique combinations/variations of patched fonts [(more details)](#combinations)
* Over **`2,824`** glyphs/icons combined [(more details)](#combinations)
  * Current glyph sets include: [Powerline with Extra Symbols][ryanoasis-powerline-extra-symbols], [Font Awesome][font-awesome], [Material Design Icons][font-material-design-icons], [Weather][font-weather], [Devicons][vorillaz-devicons], [Octicons][octicons], [Font Logos][font-linux] (Formerly [Font Linux][font-linux]), [Pomicons][gabrielelana-pomicons], [Codeicons][codicons]
* **Monospaced (fixed-pitch, fixed-width)** _or_ **double-width (non-monospaced)** glyphs version of each font
  * This refers to the Nerd Font glyphs themselves not necessarily the Font as a whole
* A Developer/Contributor provided [bash script](#gotta-patch-em-all) to re-patch all the fonts


## Glyph Sets

:mag: :mag: You can now search for glyphs easily on [NerdFonts.com][Cheat Sheet] via the [Cheat Sheet][]

See [Wiki: Glyph Sets and Codepoints for more details][wiki-glyph-sets-codepoints]

### Icon names in shell

See [Wiki: Icon names in shell][wiki-icon-names-in-shell]


## Patched Fonts

| Font Name                                         | Font Name and Repository          |\*RFN | EM Size | Status            |
|:--------------------------------------------------|:----------------------------------|:-----|:--------|:------------------|
| [3270 Nerd Font][p-3270]                          | [3270][f-3270]                    | NO   | 1000    | ![w] ![m2] ![l]   |
| [Agave][p-agave]                                  | [Agave][f-agave]                  | NO   | 2048    | ![w] ![m2] ![l]   |
| [Anonymice Nerd Font][p-anonymous-pro]            | [Anonymous Pro][f-a-pro]          | NO   | 2048    | ![w] ![m2] ![l]   |
| [Arimo][p-arimo]                                  | [Arimo][f-arimo]                  | NO   | 2048    | ![w] ![m2] ![l]   |
| [Aurulent Sans Mono Nerd Font][p-aurulent]        |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [BigBlueTerminal][p-bigblueterm]                  |                                   | NO   | 1200    | ![w] ![m2] ![l]   |
| [Bitstream Vera Sans Mono Nerd Font][p-bitstream] |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Blex*][p-blex]                                   | [IBM Plex Mono][f-ibm-plex]       | YES  | 1000    | ![w] ![m2] ![l]   |
| [Caskaydia Cove Nerd Font*][p-cascadia]           | [Cascadia Code][f-cascadia]       | YES  | 2048    | ![w] ![m2] ![l]   |
| [Code New Roman Nerd Font][p-code-nr]             |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Cousine Nerd Font][p-cousine]                    | [Cousine][f-cousine]              | NO   | 1000    | ![w] ![m2] ![l]   |
| [DaddyTimeMono][p-daddytimemono]                  | [DaddyTimeMono][f-daddytimemono]  | NO   | 1024    | ![w] ![m2] ![l]   |
| [DejaVu Sans Mono Nerd Font][p-dejavu]            |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Droid Sans Mono Nerd Font][p-droid]              |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Fantasque Sans Nerd Font][p-fantasque]           | [Fantasque Sans][f-fant]          | NO   | 2048    | ![w] ![m2] ![l]   |
| [Fira Code Nerd Font][p-fira-code]                | [Fira Code][f-fira-code]          | NO   | 1000    | ![w] ![m2] ![l]   |
| [Fira Mono Nerd Font][p-fira-mono]                | [Fira][f-fira-mono]               | NO   | 1000    | ![w] ![m2] ![l]   |
| [Go Mono Nerd Font][p-go-mono]                    | [Go-Mono][f-go-mono]              | NO   | 1000    | ![w] ![m2] ![l]   |
| [Gohu Nerd Font][p-gohu]                          | [Gohu TTF][f-gohu2],[Gohu][f-gohu]| NO   | 1000    | ![w] ![m2] ![l]   |
| [Hack Nerd Font][p-hack]                          | [Hack][f-hack]                    | NO   | 2048    | ![w] ![m2] ![l]   |
| [Hasklug Nerd Font*][p-hasklig]                   | [Hasklig][f-hasklig]              | YES  | 1000    | ![w] ![m2] ![l]   |
| [Heavy Data Mono Nerd Font][p-heavy-data]         |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Hurmit Nerd Font][p-hermit]                      |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [iM-Writing*][p-im-writing]                       | [iA-Writer][f-ia-writer]          | YES  | 1000    | ![w] ![m2] ![l]   |
| [Inconsolata Nerd Font][p-inconsolata]            |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Inconsolata Go Nerd Font][p-inconsolata-go]      |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Inconsolata LGC Nerd Font][p-inconsolata-lgc]    |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Iosevka Nerd Font][p-iosevka]                    | [Iosevka][f-iosevka]              | NO   | 1000    | [#83][s-iosevka]  |
| [JetBrains Mono][p-jetbrains-mono]                | [JetBrains Mono][f-jetbrains-mono]| NO   | 1000    | ![w] ![m2] ![l]   |
| [Lekton Nerd Font][p-lekton]                      |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Literation Mono Nerd Font*][p-liberation]        | [Liberation][f-liberation]        | YES  | 2048    | ![w] ![m2] ![l]   |
| [Lilex Nerd Font][p-lilex]                        | [Lilex][f-lilex]                  | NO   | 2000    | ![w2] ![m2] ![l]  |
| [Meslo Nerd Font][p-meslo]                        |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Monofur Nerd Font][p-monofur]                    |                                   | NO   | 2400    | ![w] ![m2] ![l]   |
| [Monoid Nerd Font][p-monoid]                      |                                   | NO   | 1536    | ![w] ![m2] ![l]   |
| [Mononoki Nerd Font][p-mononoki]                  | [Mononoki][f-mononoki]            | NO   | 1024    | ![w] ![m2] ![l]   |
| [M+ (MPlus) Nerd Font][p-mplus]                   |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Noto][p-noto]                                    |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [OpenDyslexic][p-opendyslexic]                    |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Overpass][p-overpass]                            |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [ProFont (Windows tweaked) Nerd Font][p-profont]  |                                   | NO   | 1200    | ![w] ![m2] ![l]   |
| [ProFont (x11) Nerd Font][p-profont]              |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [ProggyClean Nerd Font][p-proggy-clean]           |                                   | NO   | 2048    | Imperfect         |
| [Roboto Mono][p-roboto]                           |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Sauce Code Nerd Font][p-source-code-pro]         | [Source][f-source]                | YES  | 1000    | ![w] ![m2] ![l]   |
| [Shure Tech Mono Nerd Font*][p-share-tech-mono]   | [Share Tech Mono][f-share]        | YES  | 1000    | ![w] ![m2] ![l]   |
| [Space Mono Nerd Font][p-space-mono]              | [Space Mono][f-space]             | NO   | 1000    | ![w] ![m2] ![l]   |
| [Terminess Nerd Font*][p-terminus]                | [Terminus Font][f-terminus]       | YES  | 1000    | ![w] ![m2] ![l]   |
| [Tinos][p-tinos]                                  |                                   | NO   | 2048    | ![w] ![m2] ![l]   |
| [Ubuntu Nerd Font][p-ubuntu]                      |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Ubuntu Mono Nerd Font][p-ubuntu-mono]            |                                   | NO   | 1000    | ![w] ![m2] ![l]   |
| [Victor Mono][p-victor]                           | [Victor Mono][f-victor]           | NO   | 1000    | ![w] ![m2] ![l]   |

<sub>_*RFN = Reserved Font Name_</sub>

## Combinations

- Over **`1,485,000`** unique variations/combinations (Power Set) of patched fonts:
  - **`50`** patched font typefaces
  - **`719`** patched font families
  - **`2,876`** 'complete' variations/combinations
  - **`'1,485,410'`** _possible_ variations/combinations
  - - **`1,488,286`** total calculated combinations (2,876 + 1,428,110)
- Combinations for each font are any combination of [Variations](#variations)

### Variations

- no flags given (defaults to only **Seti-UI + Custom** and **[Devicons][vorillaz-devicons]**)
- **double _(variable/proportional)_** or **single _(fixed/monospaced)_** width glyphs
- [Font Awesome][font-awesome]
- [Font Awesome Extension][font-awesome-extension]
- [Material Design Icons][font-material-design-icons]
- [Weather][font-weather]
- [GitHub Octicons][octicons]
- [Font Logos][font-linux] (Formerly [Font Linux][font-linux])
- [Powerline Extra Symbols][ryanoasis-powerline-extra-symbols]
- [IEC Power Symbols][website-iecpower]
- [Pomicons][gabrielelana-pomicons]
- [Codicons][codicons]
- Windows Compatibility


## Font Installation

### `Option 1: Download and Install Manually`

> Best option for **quickly** getting a specific **individual font**.

Download the specific [patched font](#patched-fonts) of your choice

### `Option 2: Release Archive Download`

> Best option if you want an **archive** or complete **font family** of variations (Bold, Italic, etc.).

Fonts are available for download as packages in the [latest release](https://github.com/ryanoasis/nerd-fonts/releases/latest)

### `Option 3: Install Script`

> Best option if you want to **automate** installing or for use in **scripts**.

_Note_: **Requires cloning** the repo as of now

#### All fonts:

* Installs all the patched Fonts (_Warning: This is a lot of Fonts adding up to a large size_)

```sh
./install.sh
```

or, in Powershell (Windows only):

```pwsh
./install.ps1
```

#### Single font:

* Installs a single Font of your choice

```sh
./install.sh <FontName>
./install.sh Hack
./install.sh HeavyData
```

or, in Powershell (Windows only):

```pwsh
./install.ps1 <FontName>
./install.ps1 Hack
./install.ps1 HeavyData
```

### `Option 4: Homebrew Fonts`

> Best option if on **macOS** and want to use **Homebrew**.

All fonts are available via [Homebrew Cask Fonts](https://github.com/Homebrew/homebrew-cask-fonts) on macOS (OS X)

```sh
brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

### `Option 5: Clone the Repo`

> Best option for **full control**, **all** or **some** of the fonts, or **contributing** to development.

A full clone of this repository is **not** required nor efficient (mostly due to Repository size) if you are simply only interested in a limited set of fonts.  

If you do want to clone the entire repo be sure to _shallow_ clone:
```sh
git clone --depth 1
```

If you want to clone a sub-directory, use `git sparse-checkout`. The following example requires `Git v2.26`:

```sh
git clone --filter=blob:none --sparse git@github.com:ryanoasis/nerd-fonts
cd nerd-fonts
git sparse-checkout add patched-fonts/JetBrainsMono
```

### `Option 6: Ad Hoc Curl Download`

> Option if you want to use the **`curl` command** or for use in **scripts**.

#### Linux

```sh
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLo "Droid Sans Mono for Powerline Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete.otf
```

_Note:_ deprecated alternative paths: `~/.fonts`

#### macOS (OS X)

```sh
cd ~/Library/Fonts && curl -fLo "Droid Sans Mono for Powerline Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete.otf
```

### `Option 7: Unofficial Arch User Repository (AUR)`

> Option for **Arch Linux** and wanting to use **AUR packages**.

The following fonts are available via [AUR packages](https://aur.archlinux.org/) on Arch Linux:

* [Nerd Fonts Complete (double-width)](https://aur.archlinux.org/packages/nerd-fonts-complete/)
* [Nerd Fonts Complete (single-width) (out of date)](https://aur.archlinux.org/packages/nerd-fonts-complete-mono-glyphs/)
* [Nerd Fonts DejaVu Complete](https://aur.archlinux.org/packages/nerd-fonts-dejavu-complete/)
* [Nerd Fonts Source Code Pro Complete](https://aur.archlinux.org/packages/nerd-fonts-source-code-pro/)
* [Nerd Fonts Git (out of date)](https://aur.archlinux.org/packages/nerd-fonts-git/)
* [Nerd Fonts Fira Code](https://aur.archlinux.org/packages/nerd-fonts-fira-code/)
* [Nerd Fonts Terminus](https://aur.archlinux.org/packages/nerd-fonts-terminus/)
* [Nerd Fonts Liberation Mono](https://aur.archlinux.org/packages/nerd-fonts-liberation-mono/)
* [Nerd Fonts Go Mono](https://aur.archlinux.org/packages/nerd-fonts-go-mono/)
* [Nerd Fonts Anonymous Pro](https://aur.archlinux.org/packages/nerd-fonts-anonymous-pro/)
* [Nerd Fonts Noto](https://aur.archlinux.org/packages/nerd-fonts-noto/)
* [Nerd Fonts Inconsolata](https://aur.archlinux.org/packages/nerd-fonts-inconsolata/)

### `Option 8: Patch Your Own Font`

> The option for **patching** your **own font** or fully **customizing** the patched font.

Use the provided Python command line script to generate a patched font from your own font to get the extra new glyphs

See: [Font Patcher](#font-patcher) for usage

* use this option if you do __not__ want to use one of the [fonts provided](#patched-fonts)
* you will still need to copy the generated font to the correct font directory on your system


<h2 align="center" id="font-patcher">
	<img src="images/nerd-fonts-patcher-logo.png" alt="Nerd Fonts Patcher">
</h2>

Patching the font of your own choosing for use with the [VimDevIcons ➶][vim-devicons]:
* requires: Python 2 (or Python 3), `python-fontforge` package (version `20141231` or later, see
  the [install instructions](http://designwithfontforge.com/en-US/Installing_Fontforge.html))
* alternative install method on OSX: `brew install fontforge`
* alternative method on Linux: Using the [AppImage](https://github.com/fontforge/fontforge/releases)
* alternative method using Docker: [Docker Hub](https://hub.docker.com/r/nerdfonts/patcher)
* Usage:

  ```
  ./font-patcher PATH_TO_FONT
  ```

* Alternative usage: Execute the patcher with the FontForge binary using the script flag:

  ```
  fontforge -script font-patcher PATH_TO_FONT
  ```

* Patching fonts using the AppImage:

  _Note_: `chmod u+x` the AppImage after download. All supplied paths need to be **absolute** and an explicit output path is required! If everything is located in the same directory, you can use the `$PWD` shorthand.

  ```
  ./FontForge.AppImage -script $PWD/font-patcher $PWD/BaseFont.ttf -out /tmp
  ```
  
* Patching fonts with Docker:

  ```
  docker run -v /path/to/fonts:/in -v /path/for/output:/out nerdfonts/patcher [OPTIONS]
  ```

Full options:

```
usage: font-patcher [-h] [-v] [-s] [-l] [-q] [-w] [-c] [--fontawesome]
                    [--fontawesomeextension] [--fontlinux] [--octicons]
                    [--powersymbols] [--pomicons] [--powerline]
                    [--powerlineextra] [--material] [--weather]
                    [--custom [CUSTOM]] [--postprocess [POSTPROCESS]]
                    [--removeligs] [--configfile [CONFIGFILE]]
                    [--progressbars | --no-progressbars] [--careful]
                    [-ext [EXTENSION]] [-out [OUTPUTDIR]]
                    font

Nerd Fonts Font Patcher: patches a given font with programming and development related glyphs

* Website: https://www.nerdfonts.com
* Version: 2.0.0
* Development Website: https://github.com/ryanoasis/nerd-fonts
* Changelog: https://github.com/ryanoasis/nerd-fonts/blob/master/changelog.md

positional arguments:
  font                  The path to the font to patch (e.g., Inconsolata.otf)

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -s, --mono, --use-single-width-glyphs
                        Whether to generate the glyphs as single-width not double-width (default is double-width)
  -l, --adjust-line-height
                        Whether to adjust line heights (attempt to center powerline separators more evenly)
  -q, --quiet, --shutup
                        Do not generate verbose output
  -w, --windows         Limit the internal font name to 31 characters (for Windows compatibility)
  -c, --complete        Add all available Glyphs
  --fontawesome         Add Font Awesome Glyphs (http://fontawesome.io/)
  --fontawesomeextension
                        Add Font Awesome Extension Glyphs (https://andrelzgava.github.io/font-awesome-extension/)
  --fontlinux, --fontlogos
                        Add Font Linux and other open source Glyphs (https://github.com/Lukas-W/font-logos)
  --octicons            Add Octicons Glyphs (https://octicons.github.com)
  --powersymbols        Add IEC Power Symbols (https://unicodepowersymbol.com/)
  --pomicons            Add Pomicon Glyphs (https://github.com/gabrielelana/pomicons)
  --powerline           Add Powerline Glyphs
  --powerlineextra      Add Powerline Glyphs (https://github.com/ryanoasis/powerline-extra-symbols)
  --material, --materialdesignicons, --mdi
                        Add Material Design Icons (https://github.com/templarian/MaterialDesign)
  --weather, --weathericons
                        Add Weather Icons (https://github.com/erikflowers/weather-icons)
  --custom [CUSTOM]     Specify a custom symbol font. All new glyphs will be copied, with no scaling applied.
  --postprocess [POSTPROCESS]
                        Specify a Script for Post Processing
  --removeligs, --removeligatures
                        Removes ligatures specified in JSON configuration file
  --configfile [CONFIGFILE]
                        Specify a file path for JSON configuration file (see sample: src/config.sample.json)
  --progressbars        Show percentage completion progress bars per Glyph Set
  --no-progressbars     Don't show percentage completion progress bars per Glyph Set
  --careful             Do not overwrite existing glyphs if detected
  -ext [EXTENSION], --extension [EXTENSION]
                        Change font file type to create (e.g., ttf, otf)
  -out [OUTPUTDIR], --outputdir [OUTPUTDIR]
                        The directory to output the patched font file to
```

#### Examples

```
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf -s -q
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf --use-single-width-glyphs --quiet
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf -w
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf --windows --quiet
./font-patcher Droid\ Sans\ Mono\ for\ Powerline.otf --windows --pomicons --quiet

./font-patcher Inconsolata.otf --fontawesome
./font-patcher Inconsolata.otf --fontawesome --octicons --pomicons
./font-patcher Inconsolata.otf

./FontForge.AppImage -script /tmp/nerdfonts/font-patcher /tmp/nerdfonts/CascadiaMonoPL-Semibold.ttf --fontawesome -out /tmp
./FontForge.AppImage -script $PWD/font-patcher $PWD/CascadiaMonoPL-Semibold.ttf --octicons -out $HOME

docker run --rm -v ~/myfont/patchme:/in -v ~/myfont/patched:/out nerdfonts/patcher
docker run --rm -v ~/Desktop/myfont/patchme:/in -v ~/Desktop/myfont/patched:/out nerdfonts/patcher --fontawesome
```

<a name="gotta-patch-em-all"></a>
## Gotta Patch 'em All Font Patcher!

* for Contributor or Developer use

* re-patches **all** fonts in the unpatched directory:

  ```
  ./gotta-patch-em-all-font-patcher\!.sh
  ```

* can optionally limit to specific font name pattern:

  ```
  ./gotta-patch-em-all-font-patcher\!.sh Hermit
  ```

## Contributing

See [contributing.md](contributing.md)


## Unstable File Paths

:warning: Warning: File paths may change based on releases (especially **major** version bumps)

Reference the **release** branch and _not_ the ~~master~~ branch because paths are subject to change for each release

* For example:
  * :white_check_mark: Use: <code>https\://github.com/ryanoasis/nerd-fonts/blob/<b>0.9.0</b>/patched-fonts/Hermit/Medium/complete/Hurmit%20Medium%20Nerd%20Font%20Complete.otf</code>
  * :x: Instead of: <code>https\://github.com/ryanoasis/nerd-fonts/blob/<del>master</del>/patched-fonts/Hermit/Medium/complete/Hurmit%20Medium%20Nerd%20Font%20Complete.otf</code>


## Other Good Fonts to Patch

Non exhaustive list of fonts that would benefit from being patched but are not included in Nerd Fonts due to their license (proprietary, commercial, etc.):

* [Input Mono][input-mono]
* [PragmataPro][pragmatapro]
* [Consolas][consolas]
* [Operator Mono][operator]
* [Dank Mono][dank]


## Project Motivation

See [Wiki: Project Purpose][wiki-project-purpose]


## Changelog

See [changelog.md](changelog.md)

## License

See [LICENSE][LICENSE]

[docs]:https://github.com/mdlsvensson/liddy/wiki
[releases]:https://github.com/mdlsvensson/liddy/releases
