100 React Native Implementation Questions
Rendering & Performance (15 questions)

Create a FlatList that implements pull-to-refresh, infinite scrolling, and displays a loading indicator at the bottom
Build a virtualized list that renders 10,000 items efficiently with dynamic heights
Implement a memoized card component that prevents unnecessary re-renders when parent state changes
Create a dashboard that uses React.memo, useMemo, and useCallback to optimize rendering of multiple child components
Build an image gallery that implements lazy loading and displays placeholder skeletons while images load
Create a search bar that debounces user input and filters a large list without causing UI jank
Implement a tab view where only the active tab's content is rendered, unmounting inactive tabs
Build a form with 20+ inputs that uses React Hook Form to prevent unnecessary re-renders
Create a custom hook that tracks component mount/unmount and renders count for performance debugging
Implement a sectioned list with sticky headers that maintains smooth scrolling performance
Build a masonry grid layout that efficiently renders images of varying heights
Create a real-time chat interface that only re-renders new messages, not the entire list
Implement windowing/virtualization for a horizontal scrolling list of cards
Build a complex nested list where parent and child items can be expanded/collapsed efficiently
Create a data table with sortable columns that handles 1000+ rows without performance issues

State Management (15 questions)

Implement a shopping cart using Context API with add, remove, update quantity, and calculate total functionality
Create a global theme switcher (light/dark mode) using Context that persists to AsyncStorage
Build a multi-step form wizard that maintains state across screens and allows going back/forward
Implement a todo app using Redux Toolkit with add, edit, delete, and toggle complete features
Create a user authentication flow with Context API managing login state, tokens, and user data
Build a notes app using Zustand that syncs state with AsyncStorage automatically
Implement an undo/redo feature for a drawing app using state management
Create a filters system (date range, categories, price) that updates a product list from an API
Build a notification system that manages global alerts/toasts with queue management
Implement optimistic UI updates for a social media post creation feature
Create a real-time counter app that syncs state across multiple screens using Redux
Build a form with conditional fields that show/hide based on previous selections
Implement a favorites/bookmarks system that persists across app sessions
Create a language switcher that updates all text throughout the app using i18n and Context
Build a settings screen where changes are immediately reflected across the app

Navigation (15 questions)

Implement a bottom tab navigator with custom icons and badge counts on specific tabs
Create a drawer navigator with user profile header and nested stack navigators
Build a stack navigator with custom header animations and shared element transitions
Implement deep linking that navigates to specific screens with parameters from external URLs
Create a modal navigator that slides up from bottom with custom backdrop behavior
Build an onboarding flow that shows on first launch and navigates to main app afterward
Implement protected routes that redirect to login if user is not authenticated
Create a nested navigator structure: Stack → Tab → Stack with proper navigation typing
Build a custom tab bar with animated icons that respond to navigation state
Implement navigation guards that prevent leaving a screen with unsaved changes
Create a wizard flow where users can't skip ahead but can go back
Build a search screen that maintains scroll position when navigating back
Implement a floating action button that changes based on current route
Create conditional navigation based on user role (admin/user/guest)
Build a navigation header that smoothly transitions between transparent and solid backgrounds

API Integration & Data Fetching (15 questions)

Create a date range filter that allows you to select start and end date and apply it when fetching data from an API
Implement infinite scroll pagination that fetches next page when user reaches bottom
Build a search feature with autocomplete that fetches suggestions from an API as user types
Create a retry mechanism for failed API calls with exponential backoff
Implement React Query to manage server state with caching, refetching, and background updates
Build a file upload component with progress indicator and ability to cancel upload
Create a polling system that fetches new data every 30 seconds when app is active
Implement optimistic updates for a like/unlike feature that syncs with backend
Build an offline-first app that queues API requests when offline and syncs when online
Create a multi-step API call where second call depends on first call's response
Implement request cancellation when user navigates away from screen during fetch
Build a download manager that shows progress for multiple file downloads
Create an image picker that uploads photos to cloud storage with compression
Implement GraphQL queries and mutations using Apollo Client
Build a real-time data sync using WebSockets that updates UI instantly

Forms & Validation (10 questions)

Create a registration form with email, password validation, and show real-time error messages
Build a dynamic form that adds/removes fields based on user interaction
Implement a multi-step form with progress indicator and validation at each step
Create a credit card input with automatic formatting (spaces every 4 digits, expiry date format)
Build a phone number input with country code selector and number formatting
Implement a form with dependent dropdowns (country → state → city)
Create a custom date/time picker component for both iOS and Android
Build a rating/review form with star rating, text input, and image upload
Implement form validation using Yup schema with custom error messages
Create a password strength meter that updates as user types

Animations & Gestures (10 questions)

Implement a swipeable card stack (like Tinder) using React Native Gesture Handler
Create an animated drawer that opens/closes with pan gesture
Build a parallax scrolling effect for a profile header that shrinks on scroll
Implement a draggable bottom sheet with snap points
Create an animated splash screen that transitions to main app
Build a pull-to-refresh animation with custom spinning loader
Implement shared element transition between list item and detail screen
Create an animated progress bar that fills based on completion percentage
Build a skeleton screen with shimmer effect while loading data
Implement a floating heart animation when user double-taps an image

Third-Party Libraries Integration (10 questions)

Integrate React Native Maps with custom markers and clustering
Implement push notifications using Firebase Cloud Messaging with local notifications
Create a QR code scanner using react-native-camera
Build a payment flow integrating Stripe payment sheet
Implement social authentication (Google, Facebook, Apple) using Firebase Auth
Create a PDF viewer/generator using react-native-pdf
Build a chart dashboard using react-native-chart-kit or Victory Native
Implement biometric authentication (fingerprint/Face ID)
Create a camera app with filters using react-native-vision-camera
Build a music player with playback controls using react-native-track-player

Storage & Persistence (5 questions)

Implement AsyncStorage for caching API responses with expiration logic
Create a secure storage solution for sensitive data like auth tokens using react-native-keychain
Build a local-first notes app using WatermelonDB or Realm
Implement SQLite database for storing large datasets with CRUD operations
Create an image caching system that stores downloaded images locally

Advanced Features (5 questions)

Build a camera feature with capture, preview, and edit capabilities
Implement background location tracking that continues when app is closed
Create a voice recording feature with playback and waveform visualization
Build a multi-language support system with RTL layout support for Arabic/Hebrew
Implement an in-app update checker that notifies users of new versions

