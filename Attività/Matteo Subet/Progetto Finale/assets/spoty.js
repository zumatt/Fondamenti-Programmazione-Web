let urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');
const elTrack = document.getElementById("track");

if (code == null) {
    // Step 1: Build Authorization URL and redirect user to Spotify
    const clientId = '---';  
    const redirectUri = 'http://127.0.0.1:5500/Attivit%C3%A0/Matteo%20Subet/Progetto%20Finale/index.html';  
    const scopes = 'user-read-playback-state user-read-currently-playing';

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;  // User is redirected to Spotify
}

// Step 2: Handle the redirect and extract the authorization code

async function getAccessToken(clientId, clientSecret, code, redirectUri) {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
        })
    });

    const data = await result.json();
    return data.access_token;
}

// Step 4: Use the access token to get currently playing track
async function getCurrentlyPlayingTrack(accessToken) {
    const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    if (result.status === 204 || result.status > 400) {
        return null;
    }

    const data = await result.json();
    return data;
}

// Function to display track information
function displayTrackInfo(track) {
    if (track) {
        let artista = "";
        let canzone = "";
        for (let i = 0; i < track.item.artists.length; i++) {
            if (i > 0) {
                artista = artista + ", " + track.item.artists[i].name;
            } else {
                artista = track.item.artists[i].name;
            }
        }
        canzone = track.item.name;
        elTrack.innerHTML = canzone + "<br><i>" + artista + "</i>";
    } else {
        elTrack.innerHTML = "Nessuna traccia in riproduzione.";
    }
}

// Main function to refresh track information every second
(async () => {
    const clientId = '---';
    const clientSecret = '---';
    const redirectUri = 'http://127.0.0.1:5500/Attivit%C3%A0/Matteo%20Subet/Progetto%20Finale/index.html';
    
    const accessToken = await getAccessToken(clientId, clientSecret, code, redirectUri);
    
    // Update the currently playing track every second
    setInterval(async () => {
        const track = await getCurrentlyPlayingTrack(accessToken);
        displayTrackInfo(track);
    }, 1000); // Update every second (1000 milliseconds)
})();