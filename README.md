# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# movie-app-react-native

## About project

This mobile app is built with React Native and Expo, providing a user-friendly interface for browsing movies.  
Key features include:

- Viewing the latest movies (Latest Movies)
- Browsing trending movies by day and week (Trending Movies per day | week)
- Searching movies by title
- Detailed information about selected movies

## The project uses the TMDB API to fetch up-to-date movie data.

## Setting environment variables (.env)

This application requires some environment variables to work correctly with the API. You need to create an .env file in the root directory of your project and add the following variables to it:

```
EXPO_PUBLIC_MOVIES_BASE_URL=
EXPO_PUBLIC_MOVIES_API_KEY=
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_ENDPOINT=
```

## ⚠️ Importantly

EXPO_PUBLIC_MOVIES_API_KEY: You will need to obtain an API key from the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started).
