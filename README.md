# Minimal example showing JS/coffee strangeness

Given `app/assets/javascripts/foo.js`, add (or remove) the empty file
`app/assets/javascripts/foo.js.coffee` and the client will loop (and not
loop) the setInterval() anonymous function, as if the clearInterval()
was not called.

Also tried sprockets 2.4.4, same behaviour.

In any case, (effectively) duplicate filenames are probably not
supported in sprockets.

# Related?

http://stackoverflow.com/questions/8024828/sprockets-duplicate-file-naming
