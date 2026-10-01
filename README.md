# project8-sw installer

The installer page of [project8-sw](https://github.com/R-drg/project8-sw), the Nintendo Switch port of Tony Hawk's
Project 8: **https://r-drg.github.io/project8-sw-installer/**

You give it your own copy of the Xbox 360 game (a disc image, or the extracted disc with its `default.xex`) and it
gives you a zip ready to extract into `sdmc:/switch/`. Everything runs in your browser: the game files never leave
your computer.

It is adapted from [nfsmw-nx-installer](https://github.com/StevensND/nfsmw-nx-installer) by StevensND: the same
three steps, the same disc image reader and zip writer, and the same way of streaming a package of several GB to
disk.

## What it does

1. Finds `default.xex` (in the disc image, or in the chosen folder, even one level down) and identifies it by its
   SHA-256 in `release/manifest.json`. project8-sw is compiled from one exact executable, and the game refuses any
   other at start-up, so the page refuses it first: it tells the same game in another release (by the title ID in
   the executable's header) apart from a different game.
2. Downloads `project8-sw.nro` and checks its SHA-256.
3. Writes the zip: the program, `thps_p8.toml`, `LICENSES.txt` and, for a first installation, the disc's files under
   `game/` (without the `$SYSTEMUPDATE` partition). The update package leaves the disc out and needs only
   `default.xex`.
4. Streams the zip to disk through the service worker, so it never has to fit in memory.

Unlike nfsmw-nx, nothing is made from the disc here: project8-sw translates the game's shaders on the console. So
the page needs no WebAssembly tools.

The page and the downloaded program are cached by the service worker: after the first visit it also works without a
connection.

## Layout

| Path | Contents |
|---|---|
| `index.html`, `app.js` | The page and its interface (English, Spanish, Brazilian Portuguese: `lib/i18n.js`) |
| `worker.js` | Builds the package off the main thread |
| `sw.js` | Offline cache and the download stream |
| `lib/` | Disc image reader, identification and packaging, zip writer |
| `release/` | The list of builds, the settings file and the licences that go into the zip |
| `test/` | A Node script that runs the same code as the page on a synthetic game |

## Deployment

The NRO is not stored here. It is the `project8-sw.nro` asset of a release of
[R-drg/project8-sw](https://github.com/R-drg/project8-sw/releases). The workflow in `.github/workflows/deploy.yml`
tests the package code, downloads the NRO from the latest release, checks its SHA-256 against
`release/manifest.json`, and publishes the page on GitHub Pages. It runs on every push to `main`; after publishing a
new release, run it by hand from the Actions tab. Pages must be set to deploy from GitHub Actions (Settings > Pages >
Source).

To publish a new build: update `nro_sha256` in `release/manifest.json`, copy `release/thps_p8.toml` from the
project8-sw release, and rebuild `release/LICENSES.txt` from its `LICENSE` and `NOTICE` (the introduction at the top
of the file stays).

## Testing locally

```sh
node test/package_node.mjs [path/to/default.xex]
cp /path/to/project8-sw.nro release/
python3 serve.py           # http://127.0.0.1:8194/
```

With a path to your own `default.xex`, the test also checks that the manifest knows it.

## Licence

GPL-3.0 (`LICENSE`), as nfsmw-nx-installer. Third-party parts are listed in [NOTICES.md](NOTICES.md).
