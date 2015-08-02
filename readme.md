sl4a client for node


you can start sl4a server remotely with

adb shell am start -a com.googlecode.android_scripting.action.LAUNCH_SERVER -n com.googlecode.android_scripting/.activity.ScriptingLayerServiceLauncher --ez com.googlecode.android_scripting.extra.USE_PUBLIC_IP true --ei com.googlecode.android_scripting.extra.USE_SERVICE_PORT 6666

