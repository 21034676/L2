// ================== EXERCISE 1 ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// // Movie Component
// const Movie = ({ title, year }) => {
//     return (
//         <View style={styles.movieContainer}>
//             <Text style={styles.movieText}>
//                 {title} {year}
//             </Text>
//         </View>
//     );
// };
//
// // Main App component
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <Movie title="Doctor Sleep" year="2019" />
//             <Movie title="Inception" year="2010" />
//             <Movie title="The Matrix" year="1999" />
//         </View>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     },
//     movieContainer: {
//         marginBottom: 20,
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
// });
//
// export default App;

// ================== EXERCISE 2 ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
//
// // Movie Component
// const Movie = ({ title, year, icon_name }) => {
//     return (
//         <View style={styles.movieContainer}>
//             <Icon name={icon_name} size={30} color="#333" style={styles.icon} />
//             <Text style={styles.movieText}>
//                 {title} {year}
//             </Text>
//         </View>
//     );
// };
//
// // Main App component
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <Movie title="Doctor Sleep" year="2019" icon_name="film" />
//             <Movie title="Inception" year="2010" icon_name="film" />
//             <Movie title="The Matrix" year="1999" icon_name="tv" />
//         </View>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     },
//     movieContainer: {
//         marginBottom: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginLeft: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
// });
//
// export default App;

// ================== EXERCISE 3 ==================
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
//
// // Movie Component
// const Movie = ({ title, year, icon_name, imageSource }) => {
//     return (
//         <View style={styles.movieContainer}>
//             {/* Image Component */}
//             <Image source={imageSource} style={styles.movieImage} />
//
//             {/* Icon and Text */}
//             <View style={styles.movieDetails}>
//                 <Icon name={icon_name} size={30} color="#333" style={styles.icon} />
//                 <Text style={styles.movieText}>
//                     {title} {year}
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
// // Main App component
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="film"
//                 imageSource={require('./assets/doctor-sleep.jpg')} // Updated path to the assets folder
//             />
//             <Movie
//                 title="Inception"
//                 year="2010"
//                 icon_name="film"
//                 imageSource={require('./assets/doctor-sleep.jpg')} // Placeholder image, change as needed
//             />
//             <Movie
//                 title="The Matrix"
//                 year="1999"
//                 icon_name="tv"
//                 imageSource={require('./assets/doctor-sleep.jpg')} // Placeholder image, change as needed
//             />
//         </View>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 10,
//     },
//     movieContainer: {
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     movieImage: {
//         width: 400,
//         height: 500,
//         marginBottom: 10,
//     },
//     movieDetails: {
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginLeft: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
// });

// ================== EXERCISE 4 ==================
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
//
// // Movie Component
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View style={styles.movieContainer}>
//             {/* Image Component */}
//             <Image source={poster} style={styles.movieImage} />
//
//             {/* Icon and Text */}
//             <View style={styles.movieDetails}>
//                 <Icon name={icon_name} size={30} color="#333" style={styles.icon} />
//                 <Text style={styles.movieText}>
//                     {title} {year}
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
// // Main App component
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="film"
//                 poster={require('./assets/doctor-sleep.jpg')} // Pass the image as a prop
//             />
//             <Movie
//                 title="Inception"
//                 year="2010"
//                 icon_name="film"
//                 poster={require('./assets/inception.jpg')} // Pass the image as a prop
//             />
//             <Movie
//                 title="The Matrix"
//                 year="1999"
//                 icon_name="tv"
//                 poster={require('./assets/the-matrix.jpg')} // Pass the image as a prop
//             />
//         </View>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 10,
//     },
//     movieContainer: {
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     movieImage: {
//         width: 400,
//         height: 500,
//         marginBottom: 10,
//     },
//     movieDetails: {
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginLeft: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
// });
//
// export default App;

// ================== EXERCISE 5 ==================
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
//
// // Movie Component
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View style={styles.movieContainer}>
//             {/* Image Component */}
//             <Image source={poster} style={styles.movieImage} />
//
//             {/* Icon and Text */}
//             <View style={styles.movieDetails}>
//                 <Icon name={icon_name} size={30} color="#333" style={styles.icon} />
//                 <Text style={styles.movieText}>
//                     {title} {year}
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
// // AllMovies Component
// const AllMovies = () => {
//     return (
//         <View style={styles.container}>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="skull"
//                 poster={require('./img/doctor-sleep.jpg')} // Poster for Doctor Sleep
//             />
//             <Movie
//                 title="Midway"
//                 year="2020"
//                 icon_name="person-rifle"
//                 poster={require('./img/midway.jpg')} // Poster for Midway
//             />
//         </View>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 10,
//     },
//     movieContainer: {
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     movieImage: {
//         width: 400,
//         height: 500,
//         marginBottom: 10,
//     },
//     movieDetails: {
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginLeft: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
// });
//
// export default AllMovies;

// ================== EXERCISE 6 ==================
// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon from FontAwesome
//
// // Movie Component
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View style={styles.movieContainer}>
//             {/* Image Component */}
//             <Image source={poster} style={styles.movieImage} />
//
//             {/* Icon and Text */}
//             <View style={styles.movieDetails}>
//                 <Icon name={icon_name} size={30} color="#333" style={styles.icon} />
//                 <Text style={styles.movieText}>
//                     {title} {year}
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
// // AllMovies Component
// const AllMovies = () => {
//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="skull"
//                 poster={require('./img/doctor-sleep.jpg')} // Poster for Doctor Sleep
//             />
//             <Movie
//                 title="Midway"
//                 year="2020"
//                 icon_name="person-rifle"
//                 poster={require('./img/midway.jpg')} // Poster for Midway
//             />
//             {/* You can add more Movie components here if needed */}
//         </ScrollView>
//     );
// };
//
// // Styles
// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 10,
//     },
//     movieContainer: {
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     movieImage: {
//         width: 400,
//         height: 500,
//         marginBottom: 10,
//     },
//     movieDetails: {
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     movieText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginLeft: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
// });
//
// export default AllMovies;
