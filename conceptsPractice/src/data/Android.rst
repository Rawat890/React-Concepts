What is AGP in react native ?
In React Native, AGP stands for Android Gradle Plugin.

It’s not a React Native–specific library, but rather a tool that React Native relies on (through Gradle) to build and package Android apps.

What is the Android Gradle Plugin (AGP)?

The Android Gradle Plugin is part of the Android build system. It extends Gradle — a general build tool — with Android-specific features, such as:

Compiling Java/Kotlin code into Android bytecode (DEX)

Packaging your app into an APK or AAB (Android App Bundle)

Managing dependencies (like libraries from Maven or npm via React Native bridges)

Running lint checks and resource processing

Configuring build types (e.g., debug vs. release)

⚙️ How AGP fits into React Native

React Native projects have an android/ folder that contains Gradle files.
Inside that, you’ll find something like this in android/build.gradle:
That line — com.android.tools.build:gradle — is the Android Gradle Plugin.

It’s used together with the Gradle Wrapper (gradlew) to build the Android part of your React Native app.

Typical AGP-related tasks in React Native

Upgrading React Native or AGP versions
You might need to bump AGP when upgrading React Native or Gradle.
Example:

classpath("com.android.tools.build:gradle:8.5.0")


Compatibility with Gradle versions
Each AGP version works with a specific range of Gradle versions.
Example:

AGP 8.0.0 → Gradle 8.0+

AGP 7.0.0 → Gradle 7.0+