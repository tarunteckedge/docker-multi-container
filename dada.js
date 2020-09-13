$(document).ready(function () {
  url = "https://veggiefestchicago.org/feed/";
  $.ajax({
    type: "GET",
    url:
      document.location.protocol +
      "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=" +
      encodeURIComponent(url),
    dataType: "json",
    error: function () {
      alert("Unable to load feed, Incorrect path or invalid feed");
    },
    success: function (xml) {
      var postlist = xml.responseData.channel.item;
      var html = '<ul data-role="listview" data-filter="true">';
      $.each(postlist, function (idx, data) {
        html += "<li>";
        html += '<a href="#">';
        html += '<div class="entry">' + data.title + "</div>";
        html += '<div class="entry">' + data.author + "</div>";
        html += '<div class="entry">' + data.publishedDate + "</div>";
        html += '<div class="entry">' + data.contentSnippet + "</div>";
        html += "</a>";
        html += "</li>";
      });
      html += "</ul>";
      $("#sos-vf-recipe-feed-container").append(html);
      //$("#postlist ul[data-role=listview]").listview();
    },
  });
});
