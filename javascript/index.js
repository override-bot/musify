var artisteInput = document.getElementById('artisteInput');
var nameInput = document.getElementById('nameInput');
var linkInput = document.getElementById('linkInput');
var songsSection = document.getElementById('songList');

function addNewMusic(artiste, name, link) {
    // A post entry.
    var songs = {
        artiste: artiste,
        name: name,
        link: link,
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('songs').push().key;
    var updates = {};
    updates['/posts/' + newPostKey] = postData;


    return firebase.database().ref().update(updates);
}

function startDatabaseQueries() {

    var songsRef = firebase.database().ref('songs').limitToLast(100);



    var fetchPosts = function(songsRef, sectionElement) {
        var userDataRef = firebase.database().ref("songs").orderByKey();
songsRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var songData = childSnapshot.val();              

  var name = childSnapshot.val().name;
  var artiste = childSnapshot.val().artiste;
  

 

  });
});
    };

    // Fetching and displaying all posts of each sections.
    fetchPosts(songsRef, songsSection);


    // Keep track of all Firebase refs we are listening to.
    listeningFirebaseRefs.push(songsRef);

}
function createPostElement(link, name, artiste) {
   
  
    
    // Create the DOM element from the HTML.
    var div = document.createElement('div');
    div.innerHTML = html;
    var postElement = div.firstChild;
    
}