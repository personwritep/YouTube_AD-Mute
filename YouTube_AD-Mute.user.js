// ==UserScript==
// @name        YouTube AD-Mute
// @namespace        http://tampermonkey.net/
// @version        0.4
// @description        YouTubeのADを非表示ミュートする
// @author        YouTube User
// @match        https://www.youtube.com/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @updateURL        https://github.com/personwritep/YouTube_AD-Mute/raw/main/YouTube_AD-Mute.user.js
// @downloadURL        https://github.com/personwritep/YouTube_AD-Mute/raw/main/YouTube_AD-Mute.user.js
// ==/UserScript==


function check(n){
    let sp=document.querySelector('.ytp-spinner');
    if(sp){
        let spc=sp.querySelector('.ytp-spinner-circle');
        if(spc){
            if(n==1){
                sp.style.display='block';
                spc.style.borderColor='#009688'; }
            else{
                sp.style.display='none';
                spc.style.borderColor='#ddd #ddd transparent'; }}}}



let target=document.querySelector('head');
let monitor=new MutationObserver(main);
monitor.observe(target, { childList: true });

main();

function main(){
    let container=document.querySelector('.video-ads');
    if(container){
        container.remove(); }

    let player=document.querySelector('#movie_player');
    let monitorp=new MutationObserver(main_p);
    monitorp.observe(player, { attributes: true, attributeFilter: ['class'] });

    main_p();

    function main_p(){
        let video=player.querySelector('.video-stream');
        if(video){
            if(player.classList.contains('ad-showing')){
                check(1);
                video.playbackRate=16;
                video.volume=0;
                video.style.opacity='0'; }
            else{
                check(0);
                video.style.opacity='1'; }}}

} // main()

