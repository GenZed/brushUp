# brushUp

A p5.js painting sketch about bringing time into painting. Made for Workshops in Creative Coding (Goldsmiths, Term 1, 2024).

The brush follows the mouse or trackpad with no clicking needed, extending Jeff Elrod's idea of "Frictionless Drawing". Its colour drifts with time through red, magenta and violet, the three oil paints I first learned to paint with. Its shape shifts frame by frame, like paint that never goes on quite evenly. To hold a single colour you have to wait for it to come round, the way you wait for paint to dry. Clicking swaps the background colour under the painting, which is something a real canvas won't let you do.

## Controls

- **Move** the mouse or trackpad to paint
- **Click** to change the background colour
- **S** to save the canvas as `mysketch.jpg`

## Run it

Serve the folder with any local web server and open `index.html`, for example:

```
python3 -m http.server
```

p5.js 1.7.0 loads from a CDN.

## Credits

- Brush based on Dave Briccetti's [A Colorful Custom Brush with P5.js](https://www.youtube.com/watch?v=YhGoi5MNyvM)
- Background/buffer approach adapted from [vidianindhita's p5 sketch](https://editor.p5js.org/vidianindhita/sketches/rJpmUmlj-), with help from Sofia Taipa Meneses de Olivera
