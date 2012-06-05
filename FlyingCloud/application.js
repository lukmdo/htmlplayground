function fly_cloud ($target, top_first, top_next, duration){
  function fx(){
    $target
      .animate({top: top_first }, duration )
      .animate({top: top_next }, duration, fx);
  }
  fx();
}
