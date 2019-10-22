<template>
<div class="music">
    <div class="box">
        <br><br>
        <h1>Spotify</h1>
        <iframe class="follow-btn" src="https://open.spotify.com/follow/1/?uri=spotify:artist:7DlRZVR6BfKye1cz4stofG&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
        <iframe src="https://open.spotify.com/embed/artist/7DlRZVR6BfKye1cz4stofG" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <h1>Soundcloud</h1>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/48514785&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.music {
    display: flex; 
    justify-content: center; 

}

.box {
    max-width: 300px;
    flex-direction: column; 
    margin-bottom: 80px;
}

.follow-btn {
    margin: 30px; 
}
</style>