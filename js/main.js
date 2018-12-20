let source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);


$('#envoyer').click(function (ev) {
  // empêche le comportement par défaut
  ev.preventDefault();
  //au click sur envoyer
  let reponse = $("#name").val()
  $.getJSON("http://api.apixu.com/v1/current.json?key=6174f7eca2034a80b0793838182012&q=" + reponse)
    .done(function (data) {
      let html = template(data);
      $("#container").html(html);
      if ($("p:contains(rain)")) {
        console.log('il pleut');
        $("main").removeClass("cloudy");
        $("main").removeClass("sunny");
        $("main").addClass("rain");
      }
      else if ($("p:contains(cloudy)")) {
        console.log('nuageux');
        $("main").removeClass("rain");
        $("main").removeClass("sunny");
        $("main").addClass("cloudy");
      }
      if ($("p:contains(sunny)")) {
        $("main").removeClass("cloudy");
        $("main").removeClass("rain");
        $("main").addClass("sunny");
      }
    })
  });

