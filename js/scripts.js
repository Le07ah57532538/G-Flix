function FeedBack(name,comment){
  this.name=name
  this.comment=comment
}


$(document).ready(function(){
  $("button.btn").click(function(){
  var names=new FeedBack(this.name=$("input#name").val(),
  this.comment=$("input#feedback").val());
  $("p.response").text(names.name + ' : '+ names.comment)
});
})
