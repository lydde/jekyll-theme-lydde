//
// YAKA Play - Unity WebGL Loader
// Version 1.0.0
//
// This loader is used to load the Unity WebGL game from the YAKA Play platform.
// It is used to load the game from the YAKA Games Azure Blob Storage.
// Code is derived from the Unity WebGL loader and modified to work with the YAKA Play platform.

//
// HTML Structure
//
var container = document.querySelector("#game-container");
var canvas = document.querySelector("#game-canvas");
var loadingBar = document.querySelector("#game-loading");
var progressBarEmpty = document.querySelector("#game-progress-bar-empty");
var progressBarFull = document.querySelector("#game-progress-bar-full");
var fullscreenButton = document.querySelector("#game-fullscreen-button");
var warningBanner = document.querySelector("#game-alert");

//
// Unity WebGL Configuration
//
var buildUrl = canvas.getAttribute("unity-storage");
var gameUrl = buildUrl + "/" + canvas.getAttribute("unity-game");
var loaderUrl = gameUrl + ".loader.js";
var config = {
    dataUrl: gameUrl + ".data.br",
    frameworkUrl: gameUrl + ".framework.js.br",
    codeUrl: gameUrl + ".wasm.br",
    streamingAssetsUrl: "StreamingAssets",
    showBanner: unityShowBanner,
};

// Set Initital configuration
var aspectRatio = 16 / 9;
// var containerWidth = container.offsetWidth;
// var containerHeight = containerWidth / aspectRatio;

// Hide Warning Banner
warningBanner.style.display = "none";
// Hide Loading Bar
loadingBar.style.display = "none";
// Hide canvas
canvas.style.display = "none";

// Shows a temporary message banner/ribbon for a few seconds, or
// a permanent error message on top of the canvas if type=='error'.
// If type=='warning', a yellow highlight color is used.

function unityShowBanner(msg, type) 
{
    function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
    }
    // Create a div element to display the warning message
    var div = document.createElement('div');
        div.innerHTML = msg;
        div.role = 'alert';
    
    // Add title
    var title = document.createElement('h4');
    title.className = 'alert-heading';

    div.insertBefore(title, div.firstChild);
    
    // Add to the warning container
    warningBanner.appendChild(div);

    if (type == 'error') 
    {
        // Remove game container
        // canvas.remove();

        // Set Alert
        title.innerHTML = 'We have an issue to solve!';
        div.className = 'alert alert-danger';
    }
    else {
        if (type == 'warning') 
        {
            title.innerHTML = 'We have some difficulty!';
            div.className = 'alert alert-warning';
        }
        setTimeout(
            function() 
            {
                warningBanner.removeChild(div);
                updateBannerVisibility();
            }, 
            5000);
    }


    updateBannerVisibility();
}



// By default, Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;



if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
// Mobile device style: fill the whole browser client area with the game canvas:

var meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
document.getElementsByTagName('head')[0].appendChild(meta);
container.className = "unity-mobile";
canvas.className = "unity-mobile";

// To lower canvas resolution on mobile devices to gain some
// performance, uncomment the following line:
// config.devicePixelRatio = 1;

} else {

    // Desktop style: Render the canvas as a container
    // Initial size is set to 960x540 (540p / qHD / 16:9 aspect ratio)
    // Collect the game container width and set the canvas size to the container width
    // calculate the height based on the aspect ratio of the game

    var aspectRatio = 16 / 9;
    var containerWidth = container.offsetWidth + "px";
    var containerHeight = containerWidth / aspectRatio;

    //container.style.height = containerHeight + "px";

    //canvas.style.width = containerWidth;
    //canvas.style.height = containerHeight;
}



//
// Load Game script
//
var script = document.createElement("script");
script.src = loaderUrl;
script.onerror = () => {
    // Hide Loading Bar
    loadingBar.style.display = "none";
    // Hide canvas
    canvas.style.display = "none";
    // Show Error
    unityShowBanner("Failed to load your game. We cannot find " + script.src, "error")
}
script.onload = () => {
    // Script loading succeed
    createUnityInstance(canvas, config, (progress) => {
        // Show Loading Bar
        loadingBar.style.display = "block";
        // Show canvas
        canvas.style.display = "block";

        // Update Progress Bar
        var progressLoading = 100 * progress + "%";

        progressBarFull.style.width = progressLoading;
        progressBarFull.innerHTML = progressLoading;
        progressBarEmpty.ariaValueNow = progress;

            }).then((unityInstance) => {
            loadingBar.style.display = "none";
            fullscreenButton.onclick = () => {
                unityInstance.SetFullscreen(1);
            };
            }).catch((message) => {
            alert(message);
            });
};

document.body.appendChild(script);