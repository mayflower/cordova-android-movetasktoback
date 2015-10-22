# What is it?

This plugin exposes `Activity::moveTaskToBack` in cordova and thus allows to
move the app to the back of the activity stack, effectively returning to the
previous activity without terminating.

# How to use it?

## Installation

Install the plugin into your cordova project via

    cordova plugin add cordova-android-movetasktoback

After installation the plugin exposes the method `Mayflower.moveTaskToBack`.

## API

Call `Mayflower.moveTaskToBack()` to move the task to the back of the stack.
Success or failure are returned as a [Promises/A+](https://promisesaplus.com/)
compliant promise.

    Mayflower.moveTaskToBack()
        .then(function() {
            console.log('success');
        })
        .otherwise(function(e) {
            console.log('failed: ' + e);
    });

**Important:** This plugin is specific to android. On all other platforms, the
call will fail and return a rejected promise.

# Test / Usage sample

There is a small usage sample in `test/index.html`. In order to use it, you'll
have to create a cordova project, add the plugin and configure `test/index.html`
as your entrypoint. The resulting app will show you a periodically increasing
counter and a button that returns to the launcher without terminating the app.

# License

The plugin is published under the Apache license v2.0 .
